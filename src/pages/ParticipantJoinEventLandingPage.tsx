import { generateClient } from "aws-amplify/api";
import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import { Schema } from "../../amplify/data/resource";
import { Button, Input } from "@aws-amplify/ui-react";

const client = generateClient<Schema>();

const ParticipationForm = ({
  eventId,
  onEventJoinedSuccess,
}: {
  eventId: string;
  onEventJoinedSuccess: () => void;
}) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();

    (async function () {
      const { data, errors } =
        await client.mutations.participantInviteResponseMutation(
          {
            name: formData.fullName,
            email: formData.email,
            eventId,
          },
          { authMode: "identityPool" }
        );
      if (data?.success) {
        window.alert("Success! Event Joined");
        onEventJoinedSuccess();
      }
      if (errors) {
        window.alert("Error! Could not join");
        console.error("Joining event failed", errors);
      }
    })();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white rounded-2xl shadow-md space-y-4"
    >
      <h2 className="text-2xl font-semibold text-center">User Information</h2>

      <div>
        <label htmlFor="fullName" className="block mb-1 font-medium">
          Full Name
        </label>
        <Input
          id="fullName"
          name="fullName"
          type="text"
          value={formData.fullName}
          onChange={handleChange}
          placeholder="John Doe"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block mb-1 font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="john@example.com"
          required
        />
      </div>

      <Button type="submit" className="w-full">
        Join
      </Button>
    </form>
  );
};

function Content({
  eventId,
  eventName,
}: {
  eventId: string;
  eventName: string;
}) {
  const [eventJoinedSuccess, setEventJoinedSuccess] = useState(false);

  const onEventJoinedSuccess = () => {
    setEventJoinedSuccess(true);
  };
  return (
    <div>
      {eventName ? (
        <>
          <h1>Are you interested in joining secret santa event {eventName} </h1>

          {eventJoinedSuccess !== true && (
            <ParticipationForm
              eventId={eventId}
              onEventJoinedSuccess={onEventJoinedSuccess}
            />
          )}
        </>
      ) : null}
    </div>
  );
}

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

  if (eventId && eventName) {
    return <Content eventId={eventId} eventName={eventName} />;
  }
  return null;
}

export default ParticipantJoinEventLandingPage;
