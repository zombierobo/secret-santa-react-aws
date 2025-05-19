import { ParticipantType } from "../../amplify/data/exported-types";

function ParticipantsManagerTable(props: {
  participants: Array<ParticipantType>;
  inviteAcceptedParticipants: Array<{
    name: string;
    email: string;
    id: string;
  }>;
  addParticipant: (name: string) => void;
  eventId: string;
}) {
  function createParticipant() {
    const participantName = window.prompt("Participant Name");
    participantName && props.addParticipant(participantName);
  }

  const copyToClipboard = () => {
    const inviteLink = window.location.origin + "/join-event/" + props.eventId;
    navigator.clipboard
      .writeText(inviteLink)
      .then(() => {
        alert("Invite link copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };
  return (
    <div>
      <h1>Participants of this event</h1>

      <ul>
        {props.participants.map((p) => (
          <li key={p.id}> Manually added - {p.name}</li>
        ))}
        {props.inviteAcceptedParticipants.map((p) => (
          <li key={p.id}>
            {" "}
            Invite accepted - {p.name} {p.email}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={createParticipant}>+ add participant</button>
        <span>OR</span>
        <button onClick={copyToClipboard}>Invite with link</button>
      </div>
    </div>
  );
}

export default ParticipantsManagerTable;
