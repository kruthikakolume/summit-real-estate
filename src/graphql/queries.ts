/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getFoundation = /* GraphQL */ `query GetFoundation($id: ID!) {
  getFoundation(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetFoundationQueryVariables,
  APITypes.GetFoundationQuery
>;
export const listFoundations = /* GraphQL */ `query ListFoundations(
  $filter: ModelFoundationFilterInput
  $limit: Int
  $nextToken: String
) {
  listFoundations(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      subheading
      desc
      createdAt
      updatedAt
      __typename
    }
    nextToken
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListFoundationsQueryVariables,
  APITypes.ListFoundationsQuery
>;
