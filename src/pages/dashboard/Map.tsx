import { GoogleMap, Marker } from '@react-google-maps/api';

import React, { useContext } from 'react';
//import axios from 'axios';

import markerIcon from '../../assets/icons/animated_marker.gif';
import GreenAnimatedMarker from '../../assets/icons/GreenAnimatedMarker.gif';

//import { fetchVessels } from './api';
//import VesselInfoBox from './VesselBox';
//import { Vessel } from './types';
//import { Vessel } from '../../models'
import { VesselsContext } from '../../utils/VesselsContext';
//import { Vessel } from 'src/models';

/*
interface Vessel {
  LAT: string;
  LON: string;
  // Add other properties as needed
}
*/

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
  const mapHeight = isInfoBarOpen ? '10vh' : '80vh';


 // const [selectedVessel, setSelectedVessel] = React.useState<Vessel | null>(null);
// const [isPopupOpen, setIsPopupOpen] = React.useState(false);
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
   // const [map, setMap] = React.useState<GoogleMap | null>(null);
    const [center, setCenter] = React.useState({ lat: 25, lng: 0 });

    const onMapLoad = React.useCallback((map) => {
      setCenter(map);
    }, []);

    const onMarkerClick = (vessel: any) => {
      setSelectedVesselId(vessel.id);

      setSelectedMarker(vessel);
      
      //setSelectedMarkerIndex(index);

     // setLocalSelectedMarker(vessel);
      //isInfoBarOpen = true;
      setCenter({ lat: vessel.LAT, lng: vessel.LON });

    };

 

  
    return (
      <div className='map-container'style={{ height: mapHeight, width: '100%', marginTop: '15px' }}>


    {/*  <LoadScript googleMapsApiKey='AIzaSyBxU5YOF-cbBZaoc6hgovIsf0-oYuqFT9M'> */}
      <GoogleMap
         key={isInfoBarOpen ? 'open' : 'closed'}
         onLoad={onMapLoad}

        mapContainerStyle={{width: '100%', height: mapHeight, borderRadius: '15px'}}
        zoom={3}
        center={center}
        options={{
          styles: mapStyles,
          streetViewControl: false,
        }}
        

      >
      {vessels.map((vessel, index) => {
      return (
        <Marker
        key={index}
        position={{
          lat: vessel.LAT ? parseFloat(vessel.LAT) : 0, // Replace 0 with your default latitude
          lng: vessel.LON ? parseFloat(vessel.LON) : 0, // Replace 0 with your default longitude
        }}
        icon={{
          
          url: vessel.id === selectedVesselId ? GreenAnimatedMarker : markerIcon,
          scaledSize: new window.google.maps.Size(60, 60), // Adjust size as needed
          anchor: new window.google.maps.Point(30, 30),

        }}
        onClick={() => {
          //setSelectedVessel(vessel);
     
          onMarkerClick(vessel);
          
          //setIsPopupOpen(true);
        }}
        />
        );
})}
       
      </GoogleMap>
   {/*  </LoadScript> 
     {selectedVessel && (
      <VesselInfoBox 
        vessel={selectedVessel} 
        open={isPopupOpen} 
        close={() => setIsPopupOpen(false)} 
      />
    )}
    */}
    </div>
    )
  }

export default Map;