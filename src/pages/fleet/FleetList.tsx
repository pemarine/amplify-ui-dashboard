import React, { useContext, useState } from 'react';
import { VesselsContext } from '../../utils/VesselsContext';
//import { Link } from 'react-router-dom';
import { ThemeContext } from "../../themes/ThemeContext";
import './FleetList.css';
//import { createTheme, ThemeProvider } from '@mui/material/styles';
import { sortVessels } from '../../utils/VesselSort';
//import { getStatusIcon } from '../../utils/VesselStatus';


import { List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    headerRow: {
        borderBottom: '2px solid #00c9ff',
        paddingBottom: '6px',
        marginBottom: '4px',

    },
    bodyRow: {
        borderBottom: '1px dashed #314C5C',

    },
    customGridItem: {
      // Add your styles here
      backgroundColor: 'red', // Example style
    },
  });


const FleetList = () => {
    const vessels = useContext(VesselsContext);
    const { theme } = useContext(ThemeContext);

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
    const customTheme = createTheme({
        typography: {
            fontFamily: [
                'Fellix Medium',
                'Another Font Name',
                // Add more font names as needed
            ].join(','),
        },
        components: {
            MuiListItem: {
                styleOverrides: {
                    root: {
                        paddingTop: '0px', // remove padding
                        paddingBottom: '0px',
                        marginTop: 0, // remove margin
                        marginBottom: 0,
                    },
                },
            },
            MuiGrid: {
                styleOverrides: {
                    root: {
                        paddingTop: '0px', // remove padding
                        paddingBottom: '0px',
                        marginTop: 0, // remove margin
                        marginBottom: 0,
                        display: 'flex', // add this
                        alignItems: 'center', // add this
                    },
                },

            },
            MuiListItemText: {
                styleOverrides: {
                    root: {
                        paddingTop: '0px', // remove padding
                        paddingBottom: '0px',
                        marginTop: 0, // remove margin
                        marginBottom: 0,
                    },
                    primary: {
                        fontSize: '13px', // change font size
                    },
                    secondary: {
                        fontSize: '12px', // change font size
                    },
                },
            },
        },
    });
    
    const classes = useStyles(); // Use your custom styles
    

    return (
        <ThemeProvider theme={customTheme}>
            <div className='fleet-list-container'>
                <List className={`fleet-list ${theme}`} >
                    <ListItem className={classes.headerRow}>
                        <Grid container>
                            <Grid item xs={1}><ListItemText primary="Status" className="fleet-list-text" onClick={() => handleHeaderClick('Status')} /></Grid>
                            <Grid item xs={1}><ListItemText primary="Flag" className="fleet-list-text" onClick={() => handleHeaderClick('FLAG')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Fleet" className="fleet-list-text" onClick={() => handleHeaderClick('Name')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Name" className="fleet-list-text" onClick={() => handleHeaderClick('Name')} /></Grid>

                            <Grid item xs={2}><ListItemText primary="IMO" className="fleet-list-text" onClick={() => handleHeaderClick('IMO')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Status Icon" className="fleet-list-text" /></Grid>
                            <Grid item xs={2}><ListItemText primary="Vessel Page" className="fleet-list-text" /></Grid>
                        </Grid>
                    </ListItem>

                    {sortedVessels.map((vessel) => (
                        <ListItem key={vessel.id} className={classes.bodyRow}>
                            <Grid container>
                                <Grid item xs={1} style={{ padding: '0px', margin: '0px' }}>
                                </Grid>
                                <Grid item xs={1}>
                                  {vessel.FLAG && <img src={`/flags/${vessel.FLAG.toLowerCase()}.png`} alt={vessel.FLAG} width="22" height="16" />}   
                                </Grid>
                                <Grid item xs={2}><ListItemText primary={vessel.fleet} className="fleet-list-text" /></Grid>
                                <Grid item xs={2}><ListItemText primary={vessel.SHIPNAME.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())} className="fleet-list-text" /></Grid>
                                <Grid item xs={2}><ListItemText primary={vessel.IMO} className="fleet-list-text" /></Grid>
                                <Grid item xs={2}>
                                    <Button component={Link} to={`/vessel/${vessel.id}`}>
                                        Go to Vessel Page
                                    </Button>
                                </Grid>
                            </Grid>
                        </ListItem>
                    ))}
                </List>
            </div>
        </ThemeProvider>
    );
};

export default FleetList;