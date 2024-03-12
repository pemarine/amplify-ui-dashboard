import React, { useContext } from 'react';
import { View, Grid, useTheme } from '@aws-amplify/ui-react';
//import { ThemeContext } from "../../themes/ThemeContext";
//import { VesselsContext } from '../dashboard/VesselsContext';
import { VesselsContext } from '../../utils/VesselsContext';
import VesselCard from './VesselCard';
import Title from './Title';
//import { uploadUpdatedJSON } from '../../utils/S3Connector'; // Import the function
//import VesselListContainer from 'src/utils/VesselListContainer';

//import { VesselsContext } from '../../utils/VesselsContext';

const Fleet = () => {
  const vessels = useContext(VesselsContext);
  const { tokens } = useTheme();

 // const _vessels = VesselListContainer();
  //console.log("hej" + _vessels);

  //const { theme } = useContext(ThemeContext);

  return (
    <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="5px">
      <Grid 
        templateColumns={{ base: "repeat(4, 1fr)", large: "repeat(4, 1fr)" }}
        gap={tokens.space.medium}

      >

        {vessels.map((vessel, index) => (
          <div key={index} style={{ display: 'flex', flexDirection: 'column', marginTop: '8px' }}>
          <Title vessel={vessel} />
          <VesselCard vessel={vessel} />
        </div>
        ))}
      </Grid>
    </View>
  );
}

export default Fleet;