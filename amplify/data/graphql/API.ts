/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type Event = {
  __typename: "Event",
  createdAt: string,
  id: string,
  name: string,
  owner?: string | null,
  participants?: ModelParticipantConnection | null,
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

export type DeleteEventInput = {
  id: string,
};

export type DeleteParticipantInput = {
  id: string,
};

export type DeleteTodoInput = {
  id: string,
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

export type UpdateTodoInput = {
  content?: string | null,
  id: string,
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

export type ModelSubscriptionTodoFilterInput = {
  and?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  content?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  id?: ModelSubscriptionIDInput | null,
  or?: Array< ModelSubscriptionTodoFilterInput | null > | null,
  owner?: ModelStringInput | null,
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
