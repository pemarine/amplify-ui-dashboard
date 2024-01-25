import React, { useContext } from 'react';
import { View, Grid, useTheme } from '@aws-amplify/ui-react';
//import { ThemeContext } from "../../themes/ThemeContext";
import { VesselsContext } from '../dashboard/VesselsContext';
import VesselCard from './VesselCard';

const Fleet = () => {
  const vessels = useContext(VesselsContext);
  const { tokens } = useTheme();

  //const { theme } = useContext(ThemeContext);

  return (
    <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="15px">
      <Grid 
        templateColumns={{ base: "repeat(3, 1fr)", large: "repeat(3, 1fr)" }}
        gap={tokens.space.medium}

      >
        {vessels.map((vessel, index) => (
          <VesselCard key={index} vessel={vessel} />
        ))}
      </Grid>
    </View>
  );
}

export default Fleet;