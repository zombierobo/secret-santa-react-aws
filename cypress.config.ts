import { defineConfig } from "cypress";
import { fromNodeProviderChain } from "@aws-sdk/credential-providers";
import preprocessor from "@cypress/webpack-preprocessor";

async function resolveAWSCreds(config) {
  config.env.awscredentials = await fromNodeProviderChain()();
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "http://localhost:5173", // Vite's default dev server port
    supportFile: "cypress/support/e2e.ts",
    specPattern: "cypress/e2e/**/*.cy.{js,jsx,ts,tsx}",
    video: false,
    screenshotOnRunFailure: true,
    setupNodeEvents(on, config) {
      on("file:preprocessor", preprocessor({}));
      config.baseUrl = "http://localhost:5173";
      return resolveAWSCreds(config);
    },
  },
  component: {
    devServer: {
      framework: "react",
      bundler: "vite",
    },
  },
});
