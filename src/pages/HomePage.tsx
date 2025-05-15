import { Link } from "react-router-dom";

import { useAuthenticator } from "@aws-amplify/ui-react";

function GreetingMessage() {
  const { signOut, user } = useAuthenticator();

  const loggedInUsedId = user?.signInDetails?.loginId;
  return loggedInUsedId ? (
    <>
      <h1>Hi {loggedInUsedId} </h1>
      <button onClick={signOut}>Sign out</button>
    </>
  ) : null;
}

function HomePage() {
  return (
    <main>
      <h1>Welcome to Secret Santa events manager!</h1>
      <Link to="/events">Create and manage events</Link>

      <GreetingMessage />
    </main>
  );
}

export default HomePage;
