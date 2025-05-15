import type { Schema } from "../resource";
import { generateClient } from "aws-amplify/data";

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, _context) => {
    let eventName = "";
    try {
      const client = generateClient<Schema>();
      const eventData = await client.models.Event.get(
        { id: event.arguments.eventId },
        { authMode: "identityPool" }
      );
      eventName = eventData.data?.name ?? "",;
    } catch (err) {
      eventName = "error occurred";
      console.error("failed to fetch event details", err);
    }

    return {
      organizerName: "",
      eventName: eventName
    };
  };
