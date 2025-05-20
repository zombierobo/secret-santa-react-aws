// Import commands.js using ES2015 syntax:
// import someThing from "./commands";

// Alternatively you can use CommonJS syntax:
// require("./commands");

import { SSMClient, GetParameterCommand } from "@aws-sdk/client-ssm";
import { Amplify } from "aws-amplify";
import { signIn } from "aws-amplify/auth";
import outputs from "../../amplify_outputs.json";

Amplify.configure(outputs);

Cypress.Commands.add("authenticate", async () => {
  const ssmClient = new SSMClient({
    credentials: Cypress.env("awscredentials"),
    region: outputs.data.aws_region,
  });

  const testUserEmailCommand = new GetParameterCommand({
    Name: "/amplify/secret-santa-react-aws/e2eTestUserEmail",
    WithDecryption: true,
  });
  const testUserPasswordCommand = new GetParameterCommand({
    Name: "/amplify/secret-santa-react-aws/e2eTestUserPassword",
    WithDecryption: true,
  });
  const [testUserEmailParam, testUserPasswordParam] = await Promise.all([
    ssmClient.send(testUserEmailCommand),
    ssmClient.send(testUserPasswordCommand),
  ]);

  const { isSignedIn } = await signIn({
    username: testUserEmailParam.Parameter?.Value ?? "",
    password: testUserPasswordParam.Parameter?.Value ?? "",
  });

  if (!isSignedIn) {
    throw new Error("Test user not signed in ");
  }
});

// Hide fetch/XHR requests from command log
const app = window.top;
if (app) {
  app.document.addEventListener("DOMContentLoaded", () => {
    const style = app.document.createElement("style");
    style.innerHTML =
      ".command-name-request, .command-name-xhr { display: none }";
    app.document.head.appendChild(style);
  });
}

// declare global {
//   namespace Cypress {
//     interface Chainable {
//       // Add custom commands here if needed
//     }
//   }
// }
