import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";


const VesselCard = ({ vessel }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Card 
      className={`amplify-card ${theme}`}
      height="300px"
      borderRadius="15px"
    >
      <div>
        <p>Name: {vessel.SHIPNAME}</p>
        <p>Flag: {vessel.FLAG}</p>
        <p>Destination: {vessel.NEXT_PORT_NAME}</p>
        {/* Add more vessel information as needed */}
      </div>
    </Card>
  );
}

export default VesselCard;