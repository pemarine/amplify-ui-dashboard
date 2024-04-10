/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateVesselInput = {
  id?: string | null,
  clientID?: string | null,
  fleet?: string | null,
  ip?: string | null,
  outsideTemp?: string | null,
  Outside_Temp_LastDay?: string | null,
  HVAC_P_status?: string | null,
  En_Vent_P_status?: string | null,
  Pumps_P_status?: string | null,
  IMO?: string | null,
  MMSI?: string | null,
  SHIPNAME?: string | null,
  FLAG?: string | null,
  MARKET?: string | null,
  TYPE_NAME?: string | null,
  LAT?: string | null,
  LON?: string | null,
  LAST_PORT?: string | null,
  CURRENT_PORT?: string | null,
  NEXT_PORT?: string | null,
  NEXT_PORT_NAME?: string | null,
  DISTANCE_TO_GO?: string | null,
  DISTANCE_TRAVELLED?: string | null,
  DESTINATION?: string | null,
  SPEED?: string | null,
  AVG_SPEED?: string | null,
  MAX_SPEED?: string | null,
  updatedAt?: string | null,
  En_Vent_Power?: string | null,
  En_Vent_Power_Percent?: string | null,
  HVAC_Power?: string | null,
  HVAC_Power_Percent?: string | null,
  Total_Power?: string | null,
  Saved_CO2_LastDay?: string | null,
  Saved_Fuel_LastDay?: string | null,
  Saved_Energy_LastDay?: string | null,
  Pumps_Power?: string | null,
  Pumps_Power_Percent?: string | null,
  HVAC_Avg_Power?: string | null,
  Energy_Last_Day?: string | null,
  _version?: number | null,
};

