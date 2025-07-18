import { useEffect, useState } from "react";
import type { ParticipantType } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";
import ParticipantsManagerTable from "./ParticipantsManagerTable";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../../amplify/data/resource";
import GreetingMessage from "./components/GreetingMessage";
import EventPairingGenerations from "./components/EventPairingGenerations";
import { useAuthenticator } from "@aws-amplify/ui-react";
import { Breadcrumbs } from "@aws-amplify/ui-react";
const client = generateClient<Schema>();

function EventDetailsPageContent({ eventId }: { eventId: string }) {
  const [eventName, setEventName] = useState<string>();
  const [participants, setParticipants] = useState<Array<ParticipantType>>([]);
  const [inviteAcceptedParticipants, setInviteAcceptedParticipants] = useState<
    Array<{ name: string; email: string; id: string }>
  >([]);
  const { signOut } = useAuthenticator();

  useEffect(() => {
    (async function () {
      const { data } = await client.models.Event.get({
        id: eventId,
      });
      setEventName(data?.name);
    })();
  }, []);
  useEffect(() => {
    const observer = client.models.Participant.observeQuery({
      filter: {
        eventId: {
          eq: eventId,
        },
      },
    }).subscribe({
      next: (data) => setParticipants([...data.items]),
    });
    return () => observer.unsubscribe();
  }, []);
  useEffect(() => {
    const observer = client.models.ParticipantInviteResponse.observeQuery({
      filter: {
        eventId: {
          eq: eventId,
        },
      },
    }).subscribe({
      next: (data) => setInviteAcceptedParticipants([...data.items]),
    });
    return () => observer.unsubscribe();
  }, []);

  function createParticipant(participantName: string) {
    (async function () {
      const { data: participant } = await client.models.Participant.create({
        name: participantName,
        eventId,
      });
      participant && setParticipants((prev) => prev.concat(participant));
    })();
  }
  const generatePairings = () => {
    (async function () {
      const { data } =
        await client.mutations.generateParticipantPairingMutation({
          eventId,
        });
      if (data?.success !== true) {
        window.alert("Something went wrong while generating pairs.");
      }
    })();
  };

  const totalParticipantCount =
    participants.length + inviteAcceptedParticipants.length;

  return (
    <>
      <GreetingMessage onSignOut={signOut} />

      <Breadcrumbs
        items={[
          {
            href: "/",
            label: "Home",
          },

          {
            label: eventName,
          },
        ]}
      />
      {eventName && (
        <p>
          Secret Santa Event name: <b>{eventName}</b>
        </p>
      )}

      <ParticipantsManagerTable
        participants={participants}
        inviteAcceptedParticipants={inviteAcceptedParticipants}
        addParticipant={createParticipant}
        eventId={eventId ?? ""}
      />

      {totalParticipantCount > 2 && (
        <div>
          <h3>Generated pairs</h3>
          <button onClick={generatePairings}>+ Generate pairings</button>

          <EventPairingGenerations eventId={eventId} />
        </div>
      )}
    </>
  );
}

function EventDetailsPage() {
  const { eventId } = useParams();
  return eventId && <EventDetailsPageContent eventId={eventId} />;
}

export default EventDetailsPage;
