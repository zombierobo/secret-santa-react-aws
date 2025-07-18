/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Event = {
  __typename: "Event",
  createdAt: string,
  id: string,
  name: string,
  owner?: string | null,
  participantInviteResponses?: ModelParticipantInviteResponseConnection | null,
  participantPairingGenerations?: ModelParticipantPairingGenerationConnection | null,
  participants?: ModelParticipantConnection | null,
  updatedAt: string,
};

export type ModelParticipantInviteResponseConnection = {
  __typename: "ModelParticipantInviteResponseConnection",
  items:  Array<ParticipantInviteResponse | null >,
  nextToken?: string | null,
};

export type ParticipantInviteResponse = {
  __typename: "ParticipantInviteResponse",
  createdAt: string,
  email: string,
  event?: Event | null,
  eventId?: string | null,
  id: string,
  name: string,
  owner: string,
  updatedAt: string,
};

export type ModelParticipantPairingGenerationConnection = {
  __typename: "ModelParticipantPairingGenerationConnection",
  items:  Array<ParticipantPairingGeneration | null >,
  nextToken?: string | null,
};

export type ParticipantPairingGeneration = {
  __typename: "ParticipantPairingGeneration",
  complete: boolean,
  createdAt: string,
  event?: Event | null,
  eventId?: string | null,
  failed?: boolean | null,
  failureReason?: string | null,
  id: string,
  jobDebugDetails?: string | null,
  owner: string,
  participantPairingGenerationPairs?: ModelParticipantPairingGenerationPairConnection | null,
  totalParticipants?: number | null,
  updatedAt: string,
};

export type ModelParticipantPairingGenerationPairConnection = {
  __typename: "ModelParticipantPairingGenerationPairConnection",
  items:  Array<ParticipantPairingGenerationPair | null >,
  nextToken?: string | null,
};

export type ParticipantPairingGenerationPair = {
  __typename: "ParticipantPairingGenerationPair",
  createdAt: string,
  gifterEmail?: string | null,
  gifterName: string,
  id: string,
  owner: string,
  participantPairingGeneration?: ParticipantPairingGeneration | null,
  participantPairingGenerationId?: string | null,
  receiverEmail?: string | null,
  receiverName: string,
  updatedAt: string,
};

export type ModelParticipantConnection = {
  __typename: "ModelParticipantConnection",
  items:  Array<Participant | null >,
  nextToken?: string | null,
};

export type Participant = {
  __typename: "Participant",
  createdAt: string,
  event?: Event | null,
  eventId?: string | null,
  id: string,
  name: string,
  owner?: string | null,
  updatedAt: string,
};

export type Todo = {
  __typename: "Todo",
  content?: string | null,
  createdAt: string,
  id: string,
  owner?: string | null,
  updatedAt: string,
};

export type UserProfile = {
  __typename: "UserProfile",
  createdAt: string,
  email?: string | null,
  id: string,
  profileOwner?: string | null,
  updatedAt: string,
};

export type ModelEventFilterInput = {
  and?: Array< ModelEventFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelEventFilterInput | null,
  or?: Array< ModelEventFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  _null = "_null",
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
}


export type ModelSizeInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelIDInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  size?: ModelSizeInput | null,
};

export type ModelEventConnection = {
  __typename: "ModelEventConnection",
  items:  Array<Event | null >,
  nextToken?: string | null,
};

