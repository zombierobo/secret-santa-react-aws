import type { Schema } from "../resource";
import { generateClient } from "aws-amplify/data";

const client = generateClient<Schema>();

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, _context) => {
    const eventData = await client.models.Event.get(
      { id: event.arguments.eventId },
      { authMode: "identityPool" }
    );

    return {
      organizerName: "",
      eventName: eventData.data?.name ?? "",
    };
  };
