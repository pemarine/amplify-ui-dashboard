import React, { useEffect, useContext } from "react";
import {
  View,
  Grid,
  //Flex,
  Card,
  //Placeholder,
  useTheme,
} from "@aws-amplify/ui-react";

import { ThemeContext } from "../../themes/ThemeContext";


//import { MdRemoveRedEye, MdWeb, MdPermIdentity } from "react-icons/md";

//import MiniStatistics from "./MiniStatistics";
//import TrafficSources from "./TrafficSources";
//import SalesSummary from "./SalesSummary";
//import TrafficSummary from "./TrafficSummary";
//import CustomersSummary from "./CustomersSummary";

import "./Dashboard.css";
import Map from "./Map"
import TableVessels from "./TableVessels";



const Dashboard = () => {
  const { theme } = useContext(ThemeContext);

  const { tokens } = useTheme();

  useEffect(() => {
    const doChartData = async () => {

    };

    doChartData();
  }, []);

  return (
    <>
      
      <View borderRadius="6px" maxWidth="100%" padding="0rem" minHeight="100vh" marginTop="15px">
        <Grid
          templateColumns={{ base: "1fr", large: "1fr 1fr 0.5fr" }}
          gap={tokens.space.medium}
        >
          

          <View columnSpan={2} rowSpan={{ base: 3, large: 4 }}>
            <Card
              className={`amplify-card ${theme}`}
              height="100%"
              borderRadius="15px"
              >
                <Map />
            </Card>
          </View>

          <View rowSpan={{ base: 1, large: 4 }}>
            <Card
              className={`amplify-card ${theme}`}
              height="100%"
              borderRadius="15px"
              >
                <TableVessels/>
             
            </Card>
          </View>

          
       
        </Grid>
      </View>
    </>
  );
};

export default Dashboard;
