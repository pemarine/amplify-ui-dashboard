/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
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
    fleet
    ip
    outsideTemp
    Outside_Temp_LastDay
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
    En_Vent_Power
    En_Vent_Power_Percent
    HVAC_Power
    HVAC_Power_Percent
    Total_Power
    Saved_CO2_LastDay
    Saved_Fuel_LastDay
    Saved_Energy_LastDay
    Pumps_Power
    Pumps_Power_Percent
    HVAC_Avg_Power
    Energy_Last_Day
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
    fleet
    ip
    outsideTemp
    Outside_Temp_LastDay
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
    En_Vent_Power
    En_Vent_Power_Percent
    HVAC_Power
    HVAC_Power_Percent
    Total_Power
    Saved_CO2_LastDay
    Saved_Fuel_LastDay
    Saved_Energy_LastDay
    Pumps_Power
    Pumps_Power_Percent
    HVAC_Avg_Power
    Energy_Last_Day
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
    fleet
    ip
    outsideTemp
    Outside_Temp_LastDay
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
    En_Vent_Power
    En_Vent_Power_Percent
    HVAC_Power
    HVAC_Power_Percent
    Total_Power
    Saved_CO2_LastDay
    Saved_Fuel_LastDay
    Saved_Energy_LastDay
    Pumps_Power
    Pumps_Power_Percent
    HVAC_Avg_Power
    Energy_Last_Day
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
export const createVesselsAISHistory = /* GraphQL */ `mutation CreateVesselsAISHistory(
  $input: CreateVesselsAISHistoryInput!
  $condition: ModelVesselsAISHistoryConditionInput
) {
  createVesselsAISHistory(input: $input, condition: $condition) {
    id
    imo
    vessel_name
    timestamp
    latitude
    longitude
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.CreateVesselsAISHistoryMutationVariables,
  APITypes.CreateVesselsAISHistoryMutation
>;
export const updateVesselsAISHistory = /* GraphQL */ `mutation UpdateVesselsAISHistory(
  $input: UpdateVesselsAISHistoryInput!
  $condition: ModelVesselsAISHistoryConditionInput
) {
  updateVesselsAISHistory(input: $input, condition: $condition) {
    id
    imo
    vessel_name
    timestamp
    latitude
    longitude
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.UpdateVesselsAISHistoryMutationVariables,
  APITypes.UpdateVesselsAISHistoryMutation
>;
export const deleteVesselsAISHistory = /* GraphQL */ `mutation DeleteVesselsAISHistory(
  $input: DeleteVesselsAISHistoryInput!
  $condition: ModelVesselsAISHistoryConditionInput
) {
  deleteVesselsAISHistory(input: $input, condition: $condition) {
    id
    imo
    vessel_name
    timestamp
    latitude
    longitude
    createdAt
    updatedAt
    _version
    _deleted
    _lastChangedAt
    __typename
  }
}
` as GeneratedMutation<
  APITypes.DeleteVesselsAISHistoryMutationVariables,
  APITypes.DeleteVesselsAISHistoryMutation
>;
