import { type ClientSchema, a, defineData, defineFunction } from "@aws-amplify/backend";


// handlers

const participantLandingPageEventDetailsHandler = defineFunction({
  entry: './participantLandingPageEventDetails-handler/handler.ts'
})

/*== STEP 1 ===============================================================
The section below creates a Todo database table with a "content" field. Try
adding a new "isDone" field as a boolean. The authorization rule below
specifies that any user authenticated via an API key can "create", "read",
"update", and "delete" any "Todo" records.
=========================================================================*/
const schema = a.schema({
  Todo: a
    .model({
      content: a.string(),
    })
    .authorization((allow) => [allow.owner()]),
  Event: a
    .model({
      name: a.string().required()
        .authorization(allow => [
          allow.guest().to(["read"]),
          allow.owner()
        ]),
      // description: a.string(),
      // drawDate: a.date(),
      // giftDate: a.date(),
      // giftBudget: a.string(),
      // 3. Create a hasMany relationship with the reference field
      //    from the `Member`s model.
      participants: a.hasMany('Participant', 'eventId'),
    }).authorization((allow) => [
      allow.owner()
    ]),
  
  // Manual participants
  Participant: a
    .model({
      name: a.string().required(),
      // email: a.string(),
      // giftPreferences: a.string().array(),
      // matchedParticipantId: a.string(),
      // 1. Create a reference field
      eventId: a.id(),
      // 2. Create a belongsTo relationship with the reference field
      event: a.belongsTo('Event', 'eventId'),
    }).authorization((allow) => [allow.owner()]),

  
  ParticipantLandingEventDetailsResponse: a.customType({
    eventName: a.string(),
    organizerName: a.string()
  }),

  // 2. Define your query with the return type and, optionally, arguments
  participantLandingPageEventDetails: a
    .query()
    // arguments that this query accepts
    .arguments({
      eventId: a.string()
    })
    // return type of the query
    .returns(a.ref('ParticipantLandingEventDetailsResponse'))
    // only allow signed-in users to call this API
    .authorization(allow => [allow.guest()])
    .handler(a.handler.function(participantLandingPageEventDetailsHandler))
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'userPool',
    // API Key is used for a.allow.public() rules
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});

/*== STEP 2 ===============================================================
Go to your frontend source code. From your client-side code, generate a
Data client to make CRUDL requests to your table. (THIS SNIPPET WILL ONLY
WORK IN THE FRONTEND CODE FILE.)

Using JavaScript or Next.js React Server Components, Middleware, Server 
Actions or Pages Router? Review how to generate Data clients for those use
cases: https://docs.amplify.aws/gen2/build-a-backend/data/connect-to-API/
=========================================================================*/

/*
"use client"
import { generateClient } from "aws-amplify/data";
import type { Schema } from "@/amplify/data/resource";

const client = generateClient<Schema>() // use this Data client for CRUDL requests
*/

/*== STEP 3 ===============================================================
Fetch records from the database and use them in your frontend component.
(THIS SNIPPET WILL ONLY WORK IN THE FRONTEND CODE FILE.)
=========================================================================*/

/* For example, in a React component, you can use this snippet in your
  function's RETURN statement */
// const { data: todos } = await client.models.Todo.list()

// return <ul>{todos.map(todo => <li key={todo.id}>{todo.content}</li>)}</ul>
