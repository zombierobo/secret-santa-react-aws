import type { Schema } from "../resource";

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, _context) => {
    return {
      organizerName: "Hardcode o",
      eventName: "Hardcoded event name",
    };
  };
