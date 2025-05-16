import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { participantLandingPageDataFetcher } from "../functions/participant-landing-page-data-fetcher/resource";





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
      owner: a.string().authorization(allow => [
          allow.owner().to(["read", "delete"])
        ]),
    }).authorization((allow) => [
      allow.owner()
    ]),
  
  // Manual participants
  Participant: a
    .model({
      name: a.string().required(),
      eventId: a.id(),
      event: a.belongsTo('Event', 'eventId'),
      owner: a.string().authorization(allow => [
          allow.owner().to(["read", "delete"])
        ]),
    }).authorization((allow) => [allow.owner()]),

  
  ParticipantLandingEventDetailsResponse: a.customType({
    eventName: a.string().required(),
    organizerName: a.string().required()
  }),

  participantLandingPageDataFetcher: a
    .query()
    .arguments({
      eventId: a.string().required()
    })
    .returns(a.ref('ParticipantLandingEventDetailsResponse'))
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(participantLandingPageDataFetcher))
}). authorization(allow => [allow.resource(participantLandingPageDataFetcher).to(["query"])]);;

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
