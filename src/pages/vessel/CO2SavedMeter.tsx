import React, { useContext } from 'react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from '@aws-amplify/ui-react';


const CO2SavedMeter = ({ vessel }) => {
  const { theme } = useContext(ThemeContext);
  return (
      <><Card
          className={`amplify-card ${theme}`}
          height="30vh"
          borderRadius="15px"
          padding="0"
          margin="0"
          >
          <p>{vessel.id}</p>
          </Card>
          </>
  );
};

export default CO2SavedMeter;