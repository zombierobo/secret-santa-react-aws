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
const client = generateClient<Schema>();

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<EventType>();
  const [participants, setParticipants] = useState<Array<ParticipantType>>([]);
  const [inviteAcceptedParticipants, setInviteAcceptedParticipants] = useState<
    Array<{ name: string; email: string }>
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

  return (
    <main>
      <GreetingMessage />
      <h1>Secret Santa Event name: {event?.name}</h1>
      <ParticipantsManagerTable
        participants={participants}
        inviteAcceptedParticipants={inviteAcceptedParticipants}
        addParticipant={createParticipant}
        eventId={eventId ?? ""}
      />
    </main>
  );
}

export default EventDetailsPage;
