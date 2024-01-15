import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';
import axios from 'axios';

interface Vessel {
  LAT: string;
  LON: string;
  // Add other properties as needed
}

const Map = () => {
 
  const [vessels, setVessels] = React.useState<Vessel[]>([]);
  React.useEffect(() => {
    axios.get('https://services.marinetraffic.com/api/exportvessels/2892a496929507874e0820afc4eaaa5fc31f9f23?v=9&timespan=5&limit=2000&protocol=jsono')
      .then(response => {
        if (response.data && Array.isArray(response.data.DATA)) {
          setVessels(response.data.DATA);
        } else {
          console.error('Unexpected response data structure:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
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
        }
    ];  
  
    return (
      <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'>
      <GoogleMap
        mapContainerStyle={{width: '100%', height: '90vh'}}
        zoom={4}
        center={{lat: 41.3851, lng: 10.1734}}
        options={{styles: mapStyles}}
      >
      {vessels.map((vessel, index) => (
        <Marker
        key={index}
        position={{lat: parseFloat(vessel.LAT), lng: parseFloat(vessel.LON)}}
        />
      ))}
       
      </GoogleMap>
    </LoadScript>
    )
  }

export default Map;