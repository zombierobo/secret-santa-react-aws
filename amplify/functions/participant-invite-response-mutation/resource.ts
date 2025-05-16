// custom lambda handlers

import { defineFunction } from "@aws-amplify/backend";

export const participantInviteResponseMutation = defineFunction({
  entry: "./handler.ts",
  environment: {},
  name: "participant-invite-response-mutation",
});
