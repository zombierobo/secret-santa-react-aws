import { useEffect, useState } from "react";
import type {
  ParticipantType,
  EventType,
} from "../../amplify/data/exported-types";
import { client } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";

function ParticipantJoinEventLandingPage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState<EventType>();
  useEffect(() => {
    (async function () {
      if (eventId) {
        const res = await client.models.Event.get({ id: eventId });
        const eventData: EventType | null = res.data;
        if (eventData) {
          setEvent(eventData);
        }
      } else {
        console.error("Event id is missing");
        window.alert("Event id is missing");
      }
    })();
  }, []);
  return (
    <div>
      <h1>Welcome to participant page</h1>
    </div>
  );
}

export default ParticipantJoinEventLandingPage;
