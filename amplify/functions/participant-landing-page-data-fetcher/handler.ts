import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { env } from "$amplify/env/participant-landing-page-data-fetcher"; // the import is '$amplify/env/<function-name>'

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Schema["participantLandingPageDataFetcher"]["functionHandler"] =
  async (event, _context) => {
    let eventName = "";
    try {
      const eventData = await client.models.Event.get(
        { id: event.arguments.eventId },
        { authMode: "identityPool" }
      );
      eventName = eventData.data?.name ?? "";
    } catch (err) {
      eventName = "error occurred";
      console.error("failed to fetch event details", err);
    }

    return {
      organizerName: "",
      eventName: eventName,
    };
  };
