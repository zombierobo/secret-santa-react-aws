import { type ClientSchema, a, defineData, defineFunction } from "@aws-amplify/backend";


// custom lambda handlers

const participantLandingPageEventDetailsHandler = defineFunction({
  entry: './participantLandingPageEventDetails-handler/handler.ts'
})


const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  Event: a
    .model({
      name: a.string().required()
        .authorization(allow => [
          allow.guest().to(["read"]),
          allow.owner()
        ]),
      participants: a.hasMany('Participant', 'eventId'),
    }).authorization((allow) => [
      allow.owner()
    ]),
  
  // Manual participants
  Participant: a
    .model({
      name: a.string().required(),
      eventId: a.id(),
      event: a.belongsTo('Event', 'eventId'),
    }).authorization((allow) => [allow.owner()]),

  
  ParticipantLandingEventDetailsResponse: a.customType({
    eventName: a.string().required(),
    organizerName: a.string().required()
  }),

  participantLandingPageEventDetails: a
    .query()
    .arguments({
      eventId: a.string().required()
    })
    .returns(a.ref('ParticipantLandingEventDetailsResponse'))
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(participantLandingPageEventDetailsHandler))
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
