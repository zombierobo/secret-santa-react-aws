import { useEffect, useState } from "react";

import { client } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";

function ParticipantJoinEventLandingPage() {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState<string>();
  useEffect(() => {
    (async function () {
      if (eventId) {
        const { data } =
          await client.queries.participantLandingPageEventDetails(
            {
              eventId,
            },
            { authMode: "identityPool" }
          );

        if (data) {
          setEventName(data.eventName);
        }
      } else {
        console.error("Event id is missing");
      }
    })();
  }, []);
  return (
    <div>
      {eventName ? (
        <>
          <h1>Are you interested in joining secret santa event {eventName} </h1>
        </>
      ) : null}
    </div>
  );
}

export default ParticipantJoinEventLandingPage;
