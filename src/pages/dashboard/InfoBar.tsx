import React, { useContext } from 'react';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";


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
          height='15vh'
          borderRadius="15px"
          marginBottom='15px'
        >
                      <button onClick={handleCloseClick} >Close</button>
                      <h2>{selectedMarker.SHIPNAME}</h2>


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