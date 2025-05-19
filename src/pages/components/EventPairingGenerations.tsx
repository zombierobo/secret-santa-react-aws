import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/data";

import { Schema } from "../../../amplify/data/resource";
import RenderPairingGeneration from "./RenderPairingGeneration";
import { timeAgo } from "../../utils/timeAgo";
import { selectionSetForGenerationOfPairsForSubscription } from "../../../amplify/data/exported-types";

const client = generateClient<Schema>();

function EventPairingGenerations({ eventId }: { eventId: string }) {
  const [generations, setGenerations] = useState<
    Array<{
      id: string;
      complete: boolean;
      eventId: string | null;
      totalParticipants: number | null;
      createdAt: string;
      failed: boolean | null;
      failureReason: string | null;
      jobDebugDetails: string | null;
    }>
  >([]);
  useEffect(() => {
    const observer = client.models.ParticipantPairingGeneration.observeQuery({
      selectionSet: selectionSetForGenerationOfPairsForSubscription,
      filter: {
        eventId: {
          eq: eventId,
        },
      },
    }).subscribe({
      next: (data) =>
        setGenerations(
          [...data.items].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        ),
    });
    return () => observer.unsubscribe();
  }, []);

  return (
    <>
      {generations.length > 0 && (
        <>
          <h3>Generated pairs</h3>
          <ul>
            {generations.map((g) => (
              <li key={g.id}>
                <p>
                  This generation has {g.totalParticipants} participants.
                  Generated {timeAgo(new Date(g.createdAt))},{" "}
                  {g.complete ? "Complete" : g.failed ? "Failed" : "Inprogress"}
                  {g.failureReason ?? ""}
                </p>
                <RenderPairingGeneration
                  participantPairingGenerationId={g.id}
                />
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default EventPairingGenerations;
