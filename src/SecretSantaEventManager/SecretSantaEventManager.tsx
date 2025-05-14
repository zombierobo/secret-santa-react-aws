// import { useEffect, useState } from "react";
// import type { Schema } from "../../amplify/data/resource";
// import { generateClient } from "aws-amplify/data";

// const client = generateClient<Schema>();

function SecretSantaEventManager() {
  // const [events, setEvents] = useState<Array<Schema["Event"]["type"]>>([]);
  // useEffect(() => {
  //   client.models.Event.observeQuery().subscribe({
  //     next: (data) => setEvents([...data.items]),
  //   });
  // }, []);
  // function createEvent() {
  //   const eventName = window.prompt("Event Name");
  //   eventName && client.models.Event.create({ name: eventName });
  // }
  // return (
  //   <main>
  //     <h1>Your events</h1>
  //     <button onClick={createEvent}>+ new</button>
  //     <ul>
  //       {events.map((event) => (
  //         <li
  //           key={event.id}>{event.name}</li>
  //       ))}
  //     </ul>
  //   </main>
  // );
}

export default SecretSantaEventManager;
