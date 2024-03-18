import React, { useContext } from 'react';
import { VesselsContext } from '../../utils/VesselsContext';
import { List, ListItem, ListItemText, ListItemAvatar, Avatar, Button, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { ThemeContext } from "../../themes/ThemeContext";
import './FleetList.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const FleetList = () => {
    const vessels = useContext(VesselsContext);
    const { theme } = useContext(ThemeContext);

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
                        paddingTop: '2px', // remove padding
                        paddingBottom: '2px',
                        marginTop: 0, // remove margin
                        marginBottom: 0,
                    },
                },
            },
            MuiListItemText: {
                styleOverrides: {
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
            <List
                className={`fleet-list ${theme}`}
                style={{ padding: '0px' }}
                disablePadding
            >
                <ListItem>
                    <Grid container>
                        <Grid item xs={2}><ListItemText primary="#" className="fleet-list-text" /></Grid>
                        <Grid item xs={2}><ListItemText primary="Flag" className="fleet-list-text" /></Grid>
                        <Grid item xs={2}><ListItemText primary="Vessel Name" className="fleet-list-text" /></Grid>
                        <Grid item xs={2}><ListItemText primary="IMO" className="fleet-list-text" /></Grid>
                        <Grid item xs={2}><ListItemText primary="Status Icon" className="fleet-list-text" /></Grid>
                        <Grid item xs={2}><ListItemText primary="Vessel Page" className="fleet-list-text" /></Grid>
                    </Grid>
                </ListItem>

                {vessels.map((vessel) => (
                    <ListItem key={vessel.id}>
                        <Grid container>
                            <Grid item xs={2}>
                                <ListItemAvatar>
                                    <Avatar variant="circular" src={`/vessels/${vessel.IMO}.jpg`} />
                                </ListItemAvatar>
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
        </ThemeProvider>
    );
};

export default FleetList;