import React, { useContext, useState } from "react";
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
import { sortVessels } from '../../utils/VesselSort';

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
//import { getHighestStatusValue } from "../../utils/VesselStatus";

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

  const [sortOption, setSortOption] = useState('Status'); // Add this state variable
  const [sortDirection, setSortDirection] = useState('asc'); // Add this state variable


  // Modify this function to use the sortVessels function
  const sortedVessels = sortVessels(vessels, sortOption, sortDirection); // Modify this function to accept sort direction

  // Add this function to handle clicks on the table headers
  const handleHeaderClick = (newSortOption) => {
    if (newSortOption === sortOption) {
      // If the header is clicked again, toggle the sort direction
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      // If a different header is clicked, set the sort direction to the default
      setSortOption(newSortOption);
      setSortDirection('asc');
    }
  };


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
        style={{ width: 'auto' }}
      >
         <TableHead>
        <TableRow>
          <TableCell as="th" style={{ width: '10%' }} onClick={() => handleHeaderClick('Flag')}>FLAG</TableCell>
          <TableCell as="th" style={{ width: '80%', paddingLeft: '20px' }} onClick={() => handleHeaderClick('Name')}>VESSEL</TableCell>
          <TableCell as="th" style={{ width: '10%', transform: 'translate(-19px, 0px)' }} onClick={() => handleHeaderClick('Status')}>STATUS</TableCell>
        </TableRow>
      </TableHead>

        <TableBody>
          {sortedVessels.map((vessel, index) => (

            <TableRow key={index} onClick={() => onRowClick(vessel)}>
              <TableCell className='flag' style={{ width: '10%' }}>
                {vessel.FLAG && <img src={`/flags/${vessel.FLAG.toLowerCase()}.png`} alt={vessel.FLAG} width="26" height="17" />}
              </TableCell>
              <TableCell style={{ width: '80%', paddingLeft: '20px' }}>M/S {vessel.SHIPNAME}</TableCell>
              <TableCell style={{ width: '10%', padding: '0px', margin: '0px' }}>
                <Lottie
                  animationData={{ ...lottieFiles[getStatusIcon(vessel)], speed: speedList[index] }}
                  style={{ width: 14, height: 14, padding: 0, margin: 0, filter: 'brightness(110%)', alignContent: 'center' }}
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
