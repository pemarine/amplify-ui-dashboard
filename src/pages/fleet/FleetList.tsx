import React, { useContext, useState } from 'react';
import { VesselsContext } from '../../utils/VesselsContext';
import { List, ListItem, ListItemText, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../themes/ThemeContext";
import './FleetList.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FleetList = () => {
    const vessels = useContext(VesselsContext);
    const { theme } = useContext(ThemeContext);

    const [sortConfig, setSortConfig] = useState({ key: 'SHIPNAME', direction: 'ascending' });

    const sortedVessels = [...vessels].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
        }
        return 0;
    });

    const requestSort = (key) => {
        let direction = 'ascending';
        if (sortConfig.key === key && sortConfig.direction === 'ascending') {
            direction = 'descending';
        }
        setSortConfig({ key, direction });
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
                        fontSize: '15px', // change font size
                    },
                    secondary: {
                        fontSize: '15px', // change font size
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={customTheme}>
            <div className='fleet-list-container'>
                <List className={`fleet-list ${theme}`} style={{ padding: '0px' }} disablePadding>
                    <ListItem>
                        <Grid container>
                            <Grid item xs={2}><ListItemText primary="Status" className="fleet-list-text" onClick={() => requestSort('id')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Flag" className="fleet-list-text" onClick={() => requestSort('FLAG')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Name" className="fleet-list-text" onClick={() => requestSort('SHIPNAME')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="IMO" className="fleet-list-text" onClick={() => requestSort('IMO')} /></Grid>
                            <Grid item xs={2}><ListItemText primary="Status Icon" className="fleet-list-text" /></Grid>
                            <Grid item xs={2}><ListItemText primary="Vessel Page" className="fleet-list-text" /></Grid>
                        </Grid>
                    </ListItem>

                    {sortedVessels.map((vessel) => (
                        <ListItem key={vessel.id}>
                            <Grid container style={{ padding: 0, margin: 0 }} spacing={0} gap={0}>
                                <Grid item xs={2} style={{ padding: '0px', margin: '0px' }}>
                                <img src={`/vessels/${vessel.IMO}.jpg`} height={40} width={55} style={{padding: '0px', margin: '0px'}} />
                                </Grid>
                                <Grid item xs={2}><ListItemText primary={vessel.FLAG} className="fleet-list-text" /></Grid>
                                <Grid item xs={2}><ListItemText primary={vessel.SHIPNAME} className="fleet-list-text" /></Grid>
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