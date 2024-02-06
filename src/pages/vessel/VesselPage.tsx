import React, { useContext, useEffect, useState } from 'react';
//mport { View, useTheme } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';

import { VesselsContext } from '../../utils/VesselsContext';
import { Vessel } from 'src/models';

//import { Vessel } from 'src/models';


const VesselPage = () => {
    const { id } = useParams<{ id: string }>();
    const vessels = useContext(VesselsContext);
    const [vessel, setVessel] = useState<Vessel | null>(null);
  
    useEffect(() => {
      // Get the vessel that matches the id from the URL
      const selectedVessel = vessels.find(vessel => vessel.id === id);
  
      if (selectedVessel) {
        setVessel(selectedVessel);
      } else {
        // Handle the case where no vessel matches the id
        // For example, you could redirect to a "Vessel not found" page
      }
    }, [id, vessels]);
  
    if (!vessel) {
      return <div>Loading...</div>;
    }
  
    return (
      <div>
        {/* Display vessel data here */}
        <h1>{vessel.SHIPNAME}</h1>
      </div>
    );
  }
  
export default VesselPage;