import { useEffect, useState } from "react";
import type {
  ParticipantType,
  EventType,
} from "../../amplify/data/exported-types";
import { client } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";
import ParticipantsManagerTable from "./ParticipantsManagerTable";

function EventDetailsPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<EventType>();
  const [participants, setParticipants] = useState<Array<ParticipantType>>([]);
  useEffect(() => {
    (async function () {
      if (eventId) {
        const res = await client.models.Event.get({ id: eventId });
        console.log("response", res);
        const eventData: EventType | null = res.data;
        if (eventData) {
          setEvent(eventData);
          const participantsData = await eventData.participants();
          setParticipants(participantsData.data ?? []);
        }
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
      <h1>Secret Santa Event name: {event?.name}</h1>
      <ParticipantsManagerTable
        participants={participants}
        addParticipant={createParticipant}
        eventId={eventId ?? ""}
      />
    </main>
  );
}

export default EventDetailsPage;
