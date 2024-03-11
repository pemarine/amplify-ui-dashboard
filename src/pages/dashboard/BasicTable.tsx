import React, { useContext } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
//import axios from 'axios';

import './BasicTable.css';
import '@aws-amplify/ui-react/styles.css';

import { ThemeContext } from "../../themes/ThemeContext";
import { VesselsContext } from '../../utils/VesselsContext'; // Import the VesselsContext
//import GreenLight from "../../assets/icons/GreenLight.gif";
import Lottie from 'lottie-react';

//import { fetchVessels } from "./api";
//import { Vessel } from "./types";

/*interface Vessel {
  SHIP_ID: string;
  SHIPNAME: string;
  FLAG: string;
  // Add other properties as needed
}*/
/*import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';*/
import { getStatusIcon } from '../../utils/VesselStatus';

import './Animation.css';
import BlueAnimatedMarker from '../../assets/lottie/BlueAnimatedMarker.json';
import GreenAnimatedMarker from '../../assets/lottie/GreenAnimatedMarker.json';
import YellowAnimatedMarker from '../../assets/lottie/YellowAnimatedMarker.json';
import RedAnimatedMarker from '../../assets/lottie/RedAnimatedMarker.json';
import GreenAnimatedTableMarker from '../../assets/lottie/tableMarker/GreenAnimatedTableMarker.json';

const lottieFiles = {
  BlueAnimatedMarker,
  GreenAnimatedMarker,
  YellowAnimatedMarker,
  RedAnimatedMarker,
  GreenAnimatedTableMarker
};


const BasicTable = ({ onRowClick }) => {
  /*
  const [vessels, setVessels] = React.useState<Vessel[]>([]);
  */
  const { theme } = useContext(ThemeContext);

  const vessels = useContext(VesselsContext);
  console.log('Vessels in BasicTable:', vessels); // Add this
  // console.log(vessels); // Check the structure of the vessels data

  /* React.useEffect(() => {
     const fetchData = async () => {
       const data = await fetchVessels();
       setVessels(data);
     };
 
     fetchData();
   }, []);
   */


  /* const [vessels, setVessels] = React.useState<Vessel[]>([]);
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
   }, []); */
   const speeds = [1, 1.2, 1.35, 0.7, 0.9];
const speedList = vessels.map(() => speeds[Math.floor(Math.random() * speeds.length)]);

  return (
    <>
      <Table
        size="small"
        highlightOnHover={true}
        className={`amplify-table ${theme}`}
        //className="amplify-table__th"
        // className="amplify-table"
        style={{ width: '420px' }}
      >
        <TableHead>
          <TableRow>
            <TableCell as="th" style={{ width: '10%' }}>FLAG</TableCell>
            <TableCell as="th" style={{ width: '80%', paddingLeft: '20px' }}>VESSEL</TableCell>
            <TableCell as="th" style={{ width: '10%', transform: 'translate(-19px, 0px)' }}>STATUS</TableCell>
          {/*}  <TableCell as="th" style={{ width: '80px' }}>GO TO</TableCell> {*/ }

          </TableRow>
        </TableHead>

        <TableBody>
          {vessels.map((vessel, index) => (

            <TableRow onClick={() => onRowClick(vessel)}>
              <TableCell className='flag' style={{ width: '45px' }}>
                {vessel.FLAG && <img src={`/flags/${vessel.FLAG.toLowerCase()}.png`} alt={vessel.FLAG} width="26" height="17" />}
              </TableCell>
              <TableCell style={{ width: '340px', paddingLeft: '20px' }}>M/S {vessel.SHIPNAME}</TableCell>
              <TableCell style={{ width: '80px', padding: '0px', margin: '0px' }}>
                <Lottie
                  animationData={{ ...lottieFiles[getStatusIcon(vessel)], speed: speedList[index] }}
                  style={{ width: 22, height: 22, padding: 0, margin: 0, filter: 'brightness(110%)', alignContent: 'center'}}
                />
              </TableCell>
             {/*} <TableCell style={{ width: '80px' }}>
                <Link to={`/vessel/${vessel.id}`} style={{ margin: 0, padding: 0 }}>
                  <IconButton aria-label="" style={{color: 'white', margin: 0, padding: 0, fontSize: '30px' }}>
                    <ArrowForwardIcon />
                  </IconButton>
                </Link>
              </TableCell>
          {*/}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
