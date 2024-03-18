import React, { useState } from 'react';
import { View } from '@aws-amplify/ui-react';
//import { ThemeContext } from "../../themes/ThemeContext";
//import { VesselsContext } from '../dashboard/VesselsContext';
//import { VesselsContext } from '../../utils/VesselsContext';
import FleetGrid from './FleetGrid';
import FleetList from './FleetList';
import FleetHeader from './FleetHeader'; // Import FleetHeader
import './FleetHeader.css';

//import { uploadUpdatedJSON } from '../../utils/S3Connector'; // Import the function
//import VesselListContainer from 'src/utils/VesselListContainer';

//import { VesselsContext } from '../../utils/VesselsContext';

const Fleet = () => {
  const [view, setView] = useState('grid');

  return (
    <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="5px">
      <FleetHeader view={view} setView={setView} />
      {view === 'grid' ? <FleetGrid /> : <FleetList />}
    </View>
  );
}

export default Fleet;