export type ModelVesselConditionInput = {
  clientID?: ModelStringInput | null,
  fleet?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  outsideTemp?: ModelStringInput | null,
  Outside_Temp_LastDay?: ModelStringInput | null,
  HVAC_P_status?: ModelStringInput | null,
  En_Vent_P_status?: ModelStringInput | null,
  Pumps_P_status?: ModelStringInput | null,
  IMO?: ModelStringInput | null,
  MMSI?: ModelStringInput | null,
  SHIPNAME?: ModelStringInput | null,
  FLAG?: ModelStringInput | null,
  MARKET?: ModelStringInput | null,
  TYPE_NAME?: ModelStringInput | null,
  LAT?: ModelStringInput | null,
  LON?: ModelStringInput | null,
  LAST_PORT?: ModelStringInput | null,
  CURRENT_PORT?: ModelStringInput | null,
  NEXT_PORT?: ModelStringInput | null,
  NEXT_PORT_NAME?: ModelStringInput | null,
  DISTANCE_TO_GO?: ModelStringInput | null,
  DISTANCE_TRAVELLED?: ModelStringInput | null,
  DESTINATION?: ModelStringInput | null,
  SPEED?: ModelStringInput | null,
  AVG_SPEED?: ModelStringInput | null,
  MAX_SPEED?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  En_Vent_Power?: ModelStringInput | null,
  En_Vent_Power_Percent?: ModelStringInput | null,
  HVAC_Power?: ModelStringInput | null,
  HVAC_Power_Percent?: ModelStringInput | null,
  Total_Power?: ModelStringInput | null,
  Saved_CO2_LastDay?: ModelStringInput | null,
  Saved_Fuel_LastDay?: ModelStringInput | null,
  Saved_Energy_LastDay?: ModelStringInput | null,
  Pumps_Power?: ModelStringInput | null,
  Pumps_Power_Percent?: ModelStringInput | null,
  HVAC_Avg_Power?: ModelStringInput | null,
  Energy_Last_Day?: ModelStringInput | null,
  and?: Array< ModelVesselConditionInput | null > | null,
  or?: Array< ModelVesselConditionInput | null > | null,
  not?: ModelVesselConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
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

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type Vessel = {
  __typename: "Vessel",
  id: string,
  clientID?: string | null,
  fleet?: string | null,
  ip?: string | null,
  outsideTemp?: string | null,
  Outside_Temp_LastDay?: string | null,
  HVAC_P_status?: string | null,
  En_Vent_P_status?: string | null,
  Pumps_P_status?: string | null,
  IMO?: string | null,
  MMSI?: string | null,
  SHIPNAME?: string | null,
  FLAG?: string | null,
  MARKET?: string | null,
  TYPE_NAME?: string | null,
  LAT?: string | null,
  LON?: string | null,
  LAST_PORT?: string | null,
  CURRENT_PORT?: string | null,
  NEXT_PORT?: string | null,
  NEXT_PORT_NAME?: string | null,
  DISTANCE_TO_GO?: string | null,
  DISTANCE_TRAVELLED?: string | null,
  DESTINATION?: string | null,
  SPEED?: string | null,
  AVG_SPEED?: string | null,
  MAX_SPEED?: string | null,
  updatedAt?: string | null,
  En_Vent_Power?: string | null,
  En_Vent_Power_Percent?: string | null,
  HVAC_Power?: string | null,
  HVAC_Power_Percent?: string | null,
  Total_Power?: string | null,
  Saved_CO2_LastDay?: string | null,
  Saved_Fuel_LastDay?: string | null,
  Saved_Energy_LastDay?: string | null,
  Pumps_Power?: string | null,
  Pumps_Power_Percent?: string | null,
  HVAC_Avg_Power?: string | null,
  Energy_Last_Day?: string | null,
  createdAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVesselInput = {
  id: string,
  clientID?: string | null,
  fleet?: string | null,
  ip?: string | null,
  outsideTemp?: string | null,
  Outside_Temp_LastDay?: string | null,
  HVAC_P_status?: string | null,
  En_Vent_P_status?: string | null,
  Pumps_P_status?: string | null,
  IMO?: string | null,
  MMSI?: string | null,
  SHIPNAME?: string | null,
  FLAG?: string | null,
  MARKET?: string | null,
  TYPE_NAME?: string | null,
  LAT?: string | null,
  LON?: string | null,
  LAST_PORT?: string | null,
  CURRENT_PORT?: string | null,
  NEXT_PORT?: string | null,
  NEXT_PORT_NAME?: string | null,
  DISTANCE_TO_GO?: string | null,
  DISTANCE_TRAVELLED?: string | null,
  DESTINATION?: string | null,
  SPEED?: string | null,
  AVG_SPEED?: string | null,
  MAX_SPEED?: string | null,
  updatedAt?: string | null,
  En_Vent_Power?: string | null,
  En_Vent_Power_Percent?: string | null,
  HVAC_Power?: string | null,
  HVAC_Power_Percent?: string | null,
  Total_Power?: string | null,
  Saved_CO2_LastDay?: string | null,
  Saved_Fuel_LastDay?: string | null,
  Saved_Energy_LastDay?: string | null,
  Pumps_Power?: string | null,
  Pumps_Power_Percent?: string | null,
  HVAC_Avg_Power?: string | null,
  Energy_Last_Day?: string | null,
  _version?: number | null,
};

export type DeleteVesselInput = {
  id: string,
  _version?: number | null,
};

export type CreateVesselsAISHistoryInput = {
  id?: string | null,
  imo?: string | null,
  vessel_name?: string | null,
  timestamp?: string | null,
  latitude?: string | null,
  longitude?: string | null,
  _version?: number | null,
};

export type ModelVesselsAISHistoryConditionInput = {
  imo?: ModelStringInput | null,
  vessel_name?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  and?: Array< ModelVesselsAISHistoryConditionInput | null > | null,
  or?: Array< ModelVesselsAISHistoryConditionInput | null > | null,
  not?: ModelVesselsAISHistoryConditionInput | null,
  _deleted?: ModelBooleanInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
};

export type VesselsAISHistory = {
  __typename: "VesselsAISHistory",
  id: string,
  imo?: string | null,
  vessel_name?: string | null,
  timestamp?: string | null,
  latitude?: string | null,
  longitude?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateVesselsAISHistoryInput = {
  id: string,
  imo?: string | null,
  vessel_name?: string | null,
  timestamp?: string | null,
  latitude?: string | null,
  longitude?: string | null,
  _version?: number | null,
};

export type DeleteVesselsAISHistoryInput = {
  id: string,
  _version?: number | null,
};

export type ModelVesselFilterInput = {
  id?: ModelIDInput | null,
  clientID?: ModelStringInput | null,
  fleet?: ModelStringInput | null,
  ip?: ModelStringInput | null,
  outsideTemp?: ModelStringInput | null,
  Outside_Temp_LastDay?: ModelStringInput | null,
  HVAC_P_status?: ModelStringInput | null,
  En_Vent_P_status?: ModelStringInput | null,
  Pumps_P_status?: ModelStringInput | null,
  IMO?: ModelStringInput | null,
  MMSI?: ModelStringInput | null,
  SHIPNAME?: ModelStringInput | null,
  FLAG?: ModelStringInput | null,
  MARKET?: ModelStringInput | null,
  TYPE_NAME?: ModelStringInput | null,
  LAT?: ModelStringInput | null,
  LON?: ModelStringInput | null,
  LAST_PORT?: ModelStringInput | null,
  CURRENT_PORT?: ModelStringInput | null,
  NEXT_PORT?: ModelStringInput | null,
  NEXT_PORT_NAME?: ModelStringInput | null,
  DISTANCE_TO_GO?: ModelStringInput | null,
  DISTANCE_TRAVELLED?: ModelStringInput | null,
  DESTINATION?: ModelStringInput | null,
  SPEED?: ModelStringInput | null,
  AVG_SPEED?: ModelStringInput | null,
  MAX_SPEED?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  En_Vent_Power?: ModelStringInput | null,
  En_Vent_Power_Percent?: ModelStringInput | null,
  HVAC_Power?: ModelStringInput | null,
  HVAC_Power_Percent?: ModelStringInput | null,
  Total_Power?: ModelStringInput | null,
  Saved_CO2_LastDay?: ModelStringInput | null,
  Saved_Fuel_LastDay?: ModelStringInput | null,
  Saved_Energy_LastDay?: ModelStringInput | null,
  Pumps_Power?: ModelStringInput | null,
  Pumps_Power_Percent?: ModelStringInput | null,
  HVAC_Avg_Power?: ModelStringInput | null,
  Energy_Last_Day?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  and?: Array< ModelVesselFilterInput | null > | null,
  or?: Array< ModelVesselFilterInput | null > | null,
  not?: ModelVesselFilterInput | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelVesselConnection = {
  __typename: "ModelVesselConnection",
  items:  Array<Vessel | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelVesselsAISHistoryFilterInput = {
  id?: ModelIDInput | null,
  imo?: ModelStringInput | null,
  vessel_name?: ModelStringInput | null,
  timestamp?: ModelStringInput | null,
  latitude?: ModelStringInput | null,
  longitude?: ModelStringInput | null,
  createdAt?: ModelStringInput | null,
  updatedAt?: ModelStringInput | null,
  and?: Array< ModelVesselsAISHistoryFilterInput | null > | null,
  or?: Array< ModelVesselsAISHistoryFilterInput | null > | null,
  not?: ModelVesselsAISHistoryFilterInput | null,
  _deleted?: ModelBooleanInput | null,
};

export type ModelVesselsAISHistoryConnection = {
  __typename: "ModelVesselsAISHistoryConnection",
  items:  Array<VesselsAISHistory | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelSubscriptionVesselFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  clientID?: ModelSubscriptionStringInput | null,
  fleet?: ModelSubscriptionStringInput | null,
  ip?: ModelSubscriptionStringInput | null,
  outsideTemp?: ModelSubscriptionStringInput | null,
  Outside_Temp_LastDay?: ModelSubscriptionStringInput | null,
  HVAC_P_status?: ModelSubscriptionStringInput | null,
  En_Vent_P_status?: ModelSubscriptionStringInput | null,
  Pumps_P_status?: ModelSubscriptionStringInput | null,
  IMO?: ModelSubscriptionStringInput | null,
  MMSI?: ModelSubscriptionStringInput | null,
  SHIPNAME?: ModelSubscriptionStringInput | null,
  FLAG?: ModelSubscriptionStringInput | null,
  MARKET?: ModelSubscriptionStringInput | null,
  TYPE_NAME?: ModelSubscriptionStringInput | null,
  LAT?: ModelSubscriptionStringInput | null,
  LON?: ModelSubscriptionStringInput | null,
  LAST_PORT?: ModelSubscriptionStringInput | null,
  CURRENT_PORT?: ModelSubscriptionStringInput | null,
  NEXT_PORT?: ModelSubscriptionStringInput | null,
  NEXT_PORT_NAME?: ModelSubscriptionStringInput | null,
  DISTANCE_TO_GO?: ModelSubscriptionStringInput | null,
  DISTANCE_TRAVELLED?: ModelSubscriptionStringInput | null,
  DESTINATION?: ModelSubscriptionStringInput | null,
  SPEED?: ModelSubscriptionStringInput | null,
  AVG_SPEED?: ModelSubscriptionStringInput | null,
  MAX_SPEED?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  En_Vent_Power?: ModelSubscriptionStringInput | null,
  En_Vent_Power_Percent?: ModelSubscriptionStringInput | null,
  HVAC_Power?: ModelSubscriptionStringInput | null,
  HVAC_Power_Percent?: ModelSubscriptionStringInput | null,
  Total_Power?: ModelSubscriptionStringInput | null,
  Saved_CO2_LastDay?: ModelSubscriptionStringInput | null,
  Saved_Fuel_LastDay?: ModelSubscriptionStringInput | null,
  Saved_Energy_LastDay?: ModelSubscriptionStringInput | null,
  Pumps_Power?: ModelSubscriptionStringInput | null,
  Pumps_Power_Percent?: ModelSubscriptionStringInput | null,
  HVAC_Avg_Power?: ModelSubscriptionStringInput | null,
  Energy_Last_Day?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVesselFilterInput | null > | null,
  or?: Array< ModelSubscriptionVesselFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
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

export type ModelSubscriptionVesselsAISHistoryFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  imo?: ModelSubscriptionStringInput | null,
  vessel_name?: ModelSubscriptionStringInput | null,
  timestamp?: ModelSubscriptionStringInput | null,
  latitude?: ModelSubscriptionStringInput | null,
  longitude?: ModelSubscriptionStringInput | null,
  createdAt?: ModelSubscriptionStringInput | null,
  updatedAt?: ModelSubscriptionStringInput | null,
  and?: Array< ModelSubscriptionVesselsAISHistoryFilterInput | null > | null,
  or?: Array< ModelSubscriptionVesselsAISHistoryFilterInput | null > | null,
  _deleted?: ModelBooleanInput | null,
};

export type CreateVesselMutationVariables = {
  input: CreateVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type CreateVesselMutation = {
  createVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVesselMutationVariables = {
  input: UpdateVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type UpdateVesselMutation = {
  updateVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVesselMutationVariables = {
  input: DeleteVesselInput,
  condition?: ModelVesselConditionInput | null,
};

export type DeleteVesselMutation = {
  deleteVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateVesselsAISHistoryMutationVariables = {
  input: CreateVesselsAISHistoryInput,
  condition?: ModelVesselsAISHistoryConditionInput | null,
};

export type CreateVesselsAISHistoryMutation = {
  createVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateVesselsAISHistoryMutationVariables = {
  input: UpdateVesselsAISHistoryInput,
  condition?: ModelVesselsAISHistoryConditionInput | null,
};

export type UpdateVesselsAISHistoryMutation = {
  updateVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteVesselsAISHistoryMutationVariables = {
  input: DeleteVesselsAISHistoryInput,
  condition?: ModelVesselsAISHistoryConditionInput | null,
};

export type DeleteVesselsAISHistoryMutation = {
  deleteVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type GetVesselQueryVariables = {
  id: string,
};

export type GetVesselQuery = {
  getVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVesselsQueryVariables = {
  filter?: ModelVesselFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVesselsQuery = {
  listVessels?:  {
    __typename: "ModelVesselConnection",
    items:  Array< {
      __typename: "Vessel",
      id: string,
      clientID?: string | null,
      fleet?: string | null,
      ip?: string | null,
      outsideTemp?: string | null,
      Outside_Temp_LastDay?: string | null,
      HVAC_P_status?: string | null,
      En_Vent_P_status?: string | null,
      Pumps_P_status?: string | null,
      IMO?: string | null,
      MMSI?: string | null,
      SHIPNAME?: string | null,
      FLAG?: string | null,
      MARKET?: string | null,
      TYPE_NAME?: string | null,
      LAT?: string | null,
      LON?: string | null,
      LAST_PORT?: string | null,
      CURRENT_PORT?: string | null,
      NEXT_PORT?: string | null,
      NEXT_PORT_NAME?: string | null,
      DISTANCE_TO_GO?: string | null,
      DISTANCE_TRAVELLED?: string | null,
      DESTINATION?: string | null,
      SPEED?: string | null,
      AVG_SPEED?: string | null,
      MAX_SPEED?: string | null,
      updatedAt?: string | null,
      En_Vent_Power?: string | null,
      En_Vent_Power_Percent?: string | null,
      HVAC_Power?: string | null,
      HVAC_Power_Percent?: string | null,
      Total_Power?: string | null,
      Saved_CO2_LastDay?: string | null,
      Saved_Fuel_LastDay?: string | null,
      Saved_Energy_LastDay?: string | null,
      Pumps_Power?: string | null,
      Pumps_Power_Percent?: string | null,
      HVAC_Avg_Power?: string | null,
      Energy_Last_Day?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVesselsQueryVariables = {
  filter?: ModelVesselFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVesselsQuery = {
  syncVessels?:  {
    __typename: "ModelVesselConnection",
    items:  Array< {
      __typename: "Vessel",
      id: string,
      clientID?: string | null,
      fleet?: string | null,
      ip?: string | null,
      outsideTemp?: string | null,
      Outside_Temp_LastDay?: string | null,
      HVAC_P_status?: string | null,
      En_Vent_P_status?: string | null,
      Pumps_P_status?: string | null,
      IMO?: string | null,
      MMSI?: string | null,
      SHIPNAME?: string | null,
      FLAG?: string | null,
      MARKET?: string | null,
      TYPE_NAME?: string | null,
      LAT?: string | null,
      LON?: string | null,
      LAST_PORT?: string | null,
      CURRENT_PORT?: string | null,
      NEXT_PORT?: string | null,
      NEXT_PORT_NAME?: string | null,
      DISTANCE_TO_GO?: string | null,
      DISTANCE_TRAVELLED?: string | null,
      DESTINATION?: string | null,
      SPEED?: string | null,
      AVG_SPEED?: string | null,
      MAX_SPEED?: string | null,
      updatedAt?: string | null,
      En_Vent_Power?: string | null,
      En_Vent_Power_Percent?: string | null,
      HVAC_Power?: string | null,
      HVAC_Power_Percent?: string | null,
      Total_Power?: string | null,
      Saved_CO2_LastDay?: string | null,
      Saved_Fuel_LastDay?: string | null,
      Saved_Energy_LastDay?: string | null,
      Pumps_Power?: string | null,
      Pumps_Power_Percent?: string | null,
      HVAC_Avg_Power?: string | null,
      Energy_Last_Day?: string | null,
      createdAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetVesselsAISHistoryQueryVariables = {
  id: string,
};

export type GetVesselsAISHistoryQuery = {
  getVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListVesselsAISHistoriesQueryVariables = {
  filter?: ModelVesselsAISHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListVesselsAISHistoriesQuery = {
  listVesselsAISHistories?:  {
    __typename: "ModelVesselsAISHistoryConnection",
    items:  Array< {
      __typename: "VesselsAISHistory",
      id: string,
      imo?: string | null,
      vessel_name?: string | null,
      timestamp?: string | null,
      latitude?: string | null,
      longitude?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncVesselsAISHistoriesQueryVariables = {
  filter?: ModelVesselsAISHistoryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncVesselsAISHistoriesQuery = {
  syncVesselsAISHistories?:  {
    __typename: "ModelVesselsAISHistoryConnection",
    items:  Array< {
      __typename: "VesselsAISHistory",
      id: string,
      imo?: string | null,
      vessel_name?: string | null,
      timestamp?: string | null,
      latitude?: string | null,
      longitude?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnCreateVesselSubscription = {
  onCreateVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnUpdateVesselSubscription = {
  onUpdateVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVesselSubscriptionVariables = {
  filter?: ModelSubscriptionVesselFilterInput | null,
};

export type OnDeleteVesselSubscription = {
  onDeleteVessel?:  {
    __typename: "Vessel",
    id: string,
    clientID?: string | null,
    fleet?: string | null,
    ip?: string | null,
    outsideTemp?: string | null,
    Outside_Temp_LastDay?: string | null,
    HVAC_P_status?: string | null,
    En_Vent_P_status?: string | null,
    Pumps_P_status?: string | null,
    IMO?: string | null,
    MMSI?: string | null,
    SHIPNAME?: string | null,
    FLAG?: string | null,
    MARKET?: string | null,
    TYPE_NAME?: string | null,
    LAT?: string | null,
    LON?: string | null,
    LAST_PORT?: string | null,
    CURRENT_PORT?: string | null,
    NEXT_PORT?: string | null,
    NEXT_PORT_NAME?: string | null,
    DISTANCE_TO_GO?: string | null,
    DISTANCE_TRAVELLED?: string | null,
    DESTINATION?: string | null,
    SPEED?: string | null,
    AVG_SPEED?: string | null,
    MAX_SPEED?: string | null,
    updatedAt?: string | null,
    En_Vent_Power?: string | null,
    En_Vent_Power_Percent?: string | null,
    HVAC_Power?: string | null,
    HVAC_Power_Percent?: string | null,
    Total_Power?: string | null,
    Saved_CO2_LastDay?: string | null,
    Saved_Fuel_LastDay?: string | null,
    Saved_Energy_LastDay?: string | null,
    Pumps_Power?: string | null,
    Pumps_Power_Percent?: string | null,
    HVAC_Avg_Power?: string | null,
    Energy_Last_Day?: string | null,
    createdAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateVesselsAISHistorySubscriptionVariables = {
  filter?: ModelSubscriptionVesselsAISHistoryFilterInput | null,
};

export type OnCreateVesselsAISHistorySubscription = {
  onCreateVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateVesselsAISHistorySubscriptionVariables = {
  filter?: ModelSubscriptionVesselsAISHistoryFilterInput | null,
};

export type OnUpdateVesselsAISHistorySubscription = {
  onUpdateVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteVesselsAISHistorySubscriptionVariables = {
  filter?: ModelSubscriptionVesselsAISHistoryFilterInput | null,
};

export type OnDeleteVesselsAISHistorySubscription = {
  onDeleteVesselsAISHistory?:  {
    __typename: "VesselsAISHistory",
    id: string,
    imo?: string | null,
    vessel_name?: string | null,
    timestamp?: string | null,
    latitude?: string | null,
    longitude?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};
