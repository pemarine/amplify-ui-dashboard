// SortButton.tsx
import React, { useContext, useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeContext } from "../../themes/ThemeContext";
import { SortContext } from '../../utils/SortContext'; // Import SortContext
import './FleetHeader.css';


const SortButton = () => { // Remove vessels and onSort props
    const { theme } = useContext(ThemeContext);

    const { sortOption, setSortOption } = useContext(SortContext); // Use SortContext
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuOpen, setMenuOpen] = useState(false);


    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        setMenuOpen(true);
    };

    const handleClose = (option) => {
        setAnchorEl(null);
        setSortOption(option); // Update sort option in SortContext
        setMenuOpen(false);
    };


    const themeButton = createTheme({
        typography: {
            fontFamily: [
                'Fellix Medium',
                'Another Font Name',
                // Add more font names as needed
            ].join(','),
        },
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        border: '1px solid #00c9ff',
                        borderRadius: '7px',
                        borderBottom: '1px solid #00c9ff',
                        borderBottomLeftRadius: menuOpen ? '0' : '',
                        borderBottomRightRadius: menuOpen ? '0' : '',
                        paddingTop: '2px',
                        paddingBottom: '2px',
                        width: '75px',
                    },
                },
            },
            MuiList: {
                styleOverrides: {
                    root: {
                        padding: '0px',
                        // Add this line
                    },
                },
            },
            MuiMenu: {
                styleOverrides: {
                    paper: {
                        backgroundColor: '#083450', // Change this to the color you want
                        borderRight: '1px solid #00c9ff',
                        borderBottom: '1px solid #00c9ff',
                        borderLeft: '1px solid #00c9ff',
                        borderBottomLeftRadius: '7px',
                        borderBottomRightRadius: '7px',
                        borderTopLeftRadius: '0px',
                        borderTopRightRadius: '0px',
                        paddingBottom: '2px',
                        width: '75px',

                    },
                },
            },
            MuiMenuItem: {
                styleOverrides: {
                    root: {
                        padding: '2px, 0px, 2px, 0px',
                        paddingLeft: '10px',
                        margin: '0px',
                        backgroundColor: '#083450',
                        fontSize: '14px',
                        color: '#fff' // Change this to the color you want
                    },
                },
            },
        },
    });

    return (
        <ThemeProvider theme={themeButton}>
            <div
                className={`sort-button ${theme}`}
                style={{ display: 'flex', alignItems: 'center' }}
            >
                <Button
                    //className="button-and-menu" 
                    onClick={handleClick}
                    sx={{
                        textTransform: 'none',
                        fontSize: '14px',
                    }}
                >
                    Sort by
                </Button>
                <p>{sortOption}</p>
                <Menu
                    className='button-menu'
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={() => {
                        setMenuOpen(false);
                        handleClose(sortOption)
                    }
                    }
                >
                    <MenuItem
                        className="menu-item"
                        onClick={() => handleClose('Name')}
                        sx={{ my: 0 }}
                    >
                        Name
                    </MenuItem>
                    <MenuItem
                        className="menu-item"
                        onClick={() => handleClose('Flag')}
                        sx={{ my: 0 }}

                    >
                        Flag
                    </MenuItem>
                    {/* Add more MenuItem components as needed */}
                </Menu>
            </div>
        </ThemeProvider>
    );
};

export default SortButton;