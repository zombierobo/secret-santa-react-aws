import { useEffect, useState } from "react";
import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";
import { Link } from "react-router-dom";

const client = generateClient<Schema>();

function EventListPage() {
  const [events, setEvents] = useState<Array<Schema["Event"]["type"]>>([]);
  useEffect(() => {
    client.models.Event.observeQuery().subscribe({
      next: (data) => setEvents([...data.items]),
    });
  }, []);
  function createEvent() {
    const eventName = window.prompt("Event Name");
    eventName && client.models.Event.create({ name: eventName });
  }
  return (
    <main>
      <h1>Your secret santa events</h1>
      <button onClick={createEvent}>+ new</button>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={"/events/" + event.id}>{event.name}</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default EventListPage;
