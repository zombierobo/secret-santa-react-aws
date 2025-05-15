import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import type { Schema } from "../resource";

export const handler: Schema["participantLandingPageEventDetails"]["functionHandler"] =
  async (event, context) => {
    return {
      organizerName: "Hardcode o",
      eventName: "Hardcode e",
    };
  };
