import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import type { Schema } from "./resource";
import { client, EventType } from "./exported-types";

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, _context) => {
    const res = await client.models.Event.get(
      { id: event.arguments.eventId },
      { authMode: "identityPool" }
    );
    const eventData: EventType | null = res.data;

    if (eventData) {
      return {
        organizerName: "Hardcode o",
        eventName: eventData?.name,
      };
    }
    throw new Error("Event not found");
  };
