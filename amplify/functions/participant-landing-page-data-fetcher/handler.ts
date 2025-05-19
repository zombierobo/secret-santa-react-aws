import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/participant-landing-page-data-fetcher"; // the import is '$amplify/env/<function-name>'
import { getEvent } from "../../graphql/queries";

import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { fetchEvent } from "../common-functions";

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Schema["participantLandingPageDataFetcher"]["functionHandler"] =
  async (event, _context) => {
    const eventData = await fetchEvent(client, event.arguments.eventId, "iam");

    return {
      organizerName: "",
      eventName: eventData.name,
    };
  };
