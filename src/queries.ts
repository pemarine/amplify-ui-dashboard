/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getVessel = /* GraphQL */ `
  query GetVessel($id: ID!) {
    getVessel(id: $id) {
      id
      IMO
      MMSI
      SHIPNAME
      FLAG
      MARKET
      LAST_PORT
      CURRENT_PORT
      NEXT_PORT
      DISTANCE_TO_GO
      DISTANCE_TRAVELLED
      DESTINATION
      SPEED
      AVG_SPEED
      MAX_SPEED
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      __typename
    }
  }
`;
export const listVessels = /* GraphQL */ `
  query ListVessels(
    $filter: ModelVesselFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVessels(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        IMO
        MMSI
        SHIPNAME
        FLAG
        MARKET
        LAST_PORT
        CURRENT_PORT
        NEXT_PORT
        DISTANCE_TO_GO
        DISTANCE_TRAVELLED
        DESTINATION
        SPEED
        AVG_SPEED
        MAX_SPEED
        createdAt
        updatedAt
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
`;
export const customListVessels = /* GraphQL */ `
  query customListVessels {
    listVessels(filter: {}) {
      items {
        FLAG
        IMO
        SHIPNAME
        MMSI
        LAT
        LON
        
      }
    }
  }
`;
export const syncVessels = /* GraphQL */ `
  query SyncVessels(
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
        IMO
        MMSI
        SHIPNAME
        FLAG
        MARKET
        LAST_PORT
        CURRENT_PORT
        NEXT_PORT
        DISTANCE_TO_GO
        DISTANCE_TRAVELLED
        DESTINATION
        SPEED
        AVG_SPEED
        MAX_SPEED
        createdAt
        updatedAt
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
`;
