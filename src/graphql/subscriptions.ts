/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateFoundation = /* GraphQL */ `subscription OnCreateFoundation(
  $filter: ModelSubscriptionFoundationFilterInput
) {
  onCreateFoundation(filter: $filter) {
    id
    title
    subheading
    desc
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnCreateFoundationSubscriptionVariables,
  APITypes.OnCreateFoundationSubscription
>;
export const onUpdateFoundation = /* GraphQL */ `subscription OnUpdateFoundation(
  $filter: ModelSubscriptionFoundationFilterInput
) {
  onUpdateFoundation(filter: $filter) {
    id
    title
    subheading
    desc
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnUpdateFoundationSubscriptionVariables,
  APITypes.OnUpdateFoundationSubscription
>;
export const onDeleteFoundation = /* GraphQL */ `subscription OnDeleteFoundation(
  $filter: ModelSubscriptionFoundationFilterInput
) {
  onDeleteFoundation(filter: $filter) {
    id
    title
    subheading
    desc
    image {
      bucket
      region
      key
      __typename
    }
    createdAt
    updatedAt
    __typename
  }
}
` as GeneratedSubscription<
  APITypes.OnDeleteFoundationSubscriptionVariables,
  APITypes.OnDeleteFoundationSubscription
>;
