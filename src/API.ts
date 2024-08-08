/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateFoundationInput = {
  id?: string | null,
  title: string,
  subheading: string,
  desc: string,
  image?: S3ObjectInput | null,
};

export type S3ObjectInput = {
  bucket: string,
  region: string,
  key: string,
};

export type ModelFoundationConditionInput = {
  title?: ModelStringInput | null,
  subheading?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  and?: Array< ModelFoundationConditionInput | null > | null,
  or?: Array< ModelFoundationConditionInput | null > | null,
  not?: ModelFoundationConditionInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Foundation = {
  __typename: "Foundation",
  id: string,
  title: string,
  subheading: string,
  desc: string,
  image?: S3Object | null,
  createdAt: string,
  updatedAt: string,
};

export type S3Object = {
  __typename: "S3Object",
  bucket: string,
  region: string,
  key: string,
};

export type UpdateFoundationInput = {
  id: string,
  title?: string | null,
  subheading?: string | null,
  desc?: string | null,
  image?: S3ObjectInput | null,
};

export type DeleteFoundationInput = {
  id: string,
};

export type ModelFoundationFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  subheading?: ModelStringInput | null,
  desc?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelFoundationFilterInput | null > | null,
  or?: Array< ModelFoundationFilterInput | null > | null,
  not?: ModelFoundationFilterInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelFoundationConnection = {
  __typename: "ModelFoundationConnection",
  items:  Array<Foundation | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionFoundationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  title?: ModelSubscriptionStringInput | null,
  subheading?: ModelSubscriptionStringInput | null,
  desc?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionFoundationFilterInput | null > | null,
  or?: Array< ModelSubscriptionFoundationFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type CreateFoundationMutationVariables = {
  input: CreateFoundationInput,
  condition?: ModelFoundationConditionInput | null,
};

export type CreateFoundationMutation = {
  createFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateFoundationMutationVariables = {
  input: UpdateFoundationInput,
  condition?: ModelFoundationConditionInput | null,
};

export type UpdateFoundationMutation = {
  updateFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteFoundationMutationVariables = {
  input: DeleteFoundationInput,
  condition?: ModelFoundationConditionInput | null,
};

export type DeleteFoundationMutation = {
  deleteFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetFoundationQueryVariables = {
  id: string,
};

export type GetFoundationQuery = {
  getFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListFoundationsQueryVariables = {
  filter?: ModelFoundationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListFoundationsQuery = {
  listFoundations?:  {
    __typename: "ModelFoundationConnection",
    items:  Array< {
      __typename: "Foundation",
      id: string,
      title: string,
      subheading: string,
      desc: string,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateFoundationSubscriptionVariables = {
  filter?: ModelSubscriptionFoundationFilterInput | null,
};

export type OnCreateFoundationSubscription = {
  onCreateFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateFoundationSubscriptionVariables = {
  filter?: ModelSubscriptionFoundationFilterInput | null,
};

export type OnUpdateFoundationSubscription = {
  onUpdateFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteFoundationSubscriptionVariables = {
  filter?: ModelSubscriptionFoundationFilterInput | null,
};

export type OnDeleteFoundationSubscription = {
  onDeleteFoundation?:  {
    __typename: "Foundation",
    id: string,
    title: string,
    subheading: string,
    desc: string,
    image?:  {
      __typename: "S3Object",
      bucket: string,
      region: string,
      key: string,
    } | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
