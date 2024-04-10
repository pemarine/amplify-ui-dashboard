import React, { useContext } from 'react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from '@aws-amplify/ui-react';

import { Box, LinearProgress } from '@mui/material';


import './VesselPage.css'; // Import the CSS file










const RouteBar = ({vessel}) => {
    const { theme } = useContext(ThemeContext);
    const progress = ((parseFloat(vessel?.DISTANCE_TRAVELLED ?? '0')) / (parseFloat(vessel?.DISTANCE_TO_GO ?? '1'))) * 100;

    return (
        <>
        <Card
            className={`title ${theme}`}
           padding="0px"
           paddingRight="8px"
           paddingLeft="8px"
           margin="auto"
            borderRadius="150px"
            align-content="center"

        //   backgroundColor="black"
        >
            <Box 
                display="flex"
                alignItems="center"
                padding={0}
                margin={0}
                bottom={0}
                marginTop="5px"
                marginLeft="4px"
                marginRight="4px"
                width="100%"
            >
                <p style={{ fontSize: '11px', marginRight: '10px' }}>{vessel.LAST_PORT}</p>
                <Box flexGrow={1}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
                <p style={{ fontSize: '11px', margin: '4px', marginLeft: '10px', }}>{vessel.DESTINATION}</p>
            </Box>

        </Card>
        </>
    )

}


export default RouteBar;




