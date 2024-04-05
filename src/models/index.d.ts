import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerVessel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vessel, 'id'>;
    readOnlyFields: 'createdAt';
  };
  readonly id: string;
  readonly clientID?: string | null;
  readonly outsideTemp?: string | null;
  readonly Outside_Temp_LastDay?: string | null;
  readonly HVAC_P_status?: string | null;
  readonly En_Vent_P_status?: string | null;
  readonly Pumps_P_status?: string | null;
  readonly IMO?: string | null;
  readonly MMSI?: string | null;
  readonly SHIPNAME?: string | null;
  readonly FLAG?: string | null;
  readonly MARKET?: string | null;
  readonly TYPE_NAME?: string | null;
  readonly LAT?: string | null;
  readonly LON?: string | null;
  readonly LAST_PORT?: string | null;
  readonly CURRENT_PORT?: string | null;
  readonly NEXT_PORT?: string | null;
  readonly NEXT_PORT_NAME?: string | null;
  readonly DISTANCE_TO_GO?: string | null;
  readonly DISTANCE_TRAVELLED?: string | null;
  readonly DESTINATION?: string | null;
  readonly SPEED?: string | null;
  readonly AVG_SPEED?: string | null;
  readonly MAX_SPEED?: string | null;
  readonly updatedAt?: string | null;
  readonly En_Vent_Power?: string | null;
  readonly En_Vent_Power_Percent?: string | null;
  readonly HVAC_Power?: string | null;
  readonly HVAC_Power_Percent?: string | null;
  readonly Total_Power?: string | null;
  readonly Saved_CO2_LastDay?: string | null;
  readonly Saved_Fuel_LastDay?: string | null;
  readonly Saved_Energy_LastDay?: string | null;
  readonly Pumps_Power?: string | null;
  readonly Pumps_Power_Percent?: string | null;
  readonly createdAt?: string | null;
}

type LazyVessel = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Vessel, 'id'>;
    readOnlyFields: 'createdAt';
  };
  readonly id: string;
  readonly clientID?: string | null;
  readonly outsideTemp?: string | null;
  readonly Outside_Temp_LastDay?: string | null;
  readonly HVAC_P_status?: string | null;
  readonly En_Vent_P_status?: string | null;
  readonly Pumps_P_status?: string | null;
  readonly IMO?: string | null;
  readonly MMSI?: string | null;
  readonly SHIPNAME?: string | null;
  readonly FLAG?: string | null;
  readonly MARKET?: string | null;
  readonly TYPE_NAME?: string | null;
  readonly LAT?: string | null;
  readonly LON?: string | null;
  readonly LAST_PORT?: string | null;
  readonly CURRENT_PORT?: string | null;
  readonly NEXT_PORT?: string | null;
  readonly NEXT_PORT_NAME?: string | null;
  readonly DISTANCE_TO_GO?: string | null;
  readonly DISTANCE_TRAVELLED?: string | null;
  readonly DESTINATION?: string | null;
  readonly SPEED?: string | null;
  readonly AVG_SPEED?: string | null;
  readonly MAX_SPEED?: string | null;
  readonly updatedAt?: string | null;
  readonly En_Vent_Power?: string | null;
  readonly En_Vent_Power_Percent?: string | null;
  readonly HVAC_Power?: string | null;
  readonly HVAC_Power_Percent?: string | null;
  readonly Total_Power?: string | null;
  readonly Saved_CO2_LastDay?: string | null;
  readonly Saved_Fuel_LastDay?: string | null;
  readonly Saved_Energy_LastDay?: string | null;
  readonly Pumps_Power?: string | null;
  readonly Pumps_Power_Percent?: string | null;
  readonly createdAt?: string | null;
}

export declare type Vessel = LazyLoading extends LazyLoadingDisabled ? EagerVessel : LazyVessel

export declare const Vessel: (new (init: ModelInit<Vessel>) => Vessel) & {
  copyOf(source: Vessel, mutator: (draft: MutableModel<Vessel>) => MutableModel<Vessel> | void): Vessel;
}

type EagerVesselsAISHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VesselsAISHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imo?: string | null;
  readonly vessel_name?: string | null;
  readonly timestamp?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyVesselsAISHistory = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<VesselsAISHistory, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly imo?: string | null;
  readonly vessel_name?: string | null;
  readonly timestamp?: string | null;
  readonly latitude?: string | null;
  readonly longitude?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type VesselsAISHistory = LazyLoading extends LazyLoadingDisabled ? EagerVesselsAISHistory : LazyVesselsAISHistory

export declare const VesselsAISHistory: (new (init: ModelInit<VesselsAISHistory>) => VesselsAISHistory) & {
  copyOf(source: VesselsAISHistory, mutator: (draft: MutableModel<VesselsAISHistory>) => MutableModel<VesselsAISHistory> | void): VesselsAISHistory;
}