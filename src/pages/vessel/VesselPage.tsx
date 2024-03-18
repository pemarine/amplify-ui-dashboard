import React, { useContext, useEffect, useState } from 'react';
//mport { View, useTheme } from '@aws-amplify/ui-react';
import { useParams } from 'react-router-dom';

import { VesselsContext } from '../../utils/VesselsContext';
import { Vessel } from '../../models';
import { Card, Grid, View } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import './VesselPage.css';
import Map from "./Map"
import Image from "./Image"
import Title from "./Title"
import MiniStatistics from "./MiniStatistics";
//import { MdRemoveRedEye} from "react-icons/md";
import { MdCo2 } from "react-icons/md";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { MdOilBarrel } from "react-icons/md";

//import SeoChartCard from '../../ui-components/cards/SeoChartCard';
//import chartData from './chart-data';

//import { Customers } from '../../ui-components';
import { Meter } from './Meter';
import RouteBar from './RouteBar';
import GaugeChart from './GaugeChart';
//<Customers />

//import Element from "./Element"

//import CO2SavedMeter from './CO2SavedMeter';

//import { Halfcirclechart } from '../../ui-components';


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

    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        // Call handleResize once on mount to get the initial width
        handleResize();

        // Cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleanup on unmount




    if (!vessel) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Grid
                templateColumns="1fr 3fr 1fr"
                marginTop="10px"
                gap="9px"
                height="20%"
                padding="0"
                alignItems="stretch"
            >
                <View>
                    <Title vessel={vessel} />
                    <Image vessel={vessel} />
                    <RouteBar vessel={vessel} />



                </View>
                <View
                /*   style={{
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'stretch',
                       height: '40%',
                     }}
               */
                >
                    <Grid templateColumns="1fr 1fr 1fr" gap="9px">
                        <View>
                            <MiniStatistics
                                title="Energy savings"
                                subtitle="total for time period (default this year)"
                                amount="321,236"
                                icon={<MdOutlineEnergySavingsLeaf />}
                                measurement="MWh"
                                color1="#082b40"
                                color2="#063b52"
                            />
                        </View>
                        <View>
                            <MiniStatistics
                                title="Fuel savings"
                                subtitle="total for time period (default this year)"
                                amount="321,236"
                                icon={<MdOilBarrel />}
                                measurement="t"
                                color1="#082b40"
                                color2="#063b52"
                            />
                        </View>
                        <MiniStatistics
                            title="CO2 savings"
                            subtitle="total for time period (default this year)"

                            amount="321,236"
                            icon={<MdCo2 />}
                            measurement="t"
                            color1="#082b40"
                            color2="#063b52"
                        />
                        <View>

                        </View>
                    </Grid>
                    <Grid templateColumns="1fr 1fr 1fr 1fr 1fr" gap="9px">
                        <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='Speed' minValue={0} maxValue={30} unit='knots' />


                        </View>
                        <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='Outdoor temp' minValue={0} maxValue={60} unit='˚C' />


                        </View>

                        <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='E/R temp' minValue={0} maxValue={60} unit='˚C' />

                        </View>

                        <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='LT temp' minValue={0} maxValue={30} unit='˚C' />

                        </View>
                        <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='SW temp' minValue={0} maxValue={30} unit='˚C' />

                        </View>
                    </Grid>
                    <Grid templateColumns="1fr" >
                        <View>
                        </View>
                    </Grid>
                    {/*   <CO2SavedMeter vessel={vessel} />
                    <Halfcirclechart></Halfcirclechart>
                    <Element vessel={vessel}/>  */}
                </View>


                <View>
                    <Map vessel={vessel} />

                </View>
            </Grid>


            <Grid
                templateColumns="2fr 1fr 2fr"
                gap="9px"
                padding="0"
                alignItems="stretch"
            >
                <View>
                    <Grid
                        templateColumns="1fr 1fr 1fr"
                        gap="9px"
                        padding="0"
                        alignItems="stretch"
                    >
                        <View>
                            <GaugeChart
                                title="HVAC Power"
                                id="gauge-chart1"
                                nrOfLevels={3}
                                colors={["#04C220", "#ffc01d", "#EE2219"]}
                                needleColor="#d9d9d6"
                                hideText={true}
                                width={containerWidth}


                                //colors={["#FF5F6D", "#FFC371"]}
                                // arcWidth={0.3}
                                percent={0.37}
                                arcWidth={0.2}
                                marginInPercent={0.11}
                                bottomColor1="#00a339"
                                bottomColor2="#029636"
                            //textColor="#000000"
                            />
                        </View>
                        <View>
                            <GaugeChart
                                title="Pumps Power"
                                id="gauge-chart1"
                                colors={["#04C220", "#ffc01d", "#EE2219"]}
                                needleColor="#d9d9d6"
                                hideText={true}
                                bottomColor1="#d89e09"
                                bottomColor2="#ffc01d"

                                width={containerWidth}



                                nrOfLevels={3}
                                //colors={["#FF5F6D", "#FFC371"]}
                                // arcWidth={0.3}
                                percent={0.37}
                                arcWidth={0.2}
                                marginInPercent={0.11}
                            //textColor="#000000"
                            />
                        </View>
                        <View>
                            <GaugeChart
                                title="Engine Vent Power"
                                id="gauge-chart1"
                                nrOfLevels={3}
                                colors={["#04C220", "#ffc01d", "#EE2219"]}
                                needleColor="#d9d9d6"
                                hideText={true}
                                bottomColor1="#00a339"
                                bottomColor2="#029636"

                                width={containerWidth}


                                // arcWidth={0.3}
                                percent={0.37}
                                arcWidth={0.2}
                                marginInPercent={0.11}
                            //textColor="#000000"
                            />
                        </View>

                    </Grid>
                </View>

                <View>
                    <Card
                        className={`amplify-card ${theme}`}
                        style={{
                            height: '100%',
                            display: 'flex',
                            justifyContent: 'flex-start', // Override justifyContent
                            alignItems: 'center', // Override alignItems
                            borderRadius: '15px',
                            margin: '0',
                            padding: '0'
                        }}
                    >

                    </Card>
                </View>
                
                    <Grid
                        templateColumns="1fr 1fr 1fr"
                        gap="9px"
                        padding="0"
                        alignItems="stretch"
                    >
                        <View>
                            <Card
                                className={`amplify-card ${theme}`}
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-start', // Override justifyContent
                                    alignItems: 'center', // Override alignItems
                                    borderRadius: '15px',
                                    margin: '0',
                                    padding: '0'
                                }}
                            ></Card>
                        </View>
                        <View>
                            <Card
                                className={`amplify-card ${theme}`}
                                style={{
                                    height: '100%',
                                    display: 'flex',
                                    justifyContent: 'flex-start', // Override justifyContent
                                    alignItems: 'center', // Override alignItems
                                    borderRadius: '15px',
                                    margin: '0',
                                    padding: '0'
                                }}
                            ></Card>
                        </View>
                        <View>  <Card
        className={`amplify-card ${theme}`}
        style={{
          height: '100%',
          display: 'flex',
          justifyContent: 'flex-start', // Override justifyContent
          alignItems: 'center', // Override alignItems
          borderRadius: '15px',
          margin: '0',
          padding: '0'
        }}
      ></Card>

                        </View>
                    </Grid>

              



            </Grid>
        </>





    );
}

export default VesselPage;