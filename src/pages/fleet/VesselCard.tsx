import React, { useContext, useState } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import './VesselCard.css'; // Import the CSS file
import { Link } from 'react-router-dom';


//import GreenLight from "../../assets/icons/GreenLight.gif";

import { Icon } from "@aws-amplify/ui-react";

import {
 // MdModeEditOutline,
  MdAnchor,
 // MdOutlineTableChart,
} from "react-icons/md";
//import { Parallax } from 'react-scroll-parallax';


const VesselCard = ({ vessel }) => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (
    
    <Card 
      className={`amplify-card ${theme} vessel-card`}
      height="20vh"
      borderRadius="15px"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      
      style={{ backgroundImage: `url(/vessels/${vessel.IMO}.jpg)`, borderTop: '2px solid #00c9ff' }} // Replace .jpg with the actual image extension
      >
     
      {isHovered && (
        <div className="additional-info">
          <p>Destination: {vessel.DESTINATION}</p>
          <p>Last Port: {vessel.LAST_PORT_NAME}</p>
          <p>IMO: {vessel.IMO}</p>
          {/* Add more vessel information as needed */}
        </div>
      )}
      <div className="vessel-footer">
        <Link to={`/vessel/${vessel.id}`}>
          <button className="footer-button">
            <Icon as={MdAnchor} size={25}/>
            <p>OVERVIEW</p>
          </button>
        </Link>
        <button className="footer-button">CLOUD VPN</button>
      </div>
    </Card>
  );
}

export default VesselCard;