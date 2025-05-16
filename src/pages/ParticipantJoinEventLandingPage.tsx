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

  function acceptEventInvite() {
    if (eventId) {
      (async function () {
        const { data, errors } =
          await client.mutations.participantInviteResponseMutation(
            {
              name: "Paritipant hard code name",
              email: "particpantemail-hardcode@xyz.com",
              eventId,
            },
            { authMode: "identityPool" }
          );
        data?.success && window.alert("Success! Event Joined");
        if (errors) {
          window.alert("Error! Could not join");
          console.error("Joining event failed", errors);
        }
      })();
    }
  }
  return (
    <div>
      {eventName ? (
        <>
          <h1>Are you interested in joining secret santa event {eventName} </h1>

          <button onClick={acceptEventInvite}>Yes</button>
        </>
      ) : null}
    </div>
  );
}

export default ParticipantJoinEventLandingPage;
