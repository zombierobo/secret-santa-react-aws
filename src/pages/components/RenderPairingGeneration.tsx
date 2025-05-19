import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/data";
import { Schema } from "../../../amplify/data/resource";
import { ParticipantPairingGenerationPairType } from "../../../amplify/data/exported-types";

const client = generateClient<Schema>();
function RenderPairingGeneration({
  participantPairingGenerationId,
  totalParticipants,
}: {
  participantPairingGenerationId: string;
  totalParticipants?: number | null;
}) {
  const [items, setItems] = useState<
    Array<ParticipantPairingGenerationPairType>
  >([]);
  useEffect(() => {
    client.models.ParticipantPairingGenerationPair.observeQuery({
      filter: {
        participantPairingGenerationId: {
          eq: participantPairingGenerationId,
        },
      },
    }).subscribe({
      next: (data) => setItems([...data.items]),
    });
  }, []);
  return (
    <div>
      This generation has {totalParticipants}
      <ul>
        {items.map((g) => (
          <li key={g.id}>
            {g.gifterName}
            {g.gifterEmail ? `(${g.gifterEmail})` : ""} gifts to{" "}
            {g.receiverName}
            {g.receiverEmail ? `${g.receiverEmail}` : ""}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RenderPairingGeneration;
