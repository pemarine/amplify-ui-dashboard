import { GoogleMap, Marker } from '@react-google-maps/api';
import React from 'react';
//import axios from 'axios';

import markerIcon from '../../assets/icons/animated_marker.gif';


const Map = ({vessel}) => {
 

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
    const defaultCenter = {
      lat: vessel.LAT ? parseFloat(vessel.LAT) : 0, // Replace 0 with your default latitude
      lng: vessel.LON ? parseFloat(vessel.LON) : 0, // Replace 0 with your default longitude
    };
  
    return (
      <div className='map-container'>

    {/*  <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'> */}
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '33vh', borderRadius: '15px'}}
        zoom={6}
        center={defaultCenter}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}

        

      >
      
        <Marker
       
        key={vessel.id}
        position={defaultCenter}
        icon={{
          url: markerIcon, // Replace with your icon URL
          scaledSize: new window.google.maps.Size(60, 60), // Adjust size as needed
          anchor: new window.google.maps.Point(30, 30),
        }}/>
        
   
       
      </GoogleMap>
    </div>
    )
  }

export default Map;