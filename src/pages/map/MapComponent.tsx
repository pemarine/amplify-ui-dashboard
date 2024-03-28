import { OverlayView } from '@react-google-maps/api';

import React, { useContext } from 'react';
//import { useLottie, LottieOptions } from 'lottie-react';
import { GoogleMap } from '@react-google-maps/api';
//import { View } from '@aws-amplify/ui-react';
import Lottie from 'lottie-react';
//import simplify from 'simplify-js';


//import axios from 'axios';

//import BlueAnimatedMarker from '../../assets/icons/AnimatedBlueMarker.gif';
//import GreenAnimatedMarker from '../../assets/icons/GreenAnimatedMarker.gif';
//import YellowAnimatedMarker from '../../assets/icons/YellowAnimatedMarker.gif';
//import RedAnimatedMarker from '../../assets/icons/RedAnimatedMarker.gif';

//import { fetchVessels } from './api';
//import VesselInfoBox from './VesselBox';
//import { Vessel } from './types';
//import { Vessel } from '../../models'
import { VesselsContext } from '../../utils/VesselsContext';
//import { Vessel } from 'src/models';
//import { Vessel } from 'src/models';
import { getStatusMarker } from '../../utils/VesselStatus';


/*
interface Vessel {
  LAT: string;
  LON: string;
  // Add other properties as needed
}
*/
import './Animation.css';
/*
import BlueAnimatedMarker from '../../assets/lottie/BlueAnimatedMarker.json';
import GreenAnimatedMarker from '../../assets/lottie/GreenAnimatedMarker.json';
import YellowAnimatedMarker from '../../assets/lottie/YellowAnimatedMarker.json';
import RedAnimatedMarker from '../../assets/lottie/RedAnimatedMarker.json';

const lottieFiles = {
  BlueAnimatedMarker,
  GreenAnimatedMarker,
  YellowAnimatedMarker,
  RedAnimatedMarker,
}; */
interface MapProps {
  setSelectedMarker: (marker: any) => void;
  isInfoBarOpen: boolean;
  setSelectedVesselId: (id: string) => void;
  selectedVesselId: string | null;
  //setSelectedMarkerIndex: (index: number) => void;
  //selectedMarkerIndex: number | null;

}

const Map: React.FC<MapProps> = ({ setSelectedVesselId, selectedVesselId, setSelectedMarker, isInfoBarOpen }) => {

  //const [vessels, setVessels] = React.useState<Vessel[]>([]);
  //const [localSelectedMarker, setLocalSelectedMarker] = React.useState<Vessel | null>(null);
  const vessels = useContext(VesselsContext);
  const mapHeight = isInfoBarOpen ? '10vh' : '90vh';
  const [center, setCenter] = React.useState({ lat: 25, lng: 0 });

  const [hoveredVessel, setHoveredVessel] = React.useState<string | null>(null);

  // const [selectedVessel, setSelectedVessel] = React.useState<Vessel | null>(null);
  // const [isPopupOpen,c setIsPopupOpen] = React.useState(false);
  /*
  React.useEffect(() => {
    const fetchData = async () wwh=> {
      const data = await fetchVessels();
      setVessels(data);
    };

    fetchData();
  }, []);
*/
  const mapStyles = [
    {
      featureType: "all",
      elementType: "geometry.fill",
      stylers: [
        { color: "#f7f7f7" } // white land
      ]
    },
    {
      featureType: "water",
      stylers: [
        { color: "#80e4ff" }, // bright blue water
      ]
    },
    {
      featureType: "administrative.locality",
      elementType: "labels",
      stylers: [
        { visibility: "off" } // hide city labels
      ]
    },
    {
      featureType: "road",
      stylers: [
        { visibility: "off" } // hide roads
      ]
    },
    {
      featureType: "water",
      elementType: "labels",
      stylers: [
        { visibility: "on" } // show labels on water
      ]
    }
  ];


  const onMarkerClick = (vessel: any) => {
    setSelectedVesselId(vessel.id);
    setSelectedMarker(vessel);
    setCenter({ lat: vessel.LAT, lng: vessel.LON });
  };

  return (
    <div className='mapAnimation' style={{ height: mapHeight, width: '100%', marginTop: '5px' }}>
      <GoogleMap
        key={isInfoBarOpen ? 'open' : 'closed'}
        mapContainerStyle={{ width: '100%', height: mapHeight, borderRadius: '15px' }}
        zoom={3}
        center={center}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}
      >

        {vessels.map((vessel, index) => (
          <React.Fragment key={index}>
            <OverlayView
              position={{
                lat: vessel.LAT ? parseFloat(vessel.LAT) : 0,
                lng: vessel.LON ? parseFloat(vessel.LON) : 0,
              }}
              mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
            >
              <div
                onClick={() => onMarkerClick(vessel)}
                style={{
                  position: 'absolute',
                  transform: 'translate(-50%, -50%)',
                  zIndex: '90',
                }}
                onMouseEnter={() => setHoveredVessel(vessel.SHIPNAME || null)}
                onMouseLeave={() => setHoveredVessel(null)}
              >
                <Lottie animationData={getStatusMarker(vessel, selectedVesselId || '')} style={{ width: 23, height: 23 }} />
                {hoveredVessel === vessel.SHIPNAME && (
                  <div style={{
                    position: 'absolute',
                    fontSize: '10px',
                    top: '50%', // Modify this line
                    right: '100%', // Modify this line
                    transform: 'translate(0, -50%)', // Modify this line
                    zIndex: '1000',
                  

                    backgroundColor: 'rgba(16, 24, 32, 0.85)',
                    color: 'white',
                    padding: '5px',
                    borderRadius: '5px',
                  //  margin: '6px',
                    whiteSpace: 'nowrap',
                    boxShadow: '0px 0px 10px 2px rgba(0, 0, 0, 0.2)', // Add this line

                  }}>
                    {vessel.SHIPNAME}
                  </div>
                )}
              </div>
            </OverlayView>
            {/* {(vessel.positionsList ?? []).sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()).map((position, index, arr) => {
              if (index < arr.length - 1) {
                const nextPosition = arr[index + 1];
                return (
                  <Polyline
                    key={index} // add a key
                    path={[
                      { lat: parseFloat(position.lat), lng: parseFloat(position.lng) },
                      { lat: parseFloat(nextPosition.lat), lng: parseFloat(nextPosition.lng) },
                    ]}
                    options={{
                      strokeColor: "#FF0000",
                      strokeOpacity: 1.0,
                      strokeWeight: 2,
                    }}
                  />
                );
              } else {
                return null;
              }
            })}
            */}
          </React.Fragment>
        ))}

      </GoogleMap>
    </div>
  );
};

export default Map;