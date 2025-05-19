/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateEvent = /* GraphQL */ `subscription OnCreateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onCreateEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateEventSubscriptionVariables,
  APITypes.OnCreateEventSubscription
>;
export const onCreateParticipant = /* GraphQL */ `subscription OnCreateParticipant(
  $filter: ModelSubscriptionParticipantFilterInput
  $owner: String
) {
  onCreateParticipant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParticipantSubscriptionVariables,
  APITypes.OnCreateParticipantSubscription
>;
export const onCreateParticipantInviteResponse = /* GraphQL */ `subscription OnCreateParticipantInviteResponse(
  $filter: ModelSubscriptionParticipantInviteResponseFilterInput
  $owner: String
) {
  onCreateParticipantInviteResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParticipantInviteResponseSubscriptionVariables,
  APITypes.OnCreateParticipantInviteResponseSubscription
>;
export const onCreateParticipantPairingGeneration = /* GraphQL */ `subscription OnCreateParticipantPairingGeneration(
  $filter: ModelSubscriptionParticipantPairingGenerationFilterInput
  $owner: String
) {
  onCreateParticipantPairingGeneration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParticipantPairingGenerationSubscriptionVariables,
  APITypes.OnCreateParticipantPairingGenerationSubscription
>;
export const onCreateParticipantPairingGenerationPair = /* GraphQL */ `subscription OnCreateParticipantPairingGenerationPair(
  $filter: ModelSubscriptionParticipantPairingGenerationPairFilterInput
  $owner: String
) {
  onCreateParticipantPairingGenerationPair(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnCreateParticipantPairingGenerationPairSubscriptionVariables,
  APITypes.OnCreateParticipantPairingGenerationPairSubscription
>;
export const onCreateTodo = /* GraphQL */ `subscription OnCreateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onCreateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateTodoSubscriptionVariables,
  APITypes.OnCreateTodoSubscription
>;
export const onCreateUserProfile = /* GraphQL */ `subscription OnCreateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onCreateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateUserProfileSubscriptionVariables,
  APITypes.OnCreateUserProfileSubscription
>;
export const onDeleteEvent = /* GraphQL */ `subscription OnDeleteEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onDeleteEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteEventSubscriptionVariables,
  APITypes.OnDeleteEventSubscription
>;
export const onDeleteParticipant = /* GraphQL */ `subscription OnDeleteParticipant(
  $filter: ModelSubscriptionParticipantFilterInput
  $owner: String
) {
  onDeleteParticipant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParticipantSubscriptionVariables,
  APITypes.OnDeleteParticipantSubscription
>;
export const onDeleteParticipantInviteResponse = /* GraphQL */ `subscription OnDeleteParticipantInviteResponse(
  $filter: ModelSubscriptionParticipantInviteResponseFilterInput
  $owner: String
) {
  onDeleteParticipantInviteResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParticipantInviteResponseSubscriptionVariables,
  APITypes.OnDeleteParticipantInviteResponseSubscription
>;
export const onDeleteParticipantPairingGeneration = /* GraphQL */ `subscription OnDeleteParticipantPairingGeneration(
  $filter: ModelSubscriptionParticipantPairingGenerationFilterInput
  $owner: String
) {
  onDeleteParticipantPairingGeneration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParticipantPairingGenerationSubscriptionVariables,
  APITypes.OnDeleteParticipantPairingGenerationSubscription
>;
export const onDeleteParticipantPairingGenerationPair = /* GraphQL */ `subscription OnDeleteParticipantPairingGenerationPair(
  $filter: ModelSubscriptionParticipantPairingGenerationPairFilterInput
  $owner: String
) {
  onDeleteParticipantPairingGenerationPair(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteParticipantPairingGenerationPairSubscriptionVariables,
  APITypes.OnDeleteParticipantPairingGenerationPairSubscription
>;
export const onDeleteTodo = /* GraphQL */ `subscription OnDeleteTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onDeleteTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteTodoSubscriptionVariables,
  APITypes.OnDeleteTodoSubscription
>;
export const onDeleteUserProfile = /* GraphQL */ `subscription OnDeleteUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onDeleteUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteUserProfileSubscriptionVariables,
  APITypes.OnDeleteUserProfileSubscription
>;
export const onUpdateEvent = /* GraphQL */ `subscription OnUpdateEvent(
  $filter: ModelSubscriptionEventFilterInput
  $owner: String
) {
  onUpdateEvent(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateEventSubscriptionVariables,
  APITypes.OnUpdateEventSubscription
>;
export const onUpdateParticipant = /* GraphQL */ `subscription OnUpdateParticipant(
  $filter: ModelSubscriptionParticipantFilterInput
  $owner: String
) {
  onUpdateParticipant(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParticipantSubscriptionVariables,
  APITypes.OnUpdateParticipantSubscription
>;
export const onUpdateParticipantInviteResponse = /* GraphQL */ `subscription OnUpdateParticipantInviteResponse(
  $filter: ModelSubscriptionParticipantInviteResponseFilterInput
  $owner: String
) {
  onUpdateParticipantInviteResponse(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParticipantInviteResponseSubscriptionVariables,
  APITypes.OnUpdateParticipantInviteResponseSubscription
>;
export const onUpdateParticipantPairingGeneration = /* GraphQL */ `subscription OnUpdateParticipantPairingGeneration(
  $filter: ModelSubscriptionParticipantPairingGenerationFilterInput
  $owner: String
) {
  onUpdateParticipantPairingGeneration(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParticipantPairingGenerationSubscriptionVariables,
  APITypes.OnUpdateParticipantPairingGenerationSubscription
>;
export const onUpdateParticipantPairingGenerationPair = /* GraphQL */ `subscription OnUpdateParticipantPairingGenerationPair(
  $filter: ModelSubscriptionParticipantPairingGenerationPairFilterInput
  $owner: String
) {
  onUpdateParticipantPairingGenerationPair(filter: $filter, owner: $owner) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateParticipantPairingGenerationPairSubscriptionVariables,
  APITypes.OnUpdateParticipantPairingGenerationPairSubscription
>;
export const onUpdateTodo = /* GraphQL */ `subscription OnUpdateTodo(
  $filter: ModelSubscriptionTodoFilterInput
  $owner: String
) {
  onUpdateTodo(filter: $filter, owner: $owner) {
    content
    createdAt
    id
    owner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateTodoSubscriptionVariables,
  APITypes.OnUpdateTodoSubscription
>;
export const onUpdateUserProfile = /* GraphQL */ `subscription OnUpdateUserProfile(
  $filter: ModelSubscriptionUserProfileFilterInput
  $profileOwner: String
) {
  onUpdateUserProfile(filter: $filter, profileOwner: $profileOwner) {
    createdAt
    email
    id
    profileOwner
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateUserProfileSubscriptionVariables,
  APITypes.OnUpdateUserProfileSubscription
>;
