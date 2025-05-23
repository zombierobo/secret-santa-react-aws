import { useAuthenticator } from "@aws-amplify/ui-react";

export function useIsOrganizerLoggedIn(): boolean {
  const { authStatus } = useAuthenticator();
  return authStatus === "authenticated";
}
