import { generateClient } from "aws-amplify/data";
import { Schema } from "../../../amplify/data/resource";
import { useEffect, useState } from "react";
import { UserProfileType } from "../../../amplify/data/exported-types";
const client = generateClient<Schema>();

function GreetingMessage({ onSignOut }: { onSignOut: () => void }) {
  const [userprofiles, setUserProfiles] = useState<Array<UserProfileType>>([]);

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
      <p className="user-greeting-message">
        {" "}
        Hi {loggedInUserEmail}, Welcome to Secret Santa events manager!{" "}
        <a onClick={onSignOut}>Sign out</a>
      </p>
    </>
  ) : (
    <p>Welcome to Secret Santa events manager!</p>
  );
}

export default GreetingMessage;
