import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';


const mapConfiguration = {
  googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  center: { lat: 50, lng:10},
  zoom: 4
}



const Map = () => {


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
        }
    ];  

  
    
    return (
       <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'>
         <GoogleMap
           mapContainerStyle={{width: '100%', height: '90vh'}}
           zoom={mapConfiguration.zoom}
           center={mapConfiguration.center}
           options={{
              styles: mapStyles,
              streetViewControl: false,
            }}
         />
       </LoadScript>
    )
  }

export default Map;