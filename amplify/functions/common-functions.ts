import { V6Client } from "@aws-amplify/api-graphql";
import { Schema } from "../data/resource";
import { EventType } from "../data/exported-types";

export function nullThrows<T>(
  value: T | null | undefined,
  errorMessage: string = "Value cannot be null"
): T {
  if (value === null || value === undefined) {
    throw new Error(errorMessage);
  }
  return value;
}

export async function fetchEvent(
  client: V6Client<Schema>,
  eventId: string,
  authMode?: "iam" | null
): Promise<EventType> {
  const eventData = await client.models.Event.get(
    {
      id: eventId,
    },
    {
      authMode: authMode === "iam" ? "iam" : undefined,
    }
  );
  if (eventData.errors) {
    console.error("error while fetching event", eventData.errors);
    throw new Error("error while fetching event");
  }
  return nullThrows(eventData.data);
}
