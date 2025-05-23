import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import type { EventType } from "../../../amplify/data/exported-types";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../../../amplify/data/resource";

import EventListItem from "./EventListItem";

const client = generateClient<Schema>();

function EventList() {
  const [events, setEvents] = useState<Array<EventType>>([]);
  useEffect(() => {
    client.models.Event.observeQuery().subscribe({
      next: (data) =>
        setEvents(
          [...data.items].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        ),
    });
  }, []);
  function createEvent() {
    const eventName = window.prompt("Event Name");
    eventName && client.models.Event.create({ name: eventName });
  }
  return (
    <>
      <p className="event-list-page-heading">Your secret santa events</p>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <Link to={"/events/" + event.id}>
              <EventListItem
                eventId={event.id}
                eventName={event.name}
                eventCreatedAt={event.createdAt}
              />
            </Link>
          </li>
        ))}
      </ul>
      <button className="event-list-new-event-btn" onClick={createEvent}>
        + new event
      </button>
    </>
  );
}

export default EventList;
