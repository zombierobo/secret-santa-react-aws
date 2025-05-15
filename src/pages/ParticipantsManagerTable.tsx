import { ParticipantType } from "../../amplify/data/exported-types";

function ParticipantsManagerTable(props: {
  participants: Array<ParticipantType>;
  addParticipant: (name: string) => void;
}) {
  function createParticipant() {
    const participantName = window.prompt("Participant Name");
    participantName && props.addParticipant(participantName);
  }
  return (
    <div>
      <h1>Participants of this event</h1>

      <ul>
        {props.participants.map((p) => (
          <li key={p.id}>{p.name}</li>
        ))}
      </ul>
      <button onClick={createParticipant}>+ new</button>
    </div>
  );
}

export default ParticipantsManagerTable;
