import React, { useContext } from 'react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from '@aws-amplify/ui-react';

import { Box, LinearProgress } from '@mui/material';












const RouteBar = ({vessel}) => {
    const { theme } = useContext(ThemeContext);
    const progress = ((parseFloat(vessel?.DISTANCE_TRAVELLED ?? '0')) / (parseFloat(vessel?.DISTANCE_TO_GO ?? '1'))) * 100;

    return (
        <>
        <Card
            className={`amplify-card ${theme}`}
            marginTop="15px"
           padding="10px"
            borderRadius="150px"
        >
            <Box 
                display="flex"
                alignItems="center"
                padding={0}
                margin={0}
                bottom={0}
                width="100%"
            >
                <p style={{ marginRight: '8px' }}>{vessel.LAST_PORT}</p>
                <Box flexGrow={1}>
                    <LinearProgress variant="determinate" value={progress} />
                </Box>
                <p style={{ margin: '0px', marginLeft: '8px' }}>{vessel.DESTINATION}</p>
            </Box>

        </Card>
        </>
    )

}


export default RouteBar;




