import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React, { useState, useEffect } from 'react';
import VesselInfoBox from './VesselBox'; // Import the VesselInfoBox component
import { Vessel } from './types'; // Import the Vessel interface
import { fetchVessels } from './api';



import markerIcon from '../../assets/icons/animated_marker.gif';

/*
interface Vessel {
  LAT: string;
  LON: string;
  NAME: string; // Add name property
  SHIP_OWNER: string; // Add ship owner property
  // Add other properties as needed
}
*/
const Map: React.FC = () => {
  // const [hoveredVessel, setHoveredVessel] = React.useState<Vessel | null>(null);
  const [vessels, setVessels] = useState<Vessel[]>([]);
 
  //const [vessels, setVessels] = React.useState<Vessel[]>([]);
  const [selectedVessel, setSelectedVessel] = React.useState<Vessel | null>(null);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);

  useEffect(() => {
    fetchVessels().then(fetchedVessels => {
      setVessels(fetchedVessels);
    });
  }, []);

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
        },
       
    ];  
  
    return (
      <div className='map-container'>
      <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'>
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '90vh', position: 'relative'}}
        zoom={3}
        center={{lat: 30.3851, lng: 10.1734}}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}
  
      >
      {vessels.map((vessel, index) => (
        <Marker
          key={index}
          position={{lat: parseFloat(vessel.LAT), lng: parseFloat(vessel.LON)}}
          icon={{
            url: markerIcon, // Replace with your icon URL
            scaledSize: new window.google.maps.Size(60, 60), // Adjust size as needed
            anchor: new window.google.maps.Point(30, 30),
          }}
          onClick={() => {
            setSelectedVessel(vessel);
            setIsPopupOpen(true);
          }}
       // onMouseOver={() => setHoveredVessel(vessel)}
        //onMouseOut={() => setHoveredVessel(null)}
        />
      ))}
      </GoogleMap>
    </LoadScript>
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