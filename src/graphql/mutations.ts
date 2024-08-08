/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createFoundation = /* GraphQL */ `mutation CreateFoundation(
  $input: CreateFoundationInput!
  $condition: ModelFoundationConditionInput
) {
  createFoundation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.CreateFoundationMutationVariables,
  APITypes.CreateFoundationMutation
>;
export const updateFoundation = /* GraphQL */ `mutation UpdateFoundation(
  $input: UpdateFoundationInput!
  $condition: ModelFoundationConditionInput
) {
  updateFoundation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.UpdateFoundationMutationVariables,
  APITypes.UpdateFoundationMutation
>;
export const deleteFoundation = /* GraphQL */ `mutation DeleteFoundation(
  $input: DeleteFoundationInput!
  $condition: ModelFoundationConditionInput
) {
  deleteFoundation(input: $input, condition: $condition) {
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
` as GeneratedMutation<
  APITypes.DeleteFoundationMutationVariables,
  APITypes.DeleteFoundationMutation
>;
