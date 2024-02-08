import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Box } from '@mui/material';

const Title = ({vessel}) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
        <Card
            className={`amplify-card ${theme}`}
            borderRadius="15px"
            marginBottom="10px"
            paddingBottom="7px"
            paddingTop="7px"
            
            style={{
                background: 'radial-gradient(circle at center, transparent, #0f111d86)', 
            }}
        >
            <Box display="flex" alignItems="center"  style={{ position: 'relative' }}>
                <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="24" height="16" style={{ marginRight: '8px' }}/>         
                <p style={{ fontSize: '1.1rem' }}>M/S {vessel.SHIPNAME}</p>
                <p style={{ fontSize: '1.1rem', marginLeft: 'auto' }}>IMO: {vessel.IMO}</p>

            </Box>
        </Card>
            </>
    )

}
export default Title;