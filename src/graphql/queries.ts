/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getVessel = /* GraphQL */ `query GetVessel($id: ID!) {
  getVessel(id: $id) {
    id
    clientID
    outsideTemp
    HVAC_P_status
    IMO
    MMSI
    SHIPNAME
    FLAG
    MARKET
    TYPE_NAME
    LAT
    LON
    LAST_PORT
    CURRENT_PORT
    NEXT_PORT
    NEXT_PORT_NAME
    DISTANCE_TO_GO
    DISTANCE_TRAVELLED
    DESTINATION
    SPEED
    AVG_SPEED
    MAX_SPEED
    updatedAt
    createdAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedQuery<APITypes.GetVesselQueryVariables, APITypes.GetVesselQuery>;
export const listVessels = /* GraphQL */ `query ListVessels(
  $filter: ModelVesselFilterInput
  $limit: Int
  $nextToken: String
) {
  listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      clientID
      outsideTemp
      HVAC_P_status
      IMO
      MMSI
      SHIPNAME
      FLAG
      MARKET
      TYPE_NAME
      LAT
      LON
      LAST_PORT
      CURRENT_PORT
      NEXT_PORT
      NEXT_PORT_NAME
      DISTANCE_TO_GO
      DISTANCE_TRAVELLED
      DESTINATION
      SPEED
      AVG_SPEED
      MAX_SPEED
      updatedAt
      createdAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVesselsQueryVariables,
  APITypes.ListVesselsQuery
>;
export const syncVessels = /* GraphQL */ `query SyncVessels(
  $filter: ModelVesselFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncVessels(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
      id
      clientID
      outsideTemp
      HVAC_P_status
      IMO
      MMSI
      SHIPNAME
      FLAG
      MARKET
      TYPE_NAME
      LAT
      LON
      LAST_PORT
      CURRENT_PORT
      NEXT_PORT
      NEXT_PORT_NAME
      DISTANCE_TO_GO
      DISTANCE_TRAVELLED
      DESTINATION
      SPEED
      AVG_SPEED
      MAX_SPEED
      updatedAt
      createdAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncVesselsQueryVariables,
  APITypes.SyncVesselsQuery
>;
