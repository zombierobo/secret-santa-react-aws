// custom lambda handlers

import { defineFunction } from "@aws-amplify/backend";

export const participantInvitesAcceptedDataFetcher = defineFunction({
  entry: "./handler.ts",
  environment: {},
  name: "participant-invites-accepted-data-fetcher",
});
