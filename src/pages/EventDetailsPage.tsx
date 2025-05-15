import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { useParams } from "react-router-dom";

const client = generateClient<Schema>();

function EventDetailsPage() {
  let { id: eventId } = useParams();
  const [event, setEvent] = useState<Schema["Event"]["type"]>();
  useEffect(() => {
    (async function () {
      if (eventId) {
        const res = await client.models.Event.get({ id: eventId });
        console.log("response", res);
        const eventData = res.data;
        if (eventData) {
          setEvent(eventData);
        }
      }
    })();
  }, []);

  return (
    <main>
      <h1>Secret Santa Event name: {event?.name}</h1>
    </main>
  );
}

export default EventDetailsPage;
