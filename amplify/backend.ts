import { defineBackend } from "@aws-amplify/backend";
import { auth } from "./auth/resource";
import { data } from "./data/resource";
import { participantLandingPageDataFetcher } from "./functions/participant-landing-page-data-fetcher/resource";

defineBackend({
  auth,
  data,
  participantLandingPageDataFetcher,
});
