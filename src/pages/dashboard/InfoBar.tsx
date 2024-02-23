import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Link } from 'react-router-dom';

//import { Vessel } from 'src/models';
import './VesselBox.css'
//import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Icon } from "@aws-amplify/ui-react";

import {
 // MdModeEditOutline,
  MdOutlineChevronRight,
 // MdOutlineTableChart,
} from "react-icons/md";

interface InfoBarProps {
  selectedMarker: any;
  setSelectedMarker: (marker: any) => void;
}
  const InfoBar: React.FC<InfoBarProps> = ({ selectedMarker, setSelectedMarker }) => {
    const { theme } = useContext(ThemeContext);

    if (!selectedMarker) {
      return null;
    }
  
    const handleCloseClick = () => {
      setSelectedMarker(null);
    };

  
    return (
     
      <Card
      className={`amplify-card ${theme}`}
      borderRadius="15px"
      padding="0px"
      margin="0px"
      margin-block-end="0px"
      style={{ position: 'relative', overflow:'hidden'}}
    >
      <IconButton
        onClick={handleCloseClick} 
        style={{ 
          position: 'absolute', 
          right: '4px', 
          background: 'transparent', 
          border: 'none' 
        }}
      >
       <CloseIcon style={{ color: 'white' }} fontSize="small" />
      </IconButton>
      
      <div style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden', background: '#1A223F'}}> {/* Add this div */}
      
        <img src={`/vessels/${selectedMarker.IMO}.jpg`} height={100} alt="Vessel" style={{ marginRight: '15px',  width:'155px',  borderRadius: '15px'
}} />
        <div style={{ display: 'flex', flexDirection: 'column' }}> {/* Add this div */}
          <div style={{ display: 'flex', alignItems: 'center', padding: '0px', margin: '0px'}}>
            <img src={`/flags/${selectedMarker.FLAG}.png`}
              height={20}
              alt="Flag"
              style={{ 
                marginLeft: '0px',
                paddingRight: '10px',
                objectFit:'contain',
                }}
             />
            <h2 style={{fontSize: '1.2rem'}}>M/S {selectedMarker.SHIPNAME}</h2>
           
          </div>
          <div style={{marginTop: '5px'}}> {/* Add this div */}
            <p style={{fontSize: '0.9rem'}}>IMO: {selectedMarker.IMO}</p> {/* Replace with your IMO data */}
          </div>
          <div style={{marginTop: '0px'}}> {/* Add this div */}
            <p style={{fontSize: '0.9rem'}}>
              MARKET: {selectedMarker.MARKET.charAt(0).toUpperCase() + selectedMarker.MARKET.slice(1).toLowerCase()}
            </p>
          </div>
          <div style={{marginTop: '0px'}}> {/* Add this div */}
            <p style={{fontSize: '0.9rem'}}>
            SPEED: {Number(selectedMarker.SPEED) / 10} Knots
                        </p>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'center', marginTop: '2px' }}>
          <Link to={`/vessel/${selectedMarker.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <div style={{ 
              display: 'flex',
              margin: '0px',
              padding: '0px', 
              justifyContent: 'center', 
              alignItems: 'center', 
              borderRadius: '50%',
              border: '2px solid white', 
              marginLeft: '15px',
              width: '23px', 
              height: '23px' 
            }}>
                <Icon as={MdOutlineChevronRight} style={{ fontSize: '23px', color: 'white' }}/>

              </div>
              <p style={{ fontSize: '15px', color: 'white', marginLeft: '5px' }}>VIEW</p>

            </Link>
        </div>
          
        </div>
    </Card>
   /*</>     <div style={{
          position: 'absolute',
          bottom: 0,
          height: '33.33%',
          width: '100%',
          zIndex: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent black
        }}>
            <button onClick={close}>Close</button>

          {/* Box content */
        
      
    );
  };
export default InfoBar;