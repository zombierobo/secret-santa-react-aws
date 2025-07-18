import type { Schema } from "../../amplify/data/resource";

export type EventType = Schema["Event"]["type"];
export type ParticipantType = Schema["Participant"]["type"];
export type ParticipantInviteResponseType =
  Schema["ParticipantInviteResponse"]["type"];
export type ParticipantPairingGenerationType =
  Schema["ParticipantPairingGeneration"]["type"];
export type ParticipantPairingGenerationPairType =
  Schema["ParticipantPairingGenerationPair"]["type"];
export type UserProfileType = Schema["UserProfile"]["type"];

export const selectionSetForGenerationOfPairsForSubscription: Array<
  | "id"
  | "owner"
  | "complete"
  | "eventId"
  | "totalParticipants"
  | "createdAt"
  | "failed"
  | "failureReason"
  | "jobDebugDetails"
> = [
  "id",
  "owner",
  "complete",
  "eventId",
  "totalParticipants",
  "createdAt",
  "failed",
  "failureReason",
  "jobDebugDetails",
];
