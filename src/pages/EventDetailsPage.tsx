import { useEffect, useState } from "react";
import type {
  ParticipantType,
  EventType,
} from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";
import ParticipantsManagerTable from "./ParticipantsManagerTable";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../../amplify/data/resource";
import GreetingMessage from "./components/GreetingMessage";
import EventPairingGenerations from "./components/EventPairingGenerations";
const client = generateClient<Schema>();

function EventDetailsPageContent({ eventId }: { eventId: string }) {
  const [event, setEvent] = useState<EventType>();
  const [participants, setParticipants] = useState<Array<ParticipantType>>([]);
  const [inviteAcceptedParticipants, setInviteAcceptedParticipants] = useState<
    Array<{ name: string; email: string; id: string }>
  >([]);

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
      <GreetingMessage />
      <h1>Secret Santa Event name: {event?.name}</h1>

      {totalParticipantCount > 2 && (
        <div>
          <button onClick={generatePairings}>Generate pairings</button>

          <EventPairingGenerations eventId={eventId} />
        </div>
      )}
      <ParticipantsManagerTable
        participants={participants}
        inviteAcceptedParticipants={inviteAcceptedParticipants}
        addParticipant={createParticipant}
        eventId={eventId ?? ""}
      />
    </>
  );
}

function EventDetailsPage() {
  const { eventId } = useParams();
  return eventId && <EventDetailsPageContent eventId={eventId} />;
}

export default EventDetailsPage;
