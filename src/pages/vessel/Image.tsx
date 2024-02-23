import React, { useContext } from 'react';

import { CardContent, CardMedia } from '@mui/material';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import './Image.css'; // Import the CSS file


const Image = ({vessel}) => {
   // const progress = ((parseFloat(vessel?.DISTANCE_TRAVELLED ?? '0')) / (parseFloat(vessel?.DISTANCE_TO_GO ?? '1'))) * 100;
    const { theme } = useContext(ThemeContext);

    return (
        <><Card
            className={`amplify-card ${theme}`}
            height="22vh"
            borderRadius="15px"
            padding="0"
            margin="0"
            style={{
                
                position: 'relative',
                //backgroundImage: `url(/vessels/${vessel.IMO}.jpg)`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                overflow: 'hidden',
                boxShadow: '',
                borderTop: '2px solid #00c9ff',
                borderBottom: '1px solid #082b40' 

              //  background: 'radial-gradient(circle at center, transparent, #0f111d86)', 


             }} // Replace .jpg with the actual image extension
        >
            <div className="image">
            <CardMedia
                component="img"
                width="100%"
                height="100%"
                image={`/vessels/${vessel.IMO}.jpg`}
                alt="Your description"
                sx={{ 
                    position: 'absolute',
                }}     
            />
          
            {/*}
            <div style={{ position: 'relative' }}>
                <div 
                    style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    left: 0,
                    height: '100%',
                    borderRadius: '13px 13px 0 0',
                    background: 'rgba(17, 25, 54, 0.9)',
                  //  backdropFilter: 'blur(50px)',
                    borderBottom: '2px solid #00c9ff',
                   
                    
                    }}
                ></div>
                
                 <Box display="flex" alignItems="center" p={1.5} style={{ position: 'relative' }}>
                    <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="27" height="18" style={{ marginRight: '8px' }}/>         
                    <p style={{ fontSize: '1.1rem' }}>M/S {vessel.SHIPNAME}</p>
                    <p style={{ fontSize: '1.1rem', marginLeft: 'auto' }}>IMO: {vessel.IMO}</p>

                </Box>

            </div>
            {*/}
            
            <CardContent style={{ position: 'relative'}}>
                {/* Your card content here */}
            </CardContent>
           
    </div>
        </Card>
        </>
    )

}

export default Image;