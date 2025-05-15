import { useEffect, useState } from "react";
import type { EventType } from "../../amplify/data/exported-types";
import { client } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";

function ParticipantJoinEventLandingPage() {
  const { eventId } = useParams();
  const [event, _setEvent] = useState<EventType>();
  useEffect(() => {
    (async function () {
      if (eventId) {
        const { data, errors } =
          await client.queries.participantLandingPageEventDetails({
            eventId,
          });
        console.log("Event data", data, errors);

        // const res = await client.models.Event.get(
        //   { id: eventId },
        //   { authMode: "identityPool" }
        // );
        // const eventData: EventType | null = res.data;
        // if (eventData) {
        //   setEvent(eventData);
        //   console.log("Participant event data", eventData);

        //   const participantsdata = await eventData.participants();
        //   console.log("participantsdata", participantsdata);
        // }
      } else {
        console.error("Event id is missing");
      }
    })();
  }, []);
  return (
    <div>
      {event?.name ? (
        <>
          <h1>
            Are you interested in joining secret santa event {event.name}{" "}
          </h1>
        </>
      ) : null}
    </div>
  );
}

export default ParticipantJoinEventLandingPage;
