import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/generate-participant-pairing-mutation"; // the import is '$amplify/env/<function-name>'
import {
  getEvent,
  listParticipants,
  listParticipantInviteResponses,
} from "../../graphql/queries";
import { generateSecretSantaWithExclusions } from "./pairing-algo";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "identityPool",
      },
    },
  },
  {
    Auth: {
      credentialsProvider: {
        getCredentialsAndIdentityId: async () => ({
          credentials: {
            accessKeyId: env.AWS_ACCESS_KEY_ID,
            secretAccessKey: env.AWS_SECRET_ACCESS_KEY,
            sessionToken: env.AWS_SESSION_TOKEN,
          },
        }),
        clearCredentialsAndIdentityId: () => {
          /* noop */
        },
      },
    },
  }
);

const client = generateClient<Schema>();

export const handler: Schema["generateParticipantPairingMutation"]["functionHandler"] =
  async (event, _context) => {
    const eventId = event.arguments.eventId;
    const eventData = await client.graphql({
      query: getEvent,
      variables: {
        id: eventId,
      },
      authMode: "identityPool",
    });

    if (eventData.errors) {
      console.error("error while fetching event", eventData.errors);
      throw new Error("error while fetching event");
    }
    const eventObject = eventData.data.getEvent;
    if (!eventObject) {
      throw new Error("event could not be loaded");
    }

    const manualParticipants = await client.graphql({
      query: listParticipants,
      variables: {
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      },
      authMode: "identityPool",
    });

    const inviteAcceptedResponses = await client.graphql({
      query: listParticipantInviteResponses,
      variables: {
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      },
      authMode: "iam",
    });

    type ParticipantData = {
      id: string;
      type: string;
      name: string;
      email: string;
    };

    const allParticipants: {
      [participantId: string]: ParticipantData;
    } = manualParticipants.data.listParticipants.items
      .map((i) => ({
        id: i.id,
        type: "manual",
        name: i.name,
        email: "",
      }))
      .concat(
        inviteAcceptedResponses.data.listParticipantInviteResponses.items.map(
          (i) => ({
            id: i.id,
            type: "invite",
            name: i.name,
            email: "",
          })
        )
      )
      .reduce((acc: { [participantId: string]: ParticipantData }, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

    const pairingMap = generateSecretSantaWithExclusions(
      Object.keys(allParticipants)
    );
    return Object.entries(pairingMap).map(([gifterId, receiverId]) => {
      return {
        gifter: allParticipants[gifterId],
        receiver: allParticipants[receiverId],
      };
    });
  };
