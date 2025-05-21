## Secret Santa Web app

This app is based on [AWS Amplify gen 2](https://docs.amplify.aws/react/start/quickstart/).

This app has use cases for Secret santa organizer and participants invited through invite links.

Following items integrated

1. Data schema with access permissions
2. Integration with Amplify auth (cognito behind the scenes)
3. Frontend for Organizer and Participant
4. Functions (Lambda) for data fetching and mutations
5. E2E test with cypress. [Documentation](https://aws.amazon.com/blogs/mobile/running-end-to-end-cypress-tests-for-your-fullstack-ci-cd-deployment-with-amplify-console/)

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.

## Run the app locally

Step 1: setup credentials in your laptop
`aws sso login`

Step 2: Start backend sandbox (this will setup sandbox with it's own private data)
`npx ampx sandbox`

Step 3: Start the frontend
`npm run dev`

You should be able to see the react app hosted locally at http://localhost:5173. Navigate to events page, sign up with email, password and verification code. Sign in after signup to start using secret santa organizer functionality. Participants dont need to signup/signin so they have unauthenticated view of joining an event.

If you change backend schema or add integration to lamda. Generate graphql code using.
`npx ampx generate graphql-client-code --out amplify/graphql`

To run e2e cypress test. You can either run test in headless mode using `npm run test:e2e`. To run in interactive mode try `npm run cypress:open`

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/react/start/quickstart/#deploy-a-fullstack-app-to-aws) of our documentation.

For e2e tests, we use an existing user in sandbox. We store the test user in Param store. Use the following AWS commands to store them to your aws

```
aws ssm put-parameter --name /amplify/secret-santa-react-aws/e2eTestUserEmail --value {email} --type SecureString
aws ssm put-parameter --name /amplify/secret-santa-react-aws/e2eTestUserPassword --value {password} --type SecureString
```

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
