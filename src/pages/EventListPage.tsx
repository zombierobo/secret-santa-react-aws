import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import type { EventType } from "../../amplify/data/exported-types";
import { client } from "../../amplify/data/exported-types";

function EventListPage() {
  const [events, setEvents] = useState<Array<EventType>>([]);
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
