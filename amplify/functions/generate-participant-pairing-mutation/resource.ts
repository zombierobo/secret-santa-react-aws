// custom lambda handlers

import { defineFunction } from "@aws-amplify/backend";

export const generateParticipantPairingMutation = defineFunction({
  entry: "./handler.ts",
  environment: {},
  name: "generate-participant-pairing-mutation",
});
