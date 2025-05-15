import { useEffect, useState } from "react";

import { client } from "../../amplify/data/exported-types";
import { useParams } from "react-router-dom";

const AcceptEventInviteForm = (props: { eventId: string }) => {
  const [formData, setFormData] = useState({
    email: "",
    fullName: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // Optionally reset form:
    // setFormData({ email: '', fullName: '' });

    client.mutations.participantEventInviteAcceptResponseMutation({
      eventId: props.eventId,
      name: formData.fullName,
      email: formData.email,
    });
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <h2>Enter your information </h2>
      {submitted && (
        <p style={{ color: "green" }}>Form submitted successfully!</p>
      )}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="fullName">Full Name:</label>
          <br />
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

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
        console.log("DATA", data);
      } else {
        console.error("Event id is missing");
      }
    })();
  }, []);

  console.log(eventId, eventName);
  return (
    <div>
      {eventName && eventId ? (
        <>
          <h1>
            Are you interested in joining secret santa event {eventName} ?
          </h1>

          <div>
            <AcceptEventInviteForm eventId={eventId} />
          </div>
        </>
      ) : null}
    </div>
  );
}

export default ParticipantJoinEventLandingPage;
