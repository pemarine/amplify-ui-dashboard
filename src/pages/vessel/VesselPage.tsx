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

    if (!vessel) {
        return <div>Loading...</div>;
    }

    return (
        <>

            <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="15px">
                <Grid 
                    templateColumns="1fr 3fr 1fr"
                    gap="15px"
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
                        <Grid templateColumns="1fr 1fr 1fr" gap="10px">
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
                        <Grid templateColumns="1fr 1fr 1fr 1fr 1fr" gap="10px">
                            <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='Speed' minValue={0} maxValue={30} unit='knots'/>


                            </View>
                            <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='Outdoor temp' minValue={0} maxValue={60} unit='˚C' />


                            </View>
                            
                            <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString()) }} title='E/R temp' minValue={0} maxValue={60} unit='˚C' />

                            </View>
                   
                            <View>
                            <Meter vessel={{ SPEED: ((parseFloat(vessel.SPEED || '0') / 10).toString())  }} title='LT temp' minValue={0} maxValue={30} unit='˚C'  />

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
                <Grid templateColumns="1fr 1fr 1fr 1fr" gap="15px" marginTop="15px">
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