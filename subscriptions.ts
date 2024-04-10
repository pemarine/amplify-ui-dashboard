/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedSubscription<InputType, OutputType> = string & {
  __generatedSubscriptionInput: InputType;
  __generatedSubscriptionOutput: OutputType;
};

export const onCreateVessel = /* GraphQL */ `subscription OnCreateVessel($filter: ModelSubscriptionVesselFilterInput) {
  onCreateVessel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVesselSubscriptionVariables,
  APITypes.OnCreateVesselSubscription
>;
export const onUpdateVessel = /* GraphQL */ `subscription OnUpdateVessel($filter: ModelSubscriptionVesselFilterInput) {
  onUpdateVessel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVesselSubscriptionVariables,
  APITypes.OnUpdateVesselSubscription
>;
export const onDeleteVessel = /* GraphQL */ `subscription OnDeleteVessel($filter: ModelSubscriptionVesselFilterInput) {
  onDeleteVessel(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVesselSubscriptionVariables,
  APITypes.OnDeleteVesselSubscription
>;
export const onCreateVesselsAISHistory = /* GraphQL */ `subscription OnCreateVesselsAISHistory(
  $filter: ModelSubscriptionVesselsAISHistoryFilterInput
) {
  onCreateVesselsAISHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnCreateVesselsAISHistorySubscriptionVariables,
  APITypes.OnCreateVesselsAISHistorySubscription
>;
export const onUpdateVesselsAISHistory = /* GraphQL */ `subscription OnUpdateVesselsAISHistory(
  $filter: ModelSubscriptionVesselsAISHistoryFilterInput
) {
  onUpdateVesselsAISHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnUpdateVesselsAISHistorySubscriptionVariables,
  APITypes.OnUpdateVesselsAISHistorySubscription
>;
export const onDeleteVesselsAISHistory = /* GraphQL */ `subscription OnDeleteVesselsAISHistory(
  $filter: ModelSubscriptionVesselsAISHistoryFilterInput
) {
  onDeleteVesselsAISHistory(filter: $filter) {
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
` as GeneratedSubscription<
  APITypes.OnDeleteVesselsAISHistorySubscriptionVariables,
  APITypes.OnDeleteVesselsAISHistorySubscription
>;
