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
    outsideTemp
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
` as GeneratedSubscription<
  APITypes.OnCreateVesselSubscriptionVariables,
  APITypes.OnCreateVesselSubscription
>;
export const onUpdateVessel = /* GraphQL */ `subscription OnUpdateVessel($filter: ModelSubscriptionVesselFilterInput) {
  onUpdateVessel(filter: $filter) {
    id
    clientID
    outsideTemp
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
` as GeneratedSubscription<
  APITypes.OnUpdateVesselSubscriptionVariables,
  APITypes.OnUpdateVesselSubscription
>;
export const onDeleteVessel = /* GraphQL */ `subscription OnDeleteVessel($filter: ModelSubscriptionVesselFilterInput) {
  onDeleteVessel(filter: $filter) {
    id
    clientID
    outsideTemp
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
` as GeneratedSubscription<
  APITypes.OnDeleteVesselSubscriptionVariables,
  APITypes.OnDeleteVesselSubscription
>;
