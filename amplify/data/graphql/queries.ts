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
