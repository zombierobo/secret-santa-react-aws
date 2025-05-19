/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getEvent = /* GraphQL */ `query GetEvent($id: ID!) {
  getEvent(id: $id) {
    createdAt
    id
    name
    owner
    participantInviteResponses {
      nextToken
      __typename
    }
    participantPairingGenerations {
      nextToken
      __typename
    }
    participants {
      nextToken
      __typename
    }
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetEventQueryVariables, APITypes.GetEventQuery>;
export const getParticipant = /* GraphQL */ `query GetParticipant($id: ID!) {
  getParticipant(id: $id) {
    createdAt
    event {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    eventId
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParticipantQueryVariables,
  APITypes.GetParticipantQuery
>;
export const getParticipantInviteResponse = /* GraphQL */ `query GetParticipantInviteResponse($id: ID!) {
  getParticipantInviteResponse(id: $id) {
    createdAt
    email
    event {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    eventId
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParticipantInviteResponseQueryVariables,
  APITypes.GetParticipantInviteResponseQuery
>;
export const getParticipantPairingGeneration = /* GraphQL */ `query GetParticipantPairingGeneration($id: ID!) {
  getParticipantPairingGeneration(id: $id) {
    complete
    createdAt
    event {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    eventId
    id
    owner
    participantPairingGenerationPairs {
      nextToken
      __typename
    }
    totalParticipants
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParticipantPairingGenerationQueryVariables,
  APITypes.GetParticipantPairingGenerationQuery
>;
export const getParticipantPairingGenerationPair = /* GraphQL */ `query GetParticipantPairingGenerationPair($id: ID!) {
  getParticipantPairingGenerationPair(id: $id) {
    createdAt
    gifterEmail
    gifterName
    id
    owner
    participantPairingGeneration {
      complete
      createdAt
      eventId
      id
      owner
      totalParticipants
      updatedAt
      __typename
    }
    participantPairingGenerationId
    receiverEmail
    receiverName
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetParticipantPairingGenerationPairQueryVariables,
  APITypes.GetParticipantPairingGenerationPairQuery
>;
export const getTodo = /* GraphQL */ `query GetTodo($id: ID!) {
  getTodo(id: $id) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetTodoQueryVariables, APITypes.GetTodoQuery>;
export const getUserProfile = /* GraphQL */ `query GetUserProfile($id: ID!) {
  getUserProfile(id: $id) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.GetUserProfileQueryVariables,
  APITypes.GetUserProfileQuery
>;
export const listEvents = /* GraphQL */ `query ListEvents(
  $filter: ModelEventFilterInput
  $limit: Int
  $nextToken: String
) {
  listEvents(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListEventsQueryVariables,
  APITypes.ListEventsQuery
>;
export const listParticipantInviteResponses = /* GraphQL */ `query ListParticipantInviteResponses(
  $filter: ModelParticipantInviteResponseFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipantInviteResponses(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      email
      eventId
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipantInviteResponsesQueryVariables,
  APITypes.ListParticipantInviteResponsesQuery
>;
export const listParticipantPairingGenerationPairs = /* GraphQL */ `query ListParticipantPairingGenerationPairs(
  $filter: ModelParticipantPairingGenerationPairFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipantPairingGenerationPairs(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      createdAt
      gifterEmail
      gifterName
      id
      owner
      participantPairingGenerationId
      receiverEmail
      receiverName
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipantPairingGenerationPairsQueryVariables,
  APITypes.ListParticipantPairingGenerationPairsQuery
>;
export const listParticipantPairingGenerations = /* GraphQL */ `query ListParticipantPairingGenerations(
  $filter: ModelParticipantPairingGenerationFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipantPairingGenerations(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      complete
      createdAt
      eventId
      id
      owner
      totalParticipants
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipantPairingGenerationsQueryVariables,
  APITypes.ListParticipantPairingGenerationsQuery
>;
export const listParticipants = /* GraphQL */ `query ListParticipants(
  $filter: ModelParticipantFilterInput
  $limit: Int
  $nextToken: String
) {
  listParticipants(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      eventId
      id
      name
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListParticipantsQueryVariables,
  APITypes.ListParticipantsQuery
>;
export const listTodos = /* GraphQL */ `query ListTodos(
  $filter: ModelTodoFilterInput
  $limit: Int
  $nextToken: String
) {
  listTodos(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      content
      createdAt
      id
      owner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<APITypes.ListTodosQueryVariables, APITypes.ListTodosQuery>;
export const listUserProfiles = /* GraphQL */ `query ListUserProfiles(
  $filter: ModelUserProfileFilterInput
  $limit: Int
  $nextToken: String
) {
  listUserProfiles(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      createdAt
      email
      id
      profileOwner
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListUserProfilesQueryVariables,
  APITypes.ListUserProfilesQuery
>;
export const participantLandingPageDataFetcher = /* GraphQL */ `query ParticipantLandingPageDataFetcher($eventId: String!) {
  participantLandingPageDataFetcher(eventId: $eventId) {
    eventName
    organizerName
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ParticipantLandingPageDataFetcherQueryVariables,
  APITypes.ParticipantLandingPageDataFetcherQuery
>;
