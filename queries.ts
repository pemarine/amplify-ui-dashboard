/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

import * as APITypes from "./src/API";
type GeneratedQuery<InputType, OutputType> = string & {
  __generatedQueryInput: InputType;
  __generatedQueryOutput: OutputType;
};

export const getVessel = /* GraphQL */ `query GetVessel($id: ID!) {
  getVessel(id: $id) {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncVesselsQueryVariables,
  APITypes.SyncVesselsQuery
>;
export const getVesselsAISHistory = /* GraphQL */ `query GetVesselsAISHistory($id: ID!) {
  getVesselsAISHistory(id: $id) {
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
` as GeneratedQuery<
  APITypes.GetVesselsAISHistoryQueryVariables,
  APITypes.GetVesselsAISHistoryQuery
>;
export const listVesselsAISHistories = /* GraphQL */ `query ListVesselsAISHistories(
  $filter: ModelVesselsAISHistoryFilterInput
  $limit: Int
  $nextToken: String
) {
  listVesselsAISHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.ListVesselsAISHistoriesQueryVariables,
  APITypes.ListVesselsAISHistoriesQuery
>;
export const syncVesselsAISHistories = /* GraphQL */ `query SyncVesselsAISHistories(
  $filter: ModelVesselsAISHistoryFilterInput
  $limit: Int
  $nextToken: String
  $lastSync: AWSTimestamp
) {
  syncVesselsAISHistories(
    filter: $filter
    limit: $limit
    nextToken: $nextToken
    lastSync: $lastSync
  ) {
    items {
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
    nextToken
    startedAt
    __typename
  }
}
` as GeneratedQuery<
  APITypes.SyncVesselsAISHistoriesQueryVariables,
  APITypes.SyncVesselsAISHistoriesQuery
>;
