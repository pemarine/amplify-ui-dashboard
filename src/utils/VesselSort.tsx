// VesselSort.tsx
import { getHighestStatusValue } from './VesselStatus';

const sortVessels = (vessels, sortOption, sortDirection) => {
    const direction = sortDirection === 'asc' ? 1 : -1;

    switch (sortOption) {
        case 'Name':
            return [...vessels].sort((a, b) => direction * a.SHIPNAME.localeCompare(b.SHIPNAME));
        case 'Flag':
            return [...vessels].sort((a, b) => direction * a.FLAG.localeCompare(b.FLAG));
        case 'Status':
            return [...vessels].sort((a, b) => direction * (getHighestStatusValue(a.HVAC_P_status, a.En_Vent_P_status, a.Pumps_P_status) - getHighestStatusValue(b.HVAC_P_status, b.En_Vent_P_status, b.Pumps_P_status)));
        default:
            return vessels;
    }
};

export { sortVessels };