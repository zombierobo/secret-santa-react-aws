import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/participant-landing-page-data-fetcher"; // the import is '$amplify/env/<function-name>'
import {
  getEvent,
  listParticipantInviteResponses,
} from "../../graphql/queries";

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

export const handler: Schema["participantInvitesAcceptedDataFetcher"]["functionHandler"] =
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

    return inviteAcceptedResponses.data.listParticipantInviteResponses.items;
  };
