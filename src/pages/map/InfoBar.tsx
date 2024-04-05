import React, { useContext, useEffect, useState } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Link } from 'react-router-dom';

//import { Vessel } from 'src/models';
import './VesselBox.css';
import './InfoBar.css';
import './Animation.css';
//import IconButton from '@material-ui/core/IconButton';
//import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

import { Icon } from "@aws-amplify/ui-react";
import GaugeChart from './GaugeChart';

import RouteBar from './RouteBar';

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

  const [containerWidth, setContainerWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    //Call handleResize once on mount to get the initial width
    handleResize();
    // Cleanup function to remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount

  if (!selectedMarker) {
    return null;
  }

  const handleCloseClick = () => {
    setSelectedMarker(null);
  };

  return (

    <Card
      className={`InfoBar ${theme}`}
      //    borderRadius="15px"
      padding="0px"
      margin="0px"
      margin-block-end="0px"
      marginBottom="10px"
      style={{ position: 'relative', overflow: 'hidden' }}
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

      <div style={{ display: 'flex', alignItems: 'stretch', overflow: 'hidden' }}> {/* Add this div */}
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', marginRight: '9px', width: '370px' }}>
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '2px' }}>
            <img src={`/flags/${selectedMarker.FLAG.toLowerCase()}.png`}
              height={13}
              alt="Flag"
              style={{
                marginLeft: '0px',
                paddingRight: '10px',
                objectFit: 'contain',
              }}
            />
            <h2 style={{ fontSize: '16px' }}>M/S {selectedMarker.SHIPNAME}</h2>
            <Link to={`/vessel/${selectedMarker.id}`} style={{ textDecoration: 'none', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
              <div style={{
                display: 'flex',
                margin: '0px',
                // marginTop: '2px',
                padding: '0px',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '50%',
                border: '2px solid white',
                marginLeft: '7px',
                width: '18px',
                height: '18px'
              }}>
                <Icon as={MdOutlineChevronRight} style={{ fontSize: '17px', color: 'white' }} />
              </div>
            </Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'row', marginTop: '5px' }}>
            <img src={`/vessels/${selectedMarker.IMO}.jpg`} alt="Vessel" style={{
              marginRight: '0px', height: '130px', width: '205px', borderRadius: '15px'
            }} />
            {/*}   <Card
                        className={`amplify-card ${theme}`}
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start', // Override justifyContent
                            alignItems: 'center', // Override alignItems
                            borderRadius: '15px',
                            margin: '0',
                            padding: '4px'
                        }}
                    > */}

            <div style={{ display: 'flex', flexDirection: 'column', marginLeft: '9px' }}>
              <p style={{ fontSize: '12px' }}>IMO: {selectedMarker.IMO}</p>
              <p style={{ fontSize: '12px' }}>
                TYPE: {selectedMarker.MARKET.charAt(0).toUpperCase() + selectedMarker.MARKET.slice(1).toLowerCase()}
              </p>
              <p style={{ fontSize: '12px' }}>
                SPEED: {Number(selectedMarker.SPEED) / 10} Knots
              </p>
            </div>
            {/*} </Card> */}

          </div>
          <RouteBar vessel={selectedMarker} />
        </div>
      
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
        <GaugeChart
            title="Engine Vent Power"
            id="gauge-chart1"
            nrOfLevels={3}
            colors={["#04C220", "#ffc01d", "#EE2219"]}
            needleColor="#d9d9d6"
            hideText={true}
            bottomColor1="#00a339"
            bottomColor2="#029636"
            width={containerWidth}



            // arcWidth={0.3}
            percent={0.37}
            arcWidth={0.2}
            marginInPercent={0.11}
          //textColor="#000000"
          />
          <GaugeChart
            title="Engine Vent Power"
            id="gauge-chart1"
            nrOfLevels={3}
            colors={["#04C220", "#ffc01d", "#EE2219"]}
            needleColor="#d9d9d6"
            hideText={true}
            bottomColor1="#00a339"
            bottomColor2="#029636"
            width={containerWidth}



            // arcWidth={0.3}
            percent={0.37}
            arcWidth={0.2}
            marginInPercent={0.11}
          //textColor="#000000"
          />
          <GaugeChart
            title="Engine Vent Power"
            id="gauge-chart1"
            nrOfLevels={3}
            colors={["#04C220", "#ffc01d", "#EE2219"]}
            needleColor="#d9d9d6"
            hideText={true}
            bottomColor1="#00a339"
            bottomColor2="#029636"
            width={containerWidth}



            // arcWidth={0.3}
            percent={0.37}
            arcWidth={0.2}
            marginInPercent={0.11}
          //textColor="#000000"
          />

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