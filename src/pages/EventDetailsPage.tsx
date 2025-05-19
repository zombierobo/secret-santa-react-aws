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
    (async function () {
      if (eventId) {
        const res = await client.models.Event.get({ id: eventId });
        const eventData: EventType | null = res.data;
        if (eventData) {
          setEvent(eventData);
          await Promise.all([
            eventData.participants().then((r) => setParticipants(r.data)),
            client.queries
              .participantInvitesAcceptedDataFetcher({
                eventId,
              })
              .then((r) => {
                setInviteAcceptedParticipants(r.data ?? []);
              }),
          ]);
        }
      } else {
        console.error("Event id is missing");
      }
    })();
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
      const { data, errors } =
        await client.mutations.generateParticipantPairingMutation({
          eventId,
        });
      if (data) {
        window.alert(
          "Success! Generate pairings successful" + JSON.stringify(data)
        );
      }
      if (errors) {
        window.alert("Error! Could not generate pairings");
        console.error("Error! Could not generate pairings", errors);
      }
    })();
  };

  const totalParticipantCount =
    participants.length + inviteAcceptedParticipants.length;

  return (
    <main>
      <GreetingMessage />
      <h1>Secret Santa Event name: {event?.name}</h1>

      {totalParticipantCount > 2 && (
        <>
          <button onClick={generatePairings}>Generate pairings</button>

          <EventPairingGenerations eventId={eventId} />
        </>
      )}
      <ParticipantsManagerTable
        participants={participants}
        inviteAcceptedParticipants={inviteAcceptedParticipants}
        addParticipant={createParticipant}
        eventId={eventId ?? ""}
      />
    </main>
  );
}

function EventDetailsPage() {
  const { eventId } = useParams();
  return eventId && <EventDetailsPageContent eventId={eventId} />;
}

export default EventDetailsPage;
