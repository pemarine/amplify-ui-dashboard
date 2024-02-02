/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createVessel = /* GraphQL */ `
  mutation CreateVessel(
    $input: CreateVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    createVessel(input: $input, condition: $condition) {
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
export const updateVessel = /* GraphQL */ `
  mutation UpdateVessel(
    $input: UpdateVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    updateVessel(input: $input, condition: $condition) {
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
export const deleteVessel = /* GraphQL */ `
  mutation DeleteVessel(
    $input: DeleteVesselInput!
    $condition: ModelVesselConditionInput
  ) {
    deleteVessel(input: $input, condition: $condition) {
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
