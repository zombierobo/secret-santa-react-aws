import { type ClientSchema, a, defineData } from "@aws-amplify/backend";
import { participantLandingPageDataFetcher } from "../functions/participant-landing-page-data-fetcher/resource";
import { participantInviteResponseMutation } from "../functions/participant-invite-response-mutation/resource";
import { postConfirmation } from "../auth/post-confirmation/resource";
import { generateParticipantPairingMutation } from "../functions/generate-participant-pairing-mutation/resource";

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
        participantInviteResponses: a.hasMany(
          "ParticipantInviteResponse",
          "eventId"
        ),
        participantPairingGenerations: a.hasMany(
          "ParticipantPairingGeneration",
          "eventId"
        ),
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
        eventId: a.id(),
        event: a.belongsTo("Event", "eventId"),
        owner: a.id().required(),
      })
      .authorization((allow) => [allow.owner()]),

    ParticipantPairingGeneration: a
      .model({
        totalParticipants: a.integer(),
        eventId: a.id(),
        event: a.belongsTo("Event", "eventId"),
        participantPairingGenerationPairs: a.hasMany(
          "ParticipantPairingGenerationPair",
          "participantPairingGenerationId"
        ),
        owner: a.id().required(),
        complete: a.boolean().required(),
        failed: a.boolean(),
        failureReason: a.string(),
        jobDebugDetails: a.string(),
      })
      .authorization((allow) => [allow.owner()]),

    ParticipantPairingGenerationPair: a
      .model({
        participantPairingGenerationId: a.id(),
        participantPairingGeneration: a.belongsTo(
          "ParticipantPairingGeneration",
          "participantPairingGenerationId"
        ),
        gifterName: a.string().required(),
        gifterEmail: a.string(),
        receiverName: a.string().required(),
        receiverEmail: a.string(),
        owner: a.id().required(),
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

    generateParticipantPairingMutation: a
      .mutation()
      .arguments({
        eventId: a.string().required(),
      })
      .authorization((allow) => [
        allow.authenticated(), // TODO: make sure organizer cannot fetch another organizer's participants
      ])
      .handler(a.handler.function(generateParticipantPairingMutation).async()),
  })
  .authorization((allow) => [
    allow.resource(participantLandingPageDataFetcher),
    allow.resource(participantInviteResponseMutation),
    allow.resource(generateParticipantPairingMutation),
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
