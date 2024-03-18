import React, { useContext } from 'react';
import SortButton from './SortButton';
import { ThemeContext } from '../../themes/ThemeContext';
import ViewToggle from './ViewToggle';

const FleetHeader = ({ view, setView }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <div
            className={`fleet-header ${theme}`}
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                position: 'relative', // Add relative positioning to the parent
            }}
        >
            <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                <SortButton />
            </div>
            <div
                style={{
                    position: 'absolute', // Absolute positioning for the center element
                    left: '50%', // Center the element
                    top: '50%', // Center the element
                    transform: 'translate(-50%, -50%)', // Ensure the center of the element is the point of reference



                }}
            >
                <ViewToggle view={view} setView={setView} />


            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                height: '30px'
            }}>
                
            </div>
        </div>
    );
};

export default FleetHeader;