export type ModelParticipantInviteResponseFilterInput = {
  and?: Array< ModelParticipantInviteResponseFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelParticipantInviteResponseFilterInput | null,
  or?: Array< ModelParticipantInviteResponseFilterInput | null > | null,
  owner?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelParticipantPairingGenerationPairFilterInput = {
  and?: Array< ModelParticipantPairingGenerationPairFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  gifterEmail?: ModelStringInput | null,
  gifterName?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelParticipantPairingGenerationPairFilterInput | null,
  or?: Array< ModelParticipantPairingGenerationPairFilterInput | null > | null,
  owner?: ModelIDInput | null,
  participantPairingGenerationId?: ModelIDInput | null,
  receiverEmail?: ModelStringInput | null,
  receiverName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelParticipantPairingGenerationFilterInput = {
  and?: Array< ModelParticipantPairingGenerationFilterInput | null > | null,
  complete?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  failed?: ModelBooleanInput | null,
  failureReason?: ModelStringInput | null,
  id?: ModelIDInput | null,
  jobDebugDetails?: ModelStringInput | null,
  not?: ModelParticipantPairingGenerationFilterInput | null,
  or?: Array< ModelParticipantPairingGenerationFilterInput | null > | null,
  owner?: ModelIDInput | null,
  totalParticipants?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelBooleanInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelIntInput = {
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
};

export type ModelParticipantFilterInput = {
  and?: Array< ModelParticipantFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelParticipantFilterInput | null,
  or?: Array< ModelParticipantFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoFilterInput = {
  and?: Array< ModelTodoFilterInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelTodoFilterInput | null,
  or?: Array< ModelTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelTodoConnection = {
  __typename: "ModelTodoConnection",
  items:  Array<Todo | null >,
  nextToken?: string | null,
};

export type ModelUserProfileFilterInput = {
  and?: Array< ModelUserProfileFilterInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  id?: ModelIDInput | null,
  not?: ModelUserProfileFilterInput | null,
  or?: Array< ModelUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelUserProfileConnection = {
  __typename: "ModelUserProfileConnection",
  items:  Array<UserProfile | null >,
  nextToken?: string | null,
};

export type ParticipantLandingEventDetailsResponse = {
  __typename: "ParticipantLandingEventDetailsResponse",
  eventName: string,
  organizerName: string,
};

export type ModelEventConditionInput = {
  and?: Array< ModelEventConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  name?: ModelStringInput | null,
  not?: ModelEventConditionInput | null,
  or?: Array< ModelEventConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateEventInput = {
  id?: string | null,
  name: string,
  owner?: string | null,
};

export type ModelParticipantConditionInput = {
  and?: Array< ModelParticipantConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelParticipantConditionInput | null,
  or?: Array< ModelParticipantConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParticipantInput = {
  eventId?: string | null,
  id?: string | null,
  name: string,
  owner?: string | null,
};

export type ModelParticipantInviteResponseConditionInput = {
  and?: Array< ModelParticipantInviteResponseConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  name?: ModelStringInput | null,
  not?: ModelParticipantInviteResponseConditionInput | null,
  or?: Array< ModelParticipantInviteResponseConditionInput | null > | null,
  owner?: ModelIDInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParticipantInviteResponseInput = {
  email: string,
  eventId?: string | null,
  id?: string | null,
  name: string,
  owner: string,
};

export type ModelParticipantPairingGenerationConditionInput = {
  and?: Array< ModelParticipantPairingGenerationConditionInput | null > | null,
  complete?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  eventId?: ModelIDInput | null,
  failed?: ModelBooleanInput | null,
  failureReason?: ModelStringInput | null,
  jobDebugDetails?: ModelStringInput | null,
  not?: ModelParticipantPairingGenerationConditionInput | null,
  or?: Array< ModelParticipantPairingGenerationConditionInput | null > | null,
  owner?: ModelIDInput | null,
  totalParticipants?: ModelIntInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParticipantPairingGenerationInput = {
  complete: boolean,
  eventId?: string | null,
  failed?: boolean | null,
  failureReason?: string | null,
  id?: string | null,
  jobDebugDetails?: string | null,
  owner: string,
  totalParticipants?: number | null,
};

export type ModelParticipantPairingGenerationPairConditionInput = {
  and?: Array< ModelParticipantPairingGenerationPairConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  gifterEmail?: ModelStringInput | null,
  gifterName?: ModelStringInput | null,
  not?: ModelParticipantPairingGenerationPairConditionInput | null,
  or?: Array< ModelParticipantPairingGenerationPairConditionInput | null > | null,
  owner?: ModelIDInput | null,
  participantPairingGenerationId?: ModelIDInput | null,
  receiverEmail?: ModelStringInput | null,
  receiverName?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateParticipantPairingGenerationPairInput = {
  gifterEmail?: string | null,
  gifterName: string,
  id?: string | null,
  owner: string,
  participantPairingGenerationId?: string | null,
  receiverEmail?: string | null,
  receiverName: string,
};

export type ModelTodoConditionInput = {
  and?: Array< ModelTodoConditionInput | null > | null,
  content?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  not?: ModelTodoConditionInput | null,
  or?: Array< ModelTodoConditionInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateTodoInput = {
  content?: string | null,
  id?: string | null,
};

export type ModelUserProfileConditionInput = {
  and?: Array< ModelUserProfileConditionInput | null > | null,
  createdAt?: ModelStringInput | null,
  email?: ModelStringInput | null,
  not?: ModelUserProfileConditionInput | null,
  or?: Array< ModelUserProfileConditionInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type CreateUserProfileInput = {
  email?: string | null,
  id?: string | null,
  profileOwner?: string | null,
};

export type DeleteEventInput = {
  id: string,
};

export type DeleteParticipantInput = {
  id: string,
};

export type DeleteParticipantInviteResponseInput = {
  id: string,
};

export type DeleteParticipantPairingGenerationInput = {
  id: string,
};

export type DeleteParticipantPairingGenerationPairInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
};

export type DeleteUserProfileInput = {
  id: string,
};

export type EventInvocationResponse = {
  __typename: "EventInvocationResponse",
  success: boolean,
};

export type ParticipantInviteResponseMutationResponse = {
  __typename: "ParticipantInviteResponseMutationResponse",
  success: boolean,
};

export type UpdateEventInput = {
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateParticipantInput = {
  eventId?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateParticipantInviteResponseInput = {
  email?: string | null,
  eventId?: string | null,
  id: string,
  name?: string | null,
  owner?: string | null,
};

export type UpdateParticipantPairingGenerationInput = {
  complete?: boolean | null,
  eventId?: string | null,
  failed?: boolean | null,
  failureReason?: string | null,
  id: string,
  jobDebugDetails?: string | null,
  owner?: string | null,
  totalParticipants?: number | null,
};

export type UpdateParticipantPairingGenerationPairInput = {
  gifterEmail?: string | null,
  gifterName?: string | null,
  id: string,
  owner?: string | null,
  participantPairingGenerationId?: string | null,
  receiverEmail?: string | null,
  receiverName?: string | null,
};

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
};

export type UpdateUserProfileInput = {
  email?: string | null,
  id: string,
  profileOwner?: string | null,
};

export type ModelSubscriptionEventFilterInput = {
  and?: Array< ModelSubscriptionEventFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionEventFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionStringInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionIDInput = {
  beginsWith?: string | null,
  between?: Array< string | null > | null,
  contains?: string | null,
  eq?: string | null,
  ge?: string | null,
  gt?: string | null,
  in?: Array< string | null > | null,
  le?: string | null,
  lt?: string | null,
  ne?: string | null,
  notContains?: string | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionParticipantFilterInput = {
  and?: Array< ModelSubscriptionParticipantFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  eventId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionParticipantFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionParticipantInviteResponseFilterInput = {
  and?: Array< ModelSubscriptionParticipantInviteResponseFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  eventId?: ModelSubscriptionIDInput | null,
  id?: ModelSubscriptionIDInput | null,
  name?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionParticipantInviteResponseFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionParticipantPairingGenerationFilterInput = {
  and?: Array< ModelSubscriptionParticipantPairingGenerationFilterInput | null > | null,
  complete?: ModelSubscriptionBooleanInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  eventId?: ModelSubscriptionIDInput | null,
  failed?: ModelSubscriptionBooleanInput | null,
  failureReason?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  jobDebugDetails?: ModelSubscriptionStringInput | null,
  or?: Array< ModelSubscriptionParticipantPairingGenerationFilterInput | null > | null,
  owner?: ModelStringInput | null,
  totalParticipants?: ModelSubscriptionIntInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionBooleanInput = {
  eq?: boolean | null,
  ne?: boolean | null,
};

export type ModelSubscriptionIntInput = {
  between?: Array< number | null > | null,
  eq?: number | null,
  ge?: number | null,
  gt?: number | null,
  in?: Array< number | null > | null,
  le?: number | null,
  lt?: number | null,
  ne?: number | null,
  notIn?: Array< number | null > | null,
};

export type ModelSubscriptionParticipantPairingGenerationPairFilterInput = {
  and?: Array< ModelSubscriptionParticipantPairingGenerationPairFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  gifterEmail?: ModelSubscriptionStringInput | null,
  gifterName?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionParticipantPairingGenerationPairFilterInput | null > | null,
  owner?: ModelStringInput | null,
  participantPairingGenerationId?: ModelSubscriptionIDInput | null,
  receiverEmail?: ModelSubscriptionStringInput | null,
  receiverName?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type ModelSubscriptionUserProfileFilterInput = {
  and?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  createdAt?: ModelSubscriptionStringInput | null,
  email?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionUserProfileFilterInput | null > | null,
  profileOwner?: ModelStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
};

export type GetEventQueryVariables = {
  id: string,
};

export type GetEventQuery = {
  getEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type GetParticipantQueryVariables = {
  id: string,
};

export type GetParticipantQuery = {
  getParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetParticipantInviteResponseQueryVariables = {
  id: string,
};

export type GetParticipantInviteResponseQuery = {
  getParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type GetParticipantPairingGenerationQueryVariables = {
  id: string,
};

export type GetParticipantPairingGenerationQuery = {
  getParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type GetParticipantPairingGenerationPairQueryVariables = {
  id: string,
};

export type GetParticipantPairingGenerationPairQuery = {
  getParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type GetTodoQueryVariables = {
  id: string,
};

export type GetTodoQuery = {
  getTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type GetUserProfileQueryVariables = {
  id: string,
};

export type GetUserProfileQuery = {
  getUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type ListEventsQueryVariables = {
  filter?: ModelEventFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListEventsQuery = {
  listEvents?:  {
    __typename: "ModelEventConnection",
    items:  Array< {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipantInviteResponsesQueryVariables = {
  filter?: ModelParticipantInviteResponseFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantInviteResponsesQuery = {
  listParticipantInviteResponses?:  {
    __typename: "ModelParticipantInviteResponseConnection",
    items:  Array< {
      __typename: "ParticipantInviteResponse",
      createdAt: string,
      email: string,
      eventId?: string | null,
      id: string,
      name: string,
      owner: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipantPairingGenerationPairsQueryVariables = {
  filter?: ModelParticipantPairingGenerationPairFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantPairingGenerationPairsQuery = {
  listParticipantPairingGenerationPairs?:  {
    __typename: "ModelParticipantPairingGenerationPairConnection",
    items:  Array< {
      __typename: "ParticipantPairingGenerationPair",
      createdAt: string,
      gifterEmail?: string | null,
      gifterName: string,
      id: string,
      owner: string,
      participantPairingGenerationId?: string | null,
      receiverEmail?: string | null,
      receiverName: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipantPairingGenerationsQueryVariables = {
  filter?: ModelParticipantPairingGenerationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantPairingGenerationsQuery = {
  listParticipantPairingGenerations?:  {
    __typename: "ModelParticipantPairingGenerationConnection",
    items:  Array< {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListParticipantsQueryVariables = {
  filter?: ModelParticipantFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListParticipantsQuery = {
  listParticipants?:  {
    __typename: "ModelParticipantConnection",
    items:  Array< {
      __typename: "Participant",
      createdAt: string,
      eventId?: string | null,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListTodosQueryVariables = {
  filter?: ModelTodoFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTodosQuery = {
  listTodos?:  {
    __typename: "ModelTodoConnection",
    items:  Array< {
      __typename: "Todo",
      content?: string | null,
      createdAt: string,
      id: string,
      owner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ListUserProfilesQueryVariables = {
  filter?: ModelUserProfileFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUserProfilesQuery = {
  listUserProfiles?:  {
    __typename: "ModelUserProfileConnection",
    items:  Array< {
      __typename: "UserProfile",
      createdAt: string,
      email?: string | null,
      id: string,
      profileOwner?: string | null,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ParticipantLandingPageDataFetcherQueryVariables = {
  eventId: string,
};

export type ParticipantLandingPageDataFetcherQuery = {
  participantLandingPageDataFetcher?:  {
    __typename: "ParticipantLandingEventDetailsResponse",
    eventName: string,
    organizerName: string,
  } | null,
};

export type CreateEventMutationVariables = {
  condition?: ModelEventConditionInput | null,
  input: CreateEventInput,
};

export type CreateEventMutation = {
  createEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type CreateParticipantMutationVariables = {
  condition?: ModelParticipantConditionInput | null,
  input: CreateParticipantInput,
};

export type CreateParticipantMutation = {
  createParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateParticipantInviteResponseMutationVariables = {
  condition?: ModelParticipantInviteResponseConditionInput | null,
  input: CreateParticipantInviteResponseInput,
};

export type CreateParticipantInviteResponseMutation = {
  createParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type CreateParticipantPairingGenerationMutationVariables = {
  condition?: ModelParticipantPairingGenerationConditionInput | null,
  input: CreateParticipantPairingGenerationInput,
};

export type CreateParticipantPairingGenerationMutation = {
  createParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type CreateParticipantPairingGenerationPairMutationVariables = {
  condition?: ModelParticipantPairingGenerationPairConditionInput | null,
  input: CreateParticipantPairingGenerationPairInput,
};

export type CreateParticipantPairingGenerationPairMutation = {
  createParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type CreateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: CreateTodoInput,
};

export type CreateTodoMutation = {
  createTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type CreateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: CreateUserProfileInput,
};

export type CreateUserProfileMutation = {
  createUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteEventMutationVariables = {
  condition?: ModelEventConditionInput | null,
  input: DeleteEventInput,
};

export type DeleteEventMutation = {
  deleteEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantMutationVariables = {
  condition?: ModelParticipantConditionInput | null,
  input: DeleteParticipantInput,
};

export type DeleteParticipantMutation = {
  deleteParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantInviteResponseMutationVariables = {
  condition?: ModelParticipantInviteResponseConditionInput | null,
  input: DeleteParticipantInviteResponseInput,
};

export type DeleteParticipantInviteResponseMutation = {
  deleteParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantPairingGenerationMutationVariables = {
  condition?: ModelParticipantPairingGenerationConditionInput | null,
  input: DeleteParticipantPairingGenerationInput,
};

export type DeleteParticipantPairingGenerationMutation = {
  deleteParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type DeleteParticipantPairingGenerationPairMutationVariables = {
  condition?: ModelParticipantPairingGenerationPairConditionInput | null,
  input: DeleteParticipantPairingGenerationPairInput,
};

export type DeleteParticipantPairingGenerationPairMutation = {
  deleteParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type DeleteTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: DeleteTodoInput,
};

export type DeleteTodoMutation = {
  deleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type DeleteUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: DeleteUserProfileInput,
};

export type DeleteUserProfileMutation = {
  deleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type GenerateParticipantPairingMutationMutationVariables = {
  eventId: string,
};

export type GenerateParticipantPairingMutationMutation = {
  generateParticipantPairingMutation?:  {
    __typename: "EventInvocationResponse",
    success: boolean,
  } | null,
};

export type ParticipantInviteResponseMutationMutationVariables = {
  email: string,
  eventId: string,
  name: string,
};

export type ParticipantInviteResponseMutationMutation = {
  participantInviteResponseMutation?:  {
    __typename: "ParticipantInviteResponseMutationResponse",
    success: boolean,
  } | null,
};

export type UpdateEventMutationVariables = {
  condition?: ModelEventConditionInput | null,
  input: UpdateEventInput,
};

export type UpdateEventMutation = {
  updateEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantMutationVariables = {
  condition?: ModelParticipantConditionInput | null,
  input: UpdateParticipantInput,
};

export type UpdateParticipantMutation = {
  updateParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantInviteResponseMutationVariables = {
  condition?: ModelParticipantInviteResponseConditionInput | null,
  input: UpdateParticipantInviteResponseInput,
};

export type UpdateParticipantInviteResponseMutation = {
  updateParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantPairingGenerationMutationVariables = {
  condition?: ModelParticipantPairingGenerationConditionInput | null,
  input: UpdateParticipantPairingGenerationInput,
};

export type UpdateParticipantPairingGenerationMutation = {
  updateParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type UpdateParticipantPairingGenerationPairMutationVariables = {
  condition?: ModelParticipantPairingGenerationPairConditionInput | null,
  input: UpdateParticipantPairingGenerationPairInput,
};

export type UpdateParticipantPairingGenerationPairMutation = {
  updateParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type UpdateTodoMutationVariables = {
  condition?: ModelTodoConditionInput | null,
  input: UpdateTodoInput,
};

export type UpdateTodoMutation = {
  updateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type UpdateUserProfileMutationVariables = {
  condition?: ModelUserProfileConditionInput | null,
  input: UpdateUserProfileInput,
};

export type UpdateUserProfileMutation = {
  updateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnCreateEventSubscription = {
  onCreateEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipantSubscription = {
  onCreateParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantInviteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantInviteResponseFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipantInviteResponseSubscription = {
  onCreateParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantPairingGenerationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipantPairingGenerationSubscription = {
  onCreateParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type OnCreateParticipantPairingGenerationPairSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationPairFilterInput | null,
  owner?: string | null,
};

export type OnCreateParticipantPairingGenerationPairSubscription = {
  onCreateParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type OnCreateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnCreateTodoSubscription = {
  onCreateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnCreateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnCreateUserProfileSubscription = {
  onCreateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnDeleteEventSubscription = {
  onDeleteEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipantSubscription = {
  onDeleteParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantInviteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantInviteResponseFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipantInviteResponseSubscription = {
  onDeleteParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantPairingGenerationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipantPairingGenerationSubscription = {
  onDeleteParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteParticipantPairingGenerationPairSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationPairFilterInput | null,
  owner?: string | null,
};

export type OnDeleteParticipantPairingGenerationPairSubscription = {
  onDeleteParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnDeleteTodoSubscription = {
  onDeleteTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnDeleteUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnDeleteUserProfileSubscription = {
  onDeleteUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateEventSubscriptionVariables = {
  filter?: ModelSubscriptionEventFilterInput | null,
  owner?: string | null,
};

export type OnUpdateEventSubscription = {
  onUpdateEvent?:  {
    __typename: "Event",
    createdAt: string,
    id: string,
    name: string,
    owner?: string | null,
    participantInviteResponses?:  {
      __typename: "ModelParticipantInviteResponseConnection",
      nextToken?: string | null,
    } | null,
    participantPairingGenerations?:  {
      __typename: "ModelParticipantPairingGenerationConnection",
      nextToken?: string | null,
    } | null,
    participants?:  {
      __typename: "ModelParticipantConnection",
      nextToken?: string | null,
    } | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipantSubscription = {
  onUpdateParticipant?:  {
    __typename: "Participant",
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantInviteResponseSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantInviteResponseFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipantInviteResponseSubscription = {
  onUpdateParticipantInviteResponse?:  {
    __typename: "ParticipantInviteResponse",
    createdAt: string,
    email: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    id: string,
    name: string,
    owner: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantPairingGenerationSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipantPairingGenerationSubscription = {
  onUpdateParticipantPairingGeneration?:  {
    __typename: "ParticipantPairingGeneration",
    complete: boolean,
    createdAt: string,
    event?:  {
      __typename: "Event",
      createdAt: string,
      id: string,
      name: string,
      owner?: string | null,
      updatedAt: string,
    } | null,
    eventId?: string | null,
    failed?: boolean | null,
    failureReason?: string | null,
    id: string,
    jobDebugDetails?: string | null,
    owner: string,
    participantPairingGenerationPairs?:  {
      __typename: "ModelParticipantPairingGenerationPairConnection",
      nextToken?: string | null,
    } | null,
    totalParticipants?: number | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateParticipantPairingGenerationPairSubscriptionVariables = {
  filter?: ModelSubscriptionParticipantPairingGenerationPairFilterInput | null,
  owner?: string | null,
};

export type OnUpdateParticipantPairingGenerationPairSubscription = {
  onUpdateParticipantPairingGenerationPair?:  {
    __typename: "ParticipantPairingGenerationPair",
    createdAt: string,
    gifterEmail?: string | null,
    gifterName: string,
    id: string,
    owner: string,
    participantPairingGeneration?:  {
      __typename: "ParticipantPairingGeneration",
      complete: boolean,
      createdAt: string,
      eventId?: string | null,
      failed?: boolean | null,
      failureReason?: string | null,
      id: string,
      jobDebugDetails?: string | null,
      owner: string,
      totalParticipants?: number | null,
      updatedAt: string,
    } | null,
    participantPairingGenerationId?: string | null,
    receiverEmail?: string | null,
    receiverName: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateTodoSubscriptionVariables = {
  filter?: ModelSubscriptionTodoFilterInput | null,
  owner?: string | null,
};

export type OnUpdateTodoSubscription = {
  onUpdateTodo?:  {
    __typename: "Todo",
    content?: string | null,
    createdAt: string,
    id: string,
    owner?: string | null,
    updatedAt: string,
  } | null,
};

export type OnUpdateUserProfileSubscriptionVariables = {
  filter?: ModelSubscriptionUserProfileFilterInput | null,
  profileOwner?: string | null,
};

export type OnUpdateUserProfileSubscription = {
  onUpdateUserProfile?:  {
    __typename: "UserProfile",
    createdAt: string,
    email?: string | null,
    id: string,
    profileOwner?: string | null,
    updatedAt: string,
  } | null,
};
