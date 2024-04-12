import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { VesselsContext } from '../../utils/VesselsContext';
import { Vessel } from '../../models';
import VesselPageDefault from './layouts/VesselPage1';
import Drotten from './layouts/Drotten';

export default function VesselPage() {
    const { id } = useParams<{ id: string }>();
    const vessels = useContext(VesselsContext);
    //console.log("vesseÄÄÄÄÄÄÄÄÄÄÄÄls", vessels)
    const [vessel, setVessel] = useState<Vessel | null>(null);
    const [vesselLayoutName, setVesselLayoutName] = useState<string | null>(null);
    //console.log('ID', id)

    //const { theme } = useContext(ThemeContext);

    useEffect(() => {
        let selectedVessel: Vessel | null = null;
        let vesselsData = vessels;
    
        // Check if vessels data is in local storage
        const savedVessels = localStorage.getItem('vessels');
        if (!vesselsData && savedVessels) {
            vesselsData = JSON.parse(savedVessels);
        }
    
        for (let vessel of vesselsData) {
            if (vessel.id === id) {
                selectedVessel = vessel;
                break;
            }
        }
        setVessel(selectedVessel);
    
        if (selectedVessel) {
            const layoutName = selectedVessel.SHIPNAME === 'DROTTEN' ? 'Drotten' : 'VesselPage1';
            setVesselLayoutName(layoutName);
        }
    
        // Save vessels data to local storage
        if (vesselsData) {
            localStorage.setItem('vessels', JSON.stringify(vesselsData));
        }
    }, [id, vessels]); // Added vessels as a dependency

    if (!vesselLayoutName) {
        return <div>Loading...</div>;
    }



    const VesselLayout = vesselLayoutName === 'Drotten' ? Drotten : VesselPageDefault;
    return <VesselLayout vessel={vessel} />;
}