import GreetingMessage from "./components/GreetingMessage";
import { useIsOrganizerLoggedIn } from "./hooks/useIsOrganizerLoggedIn";
import EventList from "./components/EventList";
import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { useState } from "react";

function HomePage() {
  const isOrganizerLoggedIn = useIsOrganizerLoggedIn();
  const { signOut } = useAuthenticator();
  const [showAuthForm, setShowAuthForm] = useState(false);

  const signOutHandler = () => {
    signOut();
  };

  const pageContent = (
    <>
      <GreetingMessage onSignOut={signOutHandler} />
      {isOrganizerLoggedIn ? (
        <>
          <EventList />
        </>
      ) : (
        <>
          <button
            onClick={() => setShowAuthForm(true)}
            className="home-page-loggedout-create-event-btn"
          >
            Create an Event
          </button>
        </>
      )}
    </>
  );

  return !isOrganizerLoggedIn && showAuthForm ? (
    <Authenticator>{pageContent}</Authenticator>
  ) : (
    pageContent
  );
}

export default HomePage;
