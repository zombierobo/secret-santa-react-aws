import { useAuthenticator } from "@aws-amplify/ui-react";

function GreetingMessage() {
  const { signOut, user } = useAuthenticator();

  const loggedInUsedId = user?.signInDetails?.loginId;
  return loggedInUsedId ? (
    <>
      <h1>Hi {loggedInUsedId} </h1>
      <h1>Welcome to Secret Santa events manager!</h1>
      <button onClick={signOut}>Sign out</button>
    </>
  ) : (
    <h1>Welcome to Secret Santa events manager!</h1>
  );
}

export default GreetingMessage;
