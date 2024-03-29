// utils/vesselUtils.ts
import { Vessel } from '../models';

import BlueAnimatedMarker from '../assets/lottie/BlueAnimatedMarker.json';
import GreenAnimatedMarker from '../assets/lottie/GreenAnimatedMarkerNEW.json';
import YellowAnimatedMarker from '../assets/lottie/YellowAnimatedMarker.json';
import RedAnimatedMarker from '../assets/lottie/RedAnimatedMarker.json';
import GreenAnimatedMarkerDot from '../assets/lottie/GreenAnimatedMarkerDotV2.json';



export const getStatusMarker = (vessel: Vessel, selectedVesselId: string) => {
    if (vessel.id === selectedVesselId) {
        return BlueAnimatedMarker;
    }
    else {
        if (parseFloat(vessel.SPEED ?? "") < 10) {
            return GreenAnimatedMarkerDot;
        }
        const highestValue = Math.max(
            parseFloat(vessel.HVAC_P_status || "1"),
            parseFloat(vessel.En_Vent_P_status || "1"),
            parseFloat(vessel.Pumps_P_status || "1")
        );

        switch (highestValue) {
            case 1:
                return GreenAnimatedMarker;
            case 2:
                return YellowAnimatedMarker;
            case 3:
                return RedAnimatedMarker;
            default:
                return GreenAnimatedMarker;
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