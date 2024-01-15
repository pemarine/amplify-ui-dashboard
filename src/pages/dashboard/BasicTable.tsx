import React from "react";
import {
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from "@aws-amplify/ui-react";
import axios from 'axios';

import styles from './BasicTable.module.css';


interface Vessel {
  SHIP_ID: string;
  SHIPNAME: string;
  FLAG: string;
  // Add other properties as needed
}

const BasicTable = () => {

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
      <Table className={styles.myTable} caption="" highlightOnHover={true}>
        <TableHead>
          <TableRow>
            <TableCell as="th" className={styles.smallColumn}>FLAG</TableCell>
            <TableCell as="th" className={styles.largeColumn}>VESSEL</TableCell>
            <TableCell as="th" className={styles.smallColumn}>STATUS</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {vessels.map((vessel) => (
            
              <TableRow key={vessel.SHIP_ID}>
                <TableCell className="centerContent">
                  <img src={`/flags/${vessel.FLAG}.png`} alt={vessel.FLAG} width="30" height="20" />
                </TableCell>
                <TableCell className="centerContent">{vessel.SHIPNAME}</TableCell>
                <TableCell className="centerContent">OK</TableCell>
              </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default BasicTable;
