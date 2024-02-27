import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Box } from '@mui/material';
import './VesselPage.css'; // Import the CSS file

const Title = ({vessel}) => {
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
            paddingBottom="10px"
          
        >
            <Box display="flex" alignItems="center"  style={{ position: 'relative' }}>
                <img src={`/flags/${vessel.FLAG.toUpperCase()}.png`} alt={vessel.FLAG} width="24" height="16" style={{ marginRight: '8px' }}/>         
                <p style={{ fontSize: '19px', fontWeight: 'bold' }}>M/S {vessel.SHIPNAME}</p>
                <p style={{ fontSize: '17px', marginLeft: 'auto' }}>IMO: {vessel.IMO}</p>
            </Box>
            
        </Card>
            </>
    )

}
export default Title;