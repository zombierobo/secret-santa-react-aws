import { cognitoUserPoolsTokenProvider } from "aws-amplify/auth/cognito";
import type { Schema } from "./resource";
import { client } from "./exported-types";

export const handler: Schema["participantEventInviteAcceptResponseMutation"]["functionHandler"] =
  async (event, _context) => {
    try {
      await client.models.EventInvitationAcceptedResponse.create(
        event.arguments,
        { authMode: "identityPool" }
      );
    } catch (e) {
      return {
        success: false,
      };
    }
    return { success: true };
  };
