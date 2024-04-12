import React, { useEffect, useState } from 'react';
//mport { View, useTheme } from '@aws-amplify/ui-react';

import { Card, Grid, View } from '@aws-amplify/ui-react';
//import { ThemeContext } from "../../themes/ThemeContext";
import '../VesselPage.css';
import Map from "../Map"
import Image from "../Image"
import Title from "../Title"
import MiniStatistics from "../MiniStatistics";
//import { MdRemoveRedEye} from "react-icons/md";
import { MdCo2 } from "react-icons/md";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
import { MdOilBarrel } from "react-icons/md";

//import SeoChartCard from '../../ui-components/cards/SeoChartCard';
//import chartData from './chart-data';

//import { Customers } from '../../ui-components';
import { Meter } from '../Meter';
//import RouteBar from './RouteBar';
import GaugeChart from '../GaugeChart';
//import Ping from './Ping';
import Weather from '../Weather';
//import _BarStack from '../BarStack';
//import Threshold from '../Threshold';
import Information from '../Information';
import { getStatusElement } from '../../../utils/VesselStatus';
import EnergyBarChart from '../EnergyBarChart';
//mport { getStatusColorSingle } from '../../../utils/VesselStatus';
//<Customers />

//import Element from "./Element"

//import CO2SavedMeter from './CO2SavedMeter';

//import { Halfcirclechart } from '../../ui-components';


//import { Vessel } from 'src/models';



const VesselPage1 = ({ vessel }) => {
  

    const [containerWidth, setContainerWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setContainerWidth(window.innerWidth);
        };
        window.addEventListener('resize', handleResize);
        //Call handleResize once on mount to get the initial width
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
            <div className="vessel-page-container" >
                <Grid
                    templateColumns="1fr 3fr 1fr"
                    marginTop="10px"
                   // height="315px"
                    gap="9px"
                    padding="0"
                    alignItems="stretch"
                >
                    <View>
                        <Title vessel={vessel} />
                        <Image vessel={vessel} />
                     {/*}   <RouteBar vessel={vessel} /> */}



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
                                    subtitle="total for time period (default last day)"
                                    amount={vessel.Saved_Energy_LastDay ?? "0"}
                                    icon={<MdOutlineEnergySavingsLeaf />}
                                    measurement="MWh"
                                    color1="#082b40"
                                    color2="#063b52"
                                />
                            </View>
                            <View>
                                <MiniStatistics
                                    title="Fuel savings"
                                    subtitle="total for time period (default last day)"
                                    amount={vessel.Saved_Fuel_LastDay ?? "0"}
                                    icon={<MdOilBarrel />}
                                    measurement="tonnes"
                                    color1="#082b40"
                                    color2="#063b52"
                                />
                            </View>
                            <MiniStatistics
                                title="CO2 savings"
                                subtitle="total for time period (default last day)"

                                amount={vessel.Saved_CO2_LastDay ?? "0"}
                                icon={<MdCo2 />}
                                measurement=" tonnes"
                                color1="#082b40"
                                color2="#063b52"
                            />
                            <View>

                            </View>
                        </Grid>
                        <Grid templateColumns="1fr 1fr" gap="9px">
                            <View>
                                <Meter value={(parseFloat(vessel.SPEED || '0') / 10)} title='Speed' minValue={0} maxValue={30} unit='knots' />


                            </View>
                            <View>
                                <Meter value={(parseFloat(vessel.outsideTemp || '0') / 10)} title='Outdoor temp' minValue={0} maxValue={60} unit='˚C' />

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
                    templateColumns="1fr 2fr 1fr"
                    gap="9px"
                    padding="0"
                    marginTop="9px"
                    alignItems="stretch"
                >
                    <View>
                        {/* <Ping apiName="https://hhteca69h3.execute-api.eu-north-1.amazonaws.com/dev" ip="213.112.114.12" />*/}
                    <Information vessel={vessel}></Information>

                    </View>
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
                                   // needleColor={getStatusColorSingle(vessel.HVAC_P_status || '') || "#00a339"}
                                   needleColor="#6bf5fb"
 
                                   hideText={true}
                                    width={containerWidth}


                                    //colors={["#FF5F6D", "#FFC371"]}
                                    // arcWidth={0.3}
                                    percent={(Number(vessel.HVAC_Power_Percent) / 1000) ?? 0}
                                    arcWidth={0.2}
                                    marginInPercent={0.10}
                                    statusElement={getStatusElement(vessel.HVAC_P_status || '') || "#00a339"}
                                   // bottomColor={getStatusColor(vessel.HVAC_P_status || '') || "#00a339"}
                                  //  bottomColor2="#029636"
                                    value={vessel.HVAC_Power ?? undefined} 
                                //textColor="#000000"
                                />
                            </View>
                            <View>
                                <GaugeChart
                                    title="Pumps Power"
                                    id="gauge-chart1"
                                    colors={["#04C220", "#ffc01d", "#EE2219"]}
                                    needleColor="#6bf5fb"
                                    //  needleColor={getStatusColorSingle(vessel.Pumps_P_status || '') || "#00a339"}
                                    hideText={true}
                                    statusElement={getStatusElement(vessel.Pumps_P_status || '') || "#00a339"}


                                    width={containerWidth}
                                    percent={(Number(vessel.Pumps_Power_Percent) / 1000) ?? 0}
                                    value={vessel.Pumps_Power ?? undefined}




                                    nrOfLevels={3}
                                    //colors={["#FF5F6D", "#FFC371"]}
                                    // arcWidth={0.3}
                                    arcWidth={0.2}
                                    marginInPercent={0.10}
                                //textColor="#000000"
                                />
                            </View>
                            <View>
                                <GaugeChart
                                    title="Engine Vent Power"
                                    id="gauge-chart1"
                                    nrOfLevels={3}
                                    colors={["#04C220", "#ffc01d", "#EE2219"]}
                                    needleColor="#6bf5fb"
                                    hideText={true}
                                    statusElement={getStatusElement(vessel.En_Vent_P_status || '') || "#00a339"}


                                    width={containerWidth}
                                    percent={(Number(vessel.En_Vent_Power_Percent) / 1000) ?? 0}
                                    value={vessel.En_Vent_Power ?? undefined}




                                    // arcWidth={0.3}
                                    //percent={0.37}
                                    arcWidth={0.2}
                                    marginInPercent={0.10}
                                //textColor="#000000"
                                />
                            </View>

                        </Grid>
                    </View>



                    <View>
                        <Grid templateColumns="1fr 1fr" gap="9px">
                            <View>
                                <Card
                                    className={`amplify-card`}
                                    borderRadius="15px"
                                    height="100%"
                                    backgroundColor="#083450!important"
                                >
                                 {/*}   <GaugePointer width={200} height={200} statusColor="green" /> */}
                                </Card>

                            </View>
                            <View>
                                <Weather lat={Number(vessel.LAT)} lon={Number(vessel.LON)} />

                            </View>

                        </Grid>

                    </View>







                </Grid>
                <Grid
                    templateColumns="2fr 3fr 2fr"
                    gap="9px"
                    padding="0"
                    marginTop="6px"
                    alignItems="stretch"
                >
                    <View>


                    </View>
                    <View>
                        <EnergyBarChart vessel={vessel} />
                      
                    </View>
                    <View>
                        

                    </View>
                </Grid>

            </div>
        </>





    );
}

export default VesselPage1;