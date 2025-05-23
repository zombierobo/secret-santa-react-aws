import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/data";

import { Schema } from "../../../amplify/data/resource";
import { timeAgo } from "../../utils/timeAgo";

const client = generateClient<Schema>();

function EventListItem({
  eventId,
  eventName,
  eventCreatedAt,
}: {
  eventId: string;
  eventName: string;
  eventCreatedAt: string;
}) {
  const [participantCount, setParticipantCount] = useState(0);
  const [inviteAcceptedParticipantCount, setInviteAcceptedParticipantCount] =
    useState(0);
  useEffect(() => {
    const observer = client.models.Participant.observeQuery({
      filter: {
        eventId: {
          eq: eventId,
        },
      },
    }).subscribe({
      next: (data) => setParticipantCount(data.items.length),
    });
    const observer2 = client.models.ParticipantInviteResponse.observeQuery({
      filter: {
        eventId: {
          eq: eventId,
        },
      },
    }).subscribe({
      next: (data) => setInviteAcceptedParticipantCount(data.items.length),
    });

    return () => {
      observer.unsubscribe();
      observer2.unsubscribe();
    };
  }, []);

  return (
    <>
      {eventName}, created {timeAgo(new Date(eventCreatedAt))} Participants{" "}
      {participantCount + inviteAcceptedParticipantCount}
    </>
  );
}

export default EventListItem;
