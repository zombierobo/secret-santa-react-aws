// custom lambda handlers

import { defineFunction } from "@aws-amplify/backend";

export const participantLandingPageDataFetcher = defineFunction({
  entry: "./handler.ts",
  environment: {},
  name: "participant-landing-page-data-fetcher",
});
