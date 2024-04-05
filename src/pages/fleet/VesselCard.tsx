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
import { CardMedia } from '@mui/material';
//import { Parallax } from 'react-scroll-parallax';


const VesselCard = ({ vessel }) => {
  const { theme } = useContext(ThemeContext);
  const [isHovered, setIsHovered] = useState(false);

  return (

    <Card
      className={`amplify-card ${theme} vessel-card`}
      height="21vh"
      borderRadius="15px"
      padding="0"
      margin="0"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}

      style={{
        backgroundImage: `url(/vessels/${vessel.IMO}.jpg)`,
        borderTop: '2px solid #00c9ff',
        //  animation: 'color-shift 4s infinite linear'
      }}
    >
      <CardMedia
        component="img"
        width="100%"
        height="100%"
        image={`/vessels/${vessel.IMO}.jpg`}
        alt="Your description"
        sx={{
          zIndex: 0,
          position: 'absolute',
        }}
      />
      <div className="vessel-content">
        {isHovered && (
          <div className="additional-info">
            <p>Destination: {vessel.DESTINATION}</p>
            <p>Last Port: {vessel.LAST_PORT_NAME}</p>
            <p>IMO: {vessel.IMO}</p>
            {/* Add more vessel information as needed */}
          </div>
        )}
        <div className="vessel-footer">
          <Link to={`/vessel/${vessel.id}`} style={{ textDecoration: 'none' }}>
            <button className="footer-button">
              <Icon as={MdAnchor} size={22} />
              <p>Overview</p>
            </button>
          </Link>
          {/*}
        <div className="vessel-footer-speed">
          <p>
          {vessel.SPEED} Knots
          </p>
        </div>
        */}
          {/*}  <button className="footer-button">CLOUD VPN</button> */}
        </div>
      </div>
    </Card>
  );
}

export default VesselCard;