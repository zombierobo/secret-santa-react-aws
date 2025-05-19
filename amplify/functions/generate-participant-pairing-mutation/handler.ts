import { type Schema } from "../../data/resource";
import { Amplify } from "aws-amplify";
import { generateClient } from "aws-amplify/data";
import { env } from "$amplify/env/generate-participant-pairing-mutation"; // the import is '$amplify/env/<function-name>'
import {
  getEvent,
  listParticipants,
  listParticipantInviteResponses,
} from "../../graphql/queries";
import { generateSecretSantaWithExclusions } from "./pairing-algo";
import { getAmplifyDataClientConfig } from "@aws-amplify/backend/function/runtime";
import { nullThrows } from "../common-functions";

const { resourceConfig, libraryOptions } =
  await getAmplifyDataClientConfig(env);

Amplify.configure(resourceConfig, libraryOptions);

const client = generateClient<Schema>();

export const handler: Schema["generateParticipantPairingMutation"]["functionHandler"] =
  async (event, _context) => {
    const eventId = event.arguments.eventId;
    let eventOwner;
    try {
      const eventData = await client.graphql({
        query: getEvent,
        variables: {
          id: eventId,
        },
      });
      if (eventData.errors) {
        console.error("error while fetching event", eventData.errors);
        throw new Error("error while fetching event");
      }
      const eventObject = eventData.data.getEvent;
      eventOwner = eventObject?.owner;
      if (!eventObject || !eventOwner) {
        throw new Error("event could not be loaded");
      }
    } catch (err) {
      throw new Error("failed to fetch event" + JSON.stringify(err));
    }

    const res = await client.models.ParticipantPairingGeneration.create({
      eventId,
      owner: eventOwner,
      complete: false,
    });
    const participantPairingGenerationId = nullThrows(res.data).id;

    const manualParticipants = await client.graphql({
      query: listParticipants,
      variables: {
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      },
    });

    const inviteAcceptedResponses = await client.graphql({
      query: listParticipantInviteResponses,
      variables: {
        filter: {
          eventId: {
            eq: eventId,
          },
        },
      },
      authMode: "iam",
    });

    type ParticipantData = {
      id: string;
      type: string;
      name: string;
      email: string;
    };

    const allParticipants: {
      [participantId: string]: ParticipantData;
    } = manualParticipants.data.listParticipants.items
      .map((i) => ({
        id: i.id,
        type: "manual",
        name: i.name,
        email: "",
      }))
      .concat(
        inviteAcceptedResponses.data.listParticipantInviteResponses.items.map(
          (i) => ({
            id: i.id,
            type: "invite",
            name: i.name,
            email: "",
          })
        )
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
      if (res2.every((c) => (c.data?.id.length ?? 0) > 0)) {
        await client.models.ParticipantPairingGeneration.update({
          id: participantPairingGenerationId,
          totalParticipants,
          complete: true,
        });
        return {
          success: true,
        };
      } else {
        return {
          success: false,
        };
      }
    } catch (err) {
      throw new Error("Failed to write pairings to DB." + JSON.stringify(err));
    }
  };
