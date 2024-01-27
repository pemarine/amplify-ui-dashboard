import React, { useContext, useState } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import './VesselCard.css'; // Import the CSS file

import GreenLight from "../../assets/icons/GreenLight.gif";

import { Icon } from "@aws-amplify/ui-react";

import {
 // MdModeEditOutline,
  MdAnchor,
 // MdOutlineTableChart,
} from "react-icons/md";


const VesselCard = ({ vessel }) => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={`amplify-card ${theme} vessel-card`}
      height="300px"
      borderRadius="15px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ backgroundImage: `url(/vessels/${vessel.IMO}.jpg)` }} // Replace .jpg with the actual image extension
      >
      <div className={'vessel-header'}>
        <div className='vessel-header-label'>
          <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="24" height="16"/>         
          <p style={{ marginLeft: '10px' }}>M/S {vessel.SHIPNAME}</p>
        </div>
        <div className='vessel-header-imo'>
          <img src={GreenLight} alt="Green light" width="15" height="15" style={{ marginRight: '5px' }}/>

          <p>IMO: {vessel.IMO}</p>

        </div>
      </div>
      {isHovered && (
        <div className="additional-info">
          <p>Destination: {vessel.NEXT_PORT_NAME}</p>
          <p>Last Port: {vessel.LAST_PORT_NAME}</p>
          <p>IMO: {vessel.IMO}</p>
          {/* Add more vessel information as needed */}
        </div>
      )}
      <div className="vessel-footer">
        <button className="footer-button">
          <Icon as={MdAnchor} size={25}/>
          <p>OVERVIEW</p>

        </button>
        <button className="footer-button">CLOUD VPN</button>
      </div>
    </Card>
  );
}

export default VesselCard;