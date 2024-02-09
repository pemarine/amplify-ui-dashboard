import React, { useContext, useEffect, useState } from 'react';
//mport { View, useTheme } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';

import { VesselsContext } from '../../utils/VesselsContext';
import { Vessel } from 'src/models';
import { Card, Grid, View } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import './VesselPage.css';
import Map from "./Map"
import Image from "./Image"
import Title from "./Title"



//import { Vessel } from 'src/models';


const VesselPage = () => {
    const { id } = useParams<{ id: string }>();
    const vessels = useContext(VesselsContext);
    const [vessel, setVessel] = useState<Vessel | null>(null);
    const { theme } = useContext(ThemeContext);

  
    useEffect(() => {
        window.scrollTo(0, 0);

        // Get the vessel that matches the id from the URL
        const selectedVessel = vessels.find(vessel => vessel.id === id);
  
        if (selectedVessel) {
            setVessel(selectedVessel);
        } else {
            // Handle the case where no vessel matches the id
            // For example, you could redirect to a "Vessel not found" page
        }
    }, [id, vessels]);
  
    if (!vessel) {
      return <div>Loading...</div>;
    }
  
    return (
      <>
     
        <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="15px">
            <Grid templateColumns="1fr 1fr 1fr" gap="15px" padding="0" >
                <View>
                    <Title vessel={vessel}/>
                    <Image vessel={vessel}/>
                        
                </View>
                <View>

                </View>
                <View>
                    <Map vessel={vessel}/>

                </View>
            </Grid>
            <Grid templateColumns="1fr 1fr 1fr" gap="15px" marginTop="15px">
                <View>
                    <Card
                        className={`amplify-card ${theme}`}
                        height="100%"
                        borderRadius="15px"
                    >
                           
                    </Card>
                </View>
                <View>
                    <Card
                        className={`amplify-card ${theme}`}
                        height="100%"
                        borderRadius="15px"
                    >
                    {/* Content of the second card */}
                    </Card>
                </View>
                <View>
                   <Card
                        className={`amplify-card ${theme}`}
                        height="100%"
                        borderRadius="15px"
                    >
                        {/* Content of the third card */}
                    </Card>
                </View>
            </Grid>
        </View></>
    );
  }
  
export default VesselPage;