import type { Schema } from "../resource";
import { Amplify } from "aws-amplify";
import outputs from "../../../amplify_outputs.json";
import { generateClient } from "aws-amplify/data";
Amplify.configure(outputs);

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, _context) => {
    let eventName = "";
    try {
      const client = generateClient<Schema>();
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
