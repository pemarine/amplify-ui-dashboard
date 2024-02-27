/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "../API";
type GeneratedMutation<InputType, OutputType> = string & {
  __generatedMutationInput: InputType;
  __generatedMutationOutput: OutputType;
};

export const createVessel = /* GraphQL */ `mutation CreateVessel(
  $input: CreateVesselInput!
  $condition: ModelVesselConditionInput
) {
  createVessel(input: $input, condition: $condition) {
    id
    clientID
    outsideTemp
    HVAC_P_status
    En_Vent_P_status
    Pumps_P_status
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
` as GeneratedMutation<
  APITypes.CreateVesselMutationVariables,
  APITypes.CreateVesselMutation
>;
export const updateVessel = /* GraphQL */ `mutation UpdateVessel(
  $input: UpdateVesselInput!
  $condition: ModelVesselConditionInput
) {
  updateVessel(input: $input, condition: $condition) {
    id
    clientID
    outsideTemp
    HVAC_P_status
    En_Vent_P_status
    Pumps_P_status
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
` as GeneratedMutation<
  APITypes.UpdateVesselMutationVariables,
  APITypes.UpdateVesselMutation
>;
export const deleteVessel = /* GraphQL */ `mutation DeleteVessel(
  $input: DeleteVesselInput!
  $condition: ModelVesselConditionInput
) {
  deleteVessel(input: $input, condition: $condition) {
    id
    clientID
    outsideTemp
    HVAC_P_status
    En_Vent_P_status
    Pumps_P_status
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
` as GeneratedMutation<
  APITypes.DeleteVesselMutationVariables,
  APITypes.DeleteVesselMutation
>;
