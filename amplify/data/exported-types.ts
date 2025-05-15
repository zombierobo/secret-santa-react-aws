import type { Schema } from "../../amplify/data/resource";
import { generateClient } from "aws-amplify/data";

export const client = generateClient<Schema>();
export type EventType = Schema["Event"]["type"];
export type ParticipantType = Schema["Participant"]["type"];
