import React, { useContext, useEffect, useState } from 'react';
import { Grid, useTheme } from '@aws-amplify/ui-react';
//import { ThemeContext } from "../../themes/ThemeContext";
//import { VesselsContext } from '../dashboard/VesselsContext';
import { VesselsContext } from '../../utils/VesselsContext';
import { sortVessels } from '../../utils/VesselSort';
import { SortContext } from '../../utils/SortContext';
import VesselCard from './VesselCard';
import Title from './Title';


const FleetGrid = () => {
    const vessels = useContext(VesselsContext);
    const { sortOption } = useContext(SortContext);
    const [sortedVessels, setSortedVessels] = useState(vessels);
    const { tokens } = useTheme();

    useEffect(() => {
        const newSortedVessels = sortVessels(vessels, sortOption, 'asc');
        setSortedVessels(newSortedVessels);
      }, [vessels, sortOption]);
    

    return (
        <Grid
            templateColumns={{ base: "repeat(4, 1fr)", large: "repeat(4, 1fr)" }}
            gap={tokens.space.medium}

        >

            {sortedVessels.map((vessel, index) => (
                <div key={index} style={{ display: 'flex', flexDirection: 'column', marginTop: '0px' }}>
                    <Title vessel={vessel} />
                    <VesselCard vessel={vessel} />
                </div>
            ))}
        </Grid>
    )
}
export default FleetGrid;