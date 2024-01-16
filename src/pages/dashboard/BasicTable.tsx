import React, { useContext } from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import axios from 'axios';

import './BasicTable.css';
import '@aws-amplify/ui-react/styles.css';

import { ThemeContext } from "../../themes/ThemeContext";


interface Vessel {
  SHIP_ID: string;
  SHIPNAME: string;
  FLAG: string;
  // Add other properties as needed
}

const BasicTable = () => {
  const { theme } = useContext(ThemeContext);

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

  return (
    <>
      <Table
        size="small"
        highlightOnHover={true}
        className={`amplify-table ${theme}`}
        //className="amplify-table__th"
       // className="amplify-table"
        style={{width: '400px'}}
      >
        <TableHead>
          <TableRow>
            <TableCell as="th" style={{width: '20%'}}>FLAG</TableCell>
            <TableCell as="th" style={{width: '55%'}}>VESSEL</TableCell>
            <TableCell as="th" style={{width: '25%'}}>STATUS</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {vessels && vessels.map((vessel) => (
            
            <TableRow key={vessel.SHIP_ID}>
              <TableCell style={{width: '20%'}}>
                <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="30" height="20" />         
              </TableCell>
              <TableCell style={{width: '60%'}}>{vessel.SHIPNAME}</TableCell>
              <TableCell style={{width: '20%'}}>OK</TableCell>
          </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
