// utils/vesselUtils.ts
import { Vessel } from '../models';
import Lottie from 'lottie-react';


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
export const getStatusIconAnimation = (vessel: Vessel) => {
    const highestValue = Math.max(
        parseFloat(vessel.HVAC_P_status || "1"),
        parseFloat(vessel.En_Vent_P_status || "1"),
        parseFloat(vessel.Pumps_P_status || "1")
    );
    let animationData;
    switch (highestValue) {
        case 1:
            animationData = GreenAnimatedMarker;
            break;
        case 2:
            animationData = YellowAnimatedMarker;
            break;
        case 3:
            animationData = RedAnimatedMarker;
            break;
        default:
            animationData = GreenAnimatedMarker;
    }
    return <Lottie loop={true} autoplay={true} animationData={animationData} />;
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
export const getStatusElement = (status: string) => {
    switch (status) {
        case "1":
            return { color: '#00a339', statusText: 'Power Good' };
        case "2":
            return { color: '#ffc01d', statusText: 'Power OK' }; // replace with the actual status text for 2
        case "3":
            return { color: 'red', statusText: 'Power High' }; // replace with the actual status text for 3
        default:
            return { color: '#00a339', statusText: 'Power good' };
    }
};
export const getStatusColor = (HVAC_P_status: string, En_Vent_P_status: string, Pumps_P_status) => {
    const highestStatus = Math.max(Number(HVAC_P_status), Number(En_Vent_P_status), Number(Pumps_P_status)).toString();

    switch (highestStatus) {
        case "1":
            return '#00a339';
        case "2":
            return '#ffc01d';
        case "3":
            return '#ff0000';
        default:
            return '#00a339';
    }
};
export const getStatusColorSingle = (status: string) => {
    switch (status) {
        case "1":
            return '#00a339';
        case "2":
            return '#ffc01d';
        case "3":
            return '#ff0000';
        default:
            return '#00a339';
    }
};
export const getHighestStatusValue = (...statuses) => {
    return Math.max(...statuses.map(Number));
  };

