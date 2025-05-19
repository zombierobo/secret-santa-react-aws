import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/generate-participant-pairing-mutation"; // the import is '$amplify/env/<function-name>'

import { generateSecretSantaWithExclusions } from "./pairing-algo";
import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { fetchEvent, nullThrows } from "../common-functions";
import { selectionSetForGenerationOfPairsForSubscription } from "../../data/exported-types";

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Schema["generateParticipantPairingMutation"]["functionHandler"] =
  async (event, _context) => {
    const eventId = event.arguments.eventId;
    const eventObject = await fetchEvent(client, event.arguments.eventId);
    const eventOwner = nullThrows(eventObject.owner);

    const res = await client.models.ParticipantPairingGeneration.create(
      {
        eventId,
        owner: eventOwner,
        complete: false,
      },
      {
        selectionSet: selectionSetForGenerationOfPairsForSubscription,
      }
    );
    const participantPairingGenerationId = nullThrows(res.data).id;

    const [manualParticipants, inviteAcceptedResponses] = await Promise.all([
      client.models.Participant.list({
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      }),

      client.models.ParticipantInviteResponse.list({
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      }),
    ]);

    type ParticipantData = {
      id: string;
      type: string;
      name: string;
      email: string;
    };

    const allParticipants: {
      [participantId: string]: ParticipantData;
    } = manualParticipants.data
      .map((i) => ({
        id: i.id,
        type: "manual",
        name: i.name,
        email: "",
      }))
      .concat(
        inviteAcceptedResponses.data.map((i) => ({
          id: i.id,
          type: "invite",
          name: i.name,
          email: i.email,
        }))
      )
      .reduce((acc: { [participantId: string]: ParticipantData }, cur) => {
        acc[cur.id] = cur;
        return acc;
      }, {});

    const totalParticipants = Object.keys(allParticipants).length;

    const pairingMap = generateSecretSantaWithExclusions(
      Object.keys(allParticipants)
    );

    try {
      const res2 = await Promise.all(
        Object.entries(pairingMap).map(([gifterId, receiverId]) => {
          return client.models.ParticipantPairingGenerationPair.create({
            participantPairingGenerationId,
            gifterName: allParticipants[gifterId].name,
            gifterEmail: allParticipants[gifterId].email,
            receiverName: allParticipants[receiverId].name,
            receiverEmail: allParticipants[receiverId].email,
            owner: eventOwner,
          });
        })
      );
      const allWritesSuccessful = res2.every(
        (c) => (c.data?.id.length ?? 0) > 0 && (c.errors?.length ?? 0) === 0
      );
      const totalWritesEqualsExpected = res2.length === totalParticipants;
      if (allWritesSuccessful && totalWritesEqualsExpected) {
        await client.models.ParticipantPairingGeneration.update(
          {
            id: participantPairingGenerationId,
            totalParticipants,
            complete: true,
          }
          // {
          //   selectionSet: selectionSetForGenerationOfPairsForSubscription,
          // }
        );
      } else {
        await client.models.ParticipantPairingGeneration.update({
          id: participantPairingGenerationId,
          totalParticipants,
          complete: false,
          failed: true,
          failureReason: `allWritesSuccessful ${allWritesSuccessful} , totalWritesEqualsExpected = ${totalWritesEqualsExpected}`,
          jobDebugDetails: `totalParticipants fetched = ${totalParticipants}`,
        });
        throw new Error(
          "Not all objects are written successfully during generation"
        );
      }
    } catch (err) {
      throw new Error("Failed to write pairings to DB." + JSON.stringify(err));
    }
  };
