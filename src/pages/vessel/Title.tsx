import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Box } from '@mui/material';
import './VesselPage.css'; // Import the CSS file

const Title = ({ vessel }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Card
                className={`title ${theme}`}

                borderRadius="15px"
                boxShadow="0px"
                paddingTop="0px"
                margin="0"
                paddingLeft="3px"
                paddingBottom="6px"

            >
                <Box display="flex" alignItems="center" style={{ position: 'relative' }}>
                    <img src={`/flags/${vessel.FLAG.toLowerCase()}.png`} alt={vessel.FLAG} width="21" height="14" style={{ marginRight: '8px' }} />
                    <p style={{ fontSize: '17px', fontWeight: 'bold' }}>M/S {vessel.SHIPNAME}</p>
               { /*    <p style={{ fontSize: '11px', marginLeft: 'au8to', color: '#f6f6f5' }}>IMO: {vessel.IMO}</p> */}
                </Box>
                <Box display="flex">
                    <p style={{ fontSize: '12px', marginRight: 'auto', color: '#f6f6f5' }}>IMO: {vessel.IMO}</p>

                </Box>


            </Card>
        </>
    )

}
export default Title;