import { useAuthenticator } from "@aws-amplify/ui-react";
import { Link } from "react-router-dom";

function HomePage() {
  const { signOut, user } = useAuthenticator();
  return (
    <main>
      <h1>Hi {user?.signInDetails?.loginId} </h1>
      <h1>Welcome to Secret Santa events manager!</h1>
      <Link to="/events">Create and manage events</Link>
      <button onClick={signOut}>Sign out</button>
    </main>
  );
}

export default HomePage;
