import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { participantLandingPageDataFetcher } from "../functions/participant-landing-page-data-fetcher/resource";
import { participantInviteResponseMutation } from "../functions/participant-invite-response-mutation/resource";
import { postConfirmation } from "../auth/post-confirmation/resource";

const schema = a
  .schema({
    Todo: a
      .model({
        content: a.string(),
      })
      .authorization((allow) => [allow.owner()]),
    UserProfile: a
      .model({
        email: a.string(),
        profileOwner: a.string(),
      })
      .authorization((allow) => [allow.ownerDefinedIn("profileOwner")]),
    Event: a
      .model({
        name: a
          .string()
          .required()
          .authorization((allow) => [
            allow.guest().to(["read"]),
            allow.owner(),
          ]),
        participants: a.hasMany("Participant", "eventId"),
        owner: a
          .string()
          .authorization((allow) => [allow.owner().to(["read", "delete"])]),
      })
      .authorization((allow) => [allow.owner()]),

    // Manual participants
    Participant: a
      .model({
        name: a.string().required(),
        eventId: a.id(),
        event: a.belongsTo("Event", "eventId"),
        owner: a
          .string()
          .authorization((allow) => [allow.owner().to(["read", "delete"])]),
      })
      .authorization((allow) => [allow.owner()]),

    ParticipantInviteResponse: a
      .model({
        name: a.string().required(),
        email: a.string().required(),
        eventId: a.id().required(),
      })
      .authorization((allow) => [allow.owner()]),

    ParticipantLandingEventDetailsResponse: a.customType({
      eventName: a.string().required(),
      organizerName: a.string().required(),
    }),

    participantLandingPageDataFetcher: a
      .query()
      .arguments({
        eventId: a.string().required(),
      })
      .returns(a.ref("ParticipantLandingEventDetailsResponse"))
      .authorization((allow) => [allow.guest()])
      .handler(a.handler.function(participantLandingPageDataFetcher)),

    ParticipantInviteResponseMutationResponse: a.customType({
      success: a.boolean().required(),
    }),

    participantInviteResponseMutation: a
      .mutation()
      .arguments({
        eventId: a.string().required(),
        email: a.string().required(),
        name: a.string().required(),
      })
      .returns(a.ref("ParticipantInviteResponseMutationResponse"))
      .authorization((allow) => [allow.guest()])
      .handler(a.handler.function(participantInviteResponseMutation)),
  })
  .authorization((allow) => [
    allow.resource(participantLandingPageDataFetcher),
    allow.resource(participantInviteResponseMutation),
    allow.resource(postConfirmation),
  ]);

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: "userPool",
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
