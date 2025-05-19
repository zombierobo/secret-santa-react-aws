/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createEvent = /* GraphQL */ `mutation CreateEvent(
  $condition: ModelEventConditionInput
  $input: CreateEventInput!
) {
  createEvent(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
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
` as GeneratedMutation<
  APITypes.CreateEventMutationVariables,
  APITypes.CreateEventMutation
>;
export const createParticipant = /* GraphQL */ `mutation CreateParticipant(
  $condition: ModelParticipantConditionInput
  $input: CreateParticipantInput!
) {
  createParticipant(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateParticipantMutationVariables,
  APITypes.CreateParticipantMutation
>;
export const createParticipantInviteResponse = /* GraphQL */ `mutation CreateParticipantInviteResponse(
  $condition: ModelParticipantInviteResponseConditionInput
  $input: CreateParticipantInviteResponseInput!
) {
  createParticipantInviteResponse(condition: $condition, input: $input) {
    createdAt
    email
    eventId
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateParticipantInviteResponseMutationVariables,
  APITypes.CreateParticipantInviteResponseMutation
>;
export const createParticipantPairingGeneration = /* GraphQL */ `mutation CreateParticipantPairingGeneration(
  $condition: ModelParticipantPairingGenerationConditionInput
  $input: CreateParticipantPairingGenerationInput!
) {
  createParticipantPairingGeneration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.CreateParticipantPairingGenerationMutationVariables,
  APITypes.CreateParticipantPairingGenerationMutation
>;
export const createParticipantPairingGenerationPair = /* GraphQL */ `mutation CreateParticipantPairingGenerationPair(
  $condition: ModelParticipantPairingGenerationPairConditionInput
  $input: CreateParticipantPairingGenerationPairInput!
) {
  createParticipantPairingGenerationPair(condition: $condition, input: $input) {
    createdAt
    gifterEmail
    gifterName
    id
    owner
    participantPairingGeneration {
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
` as GeneratedMutation<
  APITypes.CreateParticipantPairingGenerationPairMutationVariables,
  APITypes.CreateParticipantPairingGenerationPairMutation
>;
export const createTodo = /* GraphQL */ `mutation CreateTodo(
  $condition: ModelTodoConditionInput
  $input: CreateTodoInput!
) {
  createTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateTodoMutationVariables,
  APITypes.CreateTodoMutation
>;
export const createUserProfile = /* GraphQL */ `mutation CreateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: CreateUserProfileInput!
) {
  createUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateUserProfileMutationVariables,
  APITypes.CreateUserProfileMutation
>;
export const deleteEvent = /* GraphQL */ `mutation DeleteEvent(
  $condition: ModelEventConditionInput
  $input: DeleteEventInput!
) {
  deleteEvent(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
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
` as GeneratedMutation<
  APITypes.DeleteEventMutationVariables,
  APITypes.DeleteEventMutation
>;
export const deleteParticipant = /* GraphQL */ `mutation DeleteParticipant(
  $condition: ModelParticipantConditionInput
  $input: DeleteParticipantInput!
) {
  deleteParticipant(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteParticipantMutationVariables,
  APITypes.DeleteParticipantMutation
>;
export const deleteParticipantInviteResponse = /* GraphQL */ `mutation DeleteParticipantInviteResponse(
  $condition: ModelParticipantInviteResponseConditionInput
  $input: DeleteParticipantInviteResponseInput!
) {
  deleteParticipantInviteResponse(condition: $condition, input: $input) {
    createdAt
    email
    eventId
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteParticipantInviteResponseMutationVariables,
  APITypes.DeleteParticipantInviteResponseMutation
>;
export const deleteParticipantPairingGeneration = /* GraphQL */ `mutation DeleteParticipantPairingGeneration(
  $condition: ModelParticipantPairingGenerationConditionInput
  $input: DeleteParticipantPairingGenerationInput!
) {
  deleteParticipantPairingGeneration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.DeleteParticipantPairingGenerationMutationVariables,
  APITypes.DeleteParticipantPairingGenerationMutation
>;
export const deleteParticipantPairingGenerationPair = /* GraphQL */ `mutation DeleteParticipantPairingGenerationPair(
  $condition: ModelParticipantPairingGenerationPairConditionInput
  $input: DeleteParticipantPairingGenerationPairInput!
) {
  deleteParticipantPairingGenerationPair(condition: $condition, input: $input) {
    createdAt
    gifterEmail
    gifterName
    id
    owner
    participantPairingGeneration {
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
` as GeneratedMutation<
  APITypes.DeleteParticipantPairingGenerationPairMutationVariables,
  APITypes.DeleteParticipantPairingGenerationPairMutation
>;
export const deleteTodo = /* GraphQL */ `mutation DeleteTodo(
  $condition: ModelTodoConditionInput
  $input: DeleteTodoInput!
) {
  deleteTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteTodoMutationVariables,
  APITypes.DeleteTodoMutation
>;
export const deleteUserProfile = /* GraphQL */ `mutation DeleteUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: DeleteUserProfileInput!
) {
  deleteUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteUserProfileMutationVariables,
  APITypes.DeleteUserProfileMutation
>;
export const generateParticipantPairingMutation = /* GraphQL */ `mutation GenerateParticipantPairingMutation($eventId: String!) {
  generateParticipantPairingMutation(eventId: $eventId) {
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.GenerateParticipantPairingMutationMutationVariables,
  APITypes.GenerateParticipantPairingMutationMutation
>;
export const participantInviteResponseMutation = /* GraphQL */ `mutation ParticipantInviteResponseMutation(
  $email: String!
  $eventId: String!
  $name: String!
) {
  participantInviteResponseMutation(
    email: $email
    eventId: $eventId
    name: $name
  ) {
    success
    __typename
  }
}
` as GeneratedMutation<
  APITypes.ParticipantInviteResponseMutationMutationVariables,
  APITypes.ParticipantInviteResponseMutationMutation
>;
export const updateEvent = /* GraphQL */ `mutation UpdateEvent(
  $condition: ModelEventConditionInput
  $input: UpdateEventInput!
) {
  updateEvent(condition: $condition, input: $input) {
    createdAt
    id
    name
    owner
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
` as GeneratedMutation<
  APITypes.UpdateEventMutationVariables,
  APITypes.UpdateEventMutation
>;
export const updateParticipant = /* GraphQL */ `mutation UpdateParticipant(
  $condition: ModelParticipantConditionInput
  $input: UpdateParticipantInput!
) {
  updateParticipant(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateParticipantMutationVariables,
  APITypes.UpdateParticipantMutation
>;
export const updateParticipantInviteResponse = /* GraphQL */ `mutation UpdateParticipantInviteResponse(
  $condition: ModelParticipantInviteResponseConditionInput
  $input: UpdateParticipantInviteResponseInput!
) {
  updateParticipantInviteResponse(condition: $condition, input: $input) {
    createdAt
    email
    eventId
    id
    name
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateParticipantInviteResponseMutationVariables,
  APITypes.UpdateParticipantInviteResponseMutation
>;
export const updateParticipantPairingGeneration = /* GraphQL */ `mutation UpdateParticipantPairingGeneration(
  $condition: ModelParticipantPairingGenerationConditionInput
  $input: UpdateParticipantPairingGenerationInput!
) {
  updateParticipantPairingGeneration(condition: $condition, input: $input) {
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
` as GeneratedMutation<
  APITypes.UpdateParticipantPairingGenerationMutationVariables,
  APITypes.UpdateParticipantPairingGenerationMutation
>;
export const updateParticipantPairingGenerationPair = /* GraphQL */ `mutation UpdateParticipantPairingGenerationPair(
  $condition: ModelParticipantPairingGenerationPairConditionInput
  $input: UpdateParticipantPairingGenerationPairInput!
) {
  updateParticipantPairingGenerationPair(condition: $condition, input: $input) {
    createdAt
    gifterEmail
    gifterName
    id
    owner
    participantPairingGeneration {
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
` as GeneratedMutation<
  APITypes.UpdateParticipantPairingGenerationPairMutationVariables,
  APITypes.UpdateParticipantPairingGenerationPairMutation
>;
export const updateTodo = /* GraphQL */ `mutation UpdateTodo(
  $condition: ModelTodoConditionInput
  $input: UpdateTodoInput!
) {
  updateTodo(condition: $condition, input: $input) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateTodoMutationVariables,
  APITypes.UpdateTodoMutation
>;
export const updateUserProfile = /* GraphQL */ `mutation UpdateUserProfile(
  $condition: ModelUserProfileConditionInput
  $input: UpdateUserProfileInput!
) {
  updateUserProfile(condition: $condition, input: $input) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateUserProfileMutationVariables,
  APITypes.UpdateUserProfileMutation
>;
