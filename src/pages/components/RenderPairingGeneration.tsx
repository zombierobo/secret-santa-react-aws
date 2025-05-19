import { useEffect, useState } from "react";

import { generateClient } from "aws-amplify/data";
import { Schema } from "../../../amplify/data/resource";
import { ParticipantPairingGenerationPairType } from "../../../amplify/data/exported-types";

const client = generateClient<Schema>();
function RenderPairingGeneration({
  participantPairingGenerationId,
}: {
  participantPairingGenerationId: string;
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
      next: (data) =>
        setItems(
          [...data.items].sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
          )
        ),
    });
  }, []);
  return (
    <div>
      {items.map((g) => (
        <div key={g.id}>
          {g.gifterName}
          {g.gifterEmail ? `(${g.gifterEmail})` : ""} gifts to {g.receiverName}
          {g.receiverEmail ? `(${g.receiverEmail})` : ""}
        </div>
      ))}
    </div>
  );
}

export default RenderPairingGeneration;
