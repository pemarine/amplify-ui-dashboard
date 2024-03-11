// utils/vesselUtils.ts
import { Vessel } from '../models';

export const getStatusMarker = (vessel: Vessel, selectedVesselId: string) => {
    if (vessel.id === selectedVesselId) {
        return 'BlueAnimatedMarker';
    }
    else {
        const highestValue = Math.max(
            parseFloat(vessel.HVAC_P_status || "1"),
            parseFloat(vessel.En_Vent_P_status || "1"),
            parseFloat(vessel.Pumps_P_status || "1")
        );

        switch (highestValue) {
            case 1:
                return 'GreenAnimatedMarker';
            case 2:
                return 'YellowAnimatedMarker';
            case 3:
                return 'RedAnimatedMarker';
            default:
                return 'BlueAnimatedMarker';
        }
    }
};

export const getStatusIcon = (vessel: Vessel) => {

    const highestValue = Math.max(
        parseFloat(vessel.HVAC_P_status || "1"),
        parseFloat(vessel.En_Vent_P_status || "1"),
        parseFloat(vessel.Pumps_P_status || "1")
    );

    switch (highestValue) {
        case 1:
            return 'GreenAnimatedMarker';
        case 2:
            return 'YellowAnimatedMarker';
        case 3:
            return 'RedAnimatedMarker';
        default:
            return 'GreenAnimatedTableMarker';
    }

};