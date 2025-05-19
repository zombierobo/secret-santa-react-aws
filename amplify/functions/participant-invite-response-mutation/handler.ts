import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/participant-invite-response-mutation"; // the import is '$amplify/env/<function-name>'
import { getEvent } from "../../graphql/queries";
import { createParticipantInviteResponse } from "../../graphql/mutations";

import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { fetchEvent, nullThrows } from "../common-functions";

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Schema["participantInviteResponseMutation"]["functionHandler"] =
  async (event, _context) => {
    const eventObject = await fetchEvent(
      client,
      event.arguments.eventId,
      "iam"
    );
    const { errors, data } =
      await client.models.ParticipantInviteResponse.create(
        {
          eventId: eventObject.id,
          name: event.arguments.name,
          email: event.arguments.email,
          owner: nullThrows(eventObject.owner),
        },
        {
          authMode: "iam",
        }
      );
    // try {
    if (errors) {
      console.error("v11 Accepting Invite failed." + JSON.stringify(errors));
      throw new Error("v1 Accepting Invite failed." + JSON.stringify(errors));
    }
    nullThrows(data?.id, "model id should not be null");

    // } catch (err) {
    //   console.error("v1 Accepting Invite failed." + JSON.stringify(err));
    //   throw new Error("v11 Accepting Invite failed." + JSON.stringify(err));
    // }
    return {
      success: true,
    };
  };
