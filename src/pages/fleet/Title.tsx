import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Box } from '@mui/material';
import GreenLight from "../../assets/icons/GreenLight.gif";

//port './VesselPage.css'; // Import the CSS file

const Title = ({vessel}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
        <Card
            className={`amplify-card ${theme}`}
            backgroundColor="#1A223F"
            
            borderRadius="15px"
            boxShadow="0px"
            paddingTop="0px"
            margin="0"
            paddingLeft="3px"
            paddingBottom="13px"
          
        >
            <Box display="flex" alignItems="center"  style={{ position: 'relative' }}>
                <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="24" height="16" style={{ marginRight: '8px' }}/>         
                <p style={{ fontSize: '1.35rem', fontWeight: 'bold' }}>M/S {vessel.SHIPNAME}</p>
                <div style={{display: 'flex', marginLeft: 'auto', verticalAlign: 'center', alignItems: 'center'}}>
                    <img src={GreenLight} alt="Green light" width="15" height="15" style={{ marginRight: '5px' }}/>
                    <p style={{ fontSize: '1.22rem', marginLeft: 'auto' }}>IMO: {vessel.IMO}</p>
                </div>
            </Box>
            
        </Card>
            </>
    )

}
export default Title;