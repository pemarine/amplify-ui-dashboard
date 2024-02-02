import { GoogleMap, Marker } from '@react-google-maps/api';
import React, { useContext } from 'react';
//import axios from 'axios';

import markerIcon from '../../assets/icons/animated_marker.gif';
//import { fetchVessels } from './api';
import VesselInfoBox from './VesselBox';
//import { Vessel } from './types';
import { Vessel } from '../../models'
import { VesselsContext } from '../../utils/VesselsContext';

/*
interface Vessel {
  LAT: string;
  LON: string;
  // Add other properties as needed
}
*/

const Map = () => {
 
  //const [vessels, setVessels] = React.useState<Vessel[]>([]);
  const vessels = useContext(VesselsContext);

  const [selectedVessel, setSelectedVessel] = React.useState<Vessel | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
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
  
    return (
      <div className='map-container'>

    {/*  <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'> */}
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '90vh'}}
        zoom={3}
        center={{lat: 41.3851, lng: 10.1734}}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}
        

      >
      {vessels.map((vessel, index) => (
        <Marker
        key={index}
        position={{
          lat: vessel.LAT ? parseFloat(vessel.LAT) : 0, // Replace 0 with your default latitude
          lng: vessel.LON ? parseFloat(vessel.LON) : 0, // Replace 0 with your default longitude
        }}
        icon={{
          url: markerIcon, // Replace with your icon URL
          scaledSize: new window.google.maps.Size(60, 60), // Adjust size as needed
          anchor: new window.google.maps.Point(30, 30),

        }}
        onClick={() => {
          setSelectedVessel(vessel);
          setIsPopupOpen(true);
        }}
        />
      ))}
       
      </GoogleMap>
   {/*  </LoadScript> */}
     {selectedVessel && (
      <VesselInfoBox 
        vessel={selectedVessel} 
        open={isPopupOpen} 
        close={() => setIsPopupOpen(false)} 
      />
    )}
    </div>
    )
  }

export default Map;