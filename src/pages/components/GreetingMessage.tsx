import { useAuthenticator } from "@aws-amplify/ui-react";
import { generateClient } from "aws-amplify/data";
import { Schema } from "../../../amplify/data/resource";
import { useEffect, useState } from "react";
import { UserProfileType } from "../../../amplify/data/exported-types";
const client = generateClient<Schema>();

function GreetingMessage() {
  const [userprofiles, setUserProfiles] = useState<Array<UserProfileType>>([]);
  const { signOut } = useAuthenticator();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  async function fetchUserProfile() {
    const { data: profiles } = await client.models.UserProfile.list();
    setUserProfiles(profiles);
  }

  const loggedInUserEmail = userprofiles[0]?.email;

  return loggedInUserEmail ? (
    <>
      <h1>Hi {loggedInUserEmail} </h1>

      <h1 className="user-greeting-message">
        Welcome to Secret Santa events manager!
      </h1>
      <button onClick={signOut}>Sign out</button>
    </>
  ) : (
    <h1>Welcome to Secret Santa events manager!</h1>
  );
}

export default GreetingMessage;
