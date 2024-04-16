import { useParams } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import { VesselsContext } from '../../utils/VesselsContext';
import { Vessel } from '../../models';
import VesselPageDefault from './layouts/VesselPage1';
import Drotten from './layouts/Drotten';
import VOC from './layouts/VOC';

export default function VesselPage() {
    const { id } = useParams<{ id: string }>();
    const vessels = useContext(VesselsContext);
    //console.log("vesseÄÄÄÄÄÄÄÄÄÄÄÄls", vessels)
    const [vessel, setVessel] = useState<Vessel | null>(null);
    const [vesselLayout, setVesselLayout] = useState<React.ComponentType<{ vessel: Vessel | null }> | null>(null);
    //console.log('ID', id)

    //const { theme } = useContext(ThemeContext);

    useEffect(() => {
        let selectedVessel: Vessel | null = null;
        let vesselsData = vessels;

        // Check if vessels data is in local storage
        /* const savedVessels = localStorage.getItem('vessels');
         if (!vesselsData && savedVessels) {
             vesselsData = JSON.parse(savedVessels);
         }*/

        for (let vessel of vesselsData) {
            if (vessel.id === id) {
                selectedVessel = vessel;
                break;
            }
        }
        setVessel(selectedVessel);

        if (selectedVessel) {
            const layoutMapping = {
                'DROTTEN': Drotten,
                'ECKERO': Drotten,
                'VOC': VOC,
                'DEFAULT': VesselPageDefault
            };
            let layoutComponent;
            if (selectedVessel.SHIPNAME && selectedVessel.SHIPNAME.startsWith('VIKING')) {
                layoutComponent = layoutMapping['VOC'];
            } else {
                layoutComponent = layoutMapping[selectedVessel.SHIPNAME || 'DEFAULT'];
            }
            setVesselLayout(() => layoutComponent);
        }

        // Save vessels data to local storage
        /*
        if (vesselsData) {
            localStorage.setItem('vessels', JSON.stringify(vesselsData));
        } */
    }, [id, vessels]);
    //console.log('vessel', vessel)


    if (!vesselLayout) {
        return <div>Loading...</div>;
    }



    const VesselLayout = vesselLayout;
    return <VesselLayout vessel={vessel} />;
}