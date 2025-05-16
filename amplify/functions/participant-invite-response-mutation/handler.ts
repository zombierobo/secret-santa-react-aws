import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/participant-landing-page-data-fetcher"; // the import is '$amplify/env/<function-name>'
import { getEvent } from "../../graphql/queries";
import { createParticipantInviteResponse } from "../../graphql/mutations";

Amplify.configure(
  {
    API: {
      GraphQL: {
        endpoint: env.AMPLIFY_DATA_GRAPHQL_ENDPOINT,
        region: env.AWS_REGION,
        defaultAuthMode: "iam",
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

const client = generateClient<Schema>({
  authMode: "iam",
});

export const handler: Schema["participantInviteResponseMutation"]["functionHandler"] =
  async (event, _context) => {
    const eventData = await client.graphql({
      query: getEvent,
      variables: {
        id: event.arguments.eventId,
      },
    });
    if (eventData.errors) {
      console.error("error while fetching event", eventData.errors);
      throw new Error("error while fetching event");
    }
    const eventObject = eventData.data.getEvent;
    if (!eventObject) {
      throw new Error("event could not be loaded");
    }

    try {
      const { errors } = await client.graphql({
        query: createParticipantInviteResponse,
        variables: {
          input: {
            eventId: eventObject.id,
            name: event.arguments.name,
            email: event.arguments.email,
          },
        },
      });

      if (errors) {
        console.error("Accepting Invite failed." + JSON.stringify(errors));
        throw new Error("Accepting Invite failed.");
      }
    } catch (err) {
      console.error("Accepting Invite failed." + JSON.stringify(err));
      throw new Error("Accepting Invite failed.");
    }
    return {
      success: true,
    };
  };
