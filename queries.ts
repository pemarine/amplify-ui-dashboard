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
      TYPE_NAME
      LAT
      LON
      LAST_PORT
      CURRENT_PORT
      NEXT_PORT
      NEXT_PORT_NAME
      DISTANCE_TO_GO
      DUSTANCE_TRAVELLED
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
        TYPE_NAME
        LAT
        LON
        LAST_PORT
        CURRENT_PORT
        NEXT_PORT
        NEXT_PORT_NAME
        DISTANCE_TO_GO
        DUSTANCE_TRAVELLED
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
        TYPE_NAME
        LAT
        LON
        LAST_PORT
        CURRENT_PORT
        NEXT_PORT
        NEXT_PORT_NAME
        DISTANCE_TO_GO
        DUSTANCE_TRAVELLED
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
