import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/data";

import { ParticipantPairingGenerationType } from "../../../amplify/data/exported-types";

import { Schema } from "../../../amplify/data/resource";
import RenderPairingGeneration from "./RenderPairingGeneration";

const client = generateClient<Schema>();

function EventPairingGenerations({ eventId }: { eventId: string }) {
  const [generations, setGenerations] = useState<
    Array<ParticipantPairingGenerationType>
  >([]);
  useEffect(() => {
    client.models.ParticipantPairingGeneration.observeQuery({
      filter: {
        eventId: {
          eq: eventId,
        },
        complete: {
          eq: true,
        },
      },
    }).subscribe({
      next: (data) => setGenerations([...data.items]),
    });
  }, []);

  return (
    <>
      {generations.length > 0 && (
        <>
          <h3>Generated pairs</h3>
          <ul>
            {generations.map((g) => (
              <li key={g.id}>
                <RenderPairingGeneration
                  totalParticipants={g.totalParticipants}
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
