import React, { Dispatch, SetStateAction } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';

interface ViewToggleProps {
  view: string;
  setView: Dispatch<SetStateAction<string>>;
}

const ViewToggle: React.FC<ViewToggleProps> = ({ view, setView }) => {
  const handleViewChange = (_: React.MouseEvent<HTMLElement>, newView: string | null) => {
    if (newView) {
      setView(newView);
    }
  };

  const theme = createTheme({
    components: {
        MuiToggleButton: {
            styleOverrides: {
              root: {
                alignItems: 'center',
                width: '45px', // Change width of the ToggleButton
                height: '28px', // Change height of the ToggleButton
                color: '#fff', // Change text color to white
                padding: '10px', // Change padding inside the ToggleButton
                '&.Mui-selected': {
                  backgroundColor: '#00c9ff',
                  zIndex: '0', // Change background color when selected
                  '&:hover': {
                    backgroundColor: '#00c9ff', // Change background color when selected and hovered
                  },
                  '& .MuiSvgIcon-root': {
                    fill: '#082b40', // Change icon fill color to black when selected
                  },
                },
              },
            },
          },
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            fontSize: '21px', // Change icon size
            fill: '#fff', // Change icon fill color to white
            margin: '0 5px', // Add spacing around the SvgIcon
            
          },
        },
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        value={view}
        exclusive
        onChange={handleViewChange}
        aria-label="view"
        sx={{
          border: '1px solid #00c9ff',
          borderRadius: '7px',
         
        }}
      >
        <ToggleButton value="list" aria-label="list view">
          <ViewListIcon />
        </ToggleButton>
        <ToggleButton value="grid" aria-label="grid view">
          <ViewModuleIcon />
        </ToggleButton>
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};

export default ViewToggle;