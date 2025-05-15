import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";

const client = generateClient<Schema>();

function ParticipantJoinEventLandingPage() {
  const { eventId } = useParams();
  const [eventName, setEventName] = useState<string>();
  useEffect(() => {
    (async function () {
      if (eventId) {
        const { data, errors } =
          await client.queries.participantLandingPageDataFetcher(
            {
              eventId,
            },
            { authMode: "identityPool" }
          );

        if (data) {
          setEventName(data.eventName);
        }
        if (errors) {
          console.error("participant details page", errors);
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
