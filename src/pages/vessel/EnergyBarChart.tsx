import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts';
import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { useContext } from 'react';
import { makeStyles } from '@mui/styles';
import BarChartIcon from '@mui/icons-material/BarChart';

const useStyles = makeStyles({
  header: {
    backgroundColor: 'rgba(10, 49, 73, 0.6)',

    display: 'flex', // Add this line
    width: '100%',
    borderBottom: '4px solid #072F47',
    marginBottom: '10px',
  //  justifyContent: 'space-between', // Add this line
    // Add your other styles here...
  },
  headerLeft: {
    display: 'flex', // Add this line
    // Add your other styles here...
  },
  titles: {
    paddingTop: '17px',
    paddingBottom: '17px',
    paddingLeft: '14px',
    margin: '0px',
    textAlign: 'left', // Add this line
    fontFamily: 'Fellix Medium',
  },
  title: {
    fontSize: '16px',


  },
  subTitle: {
    fontSize: '11px',
    color: '#d9d9d6',

  },
  iconWrapper: {
    display: 'flex',
    marginTop: '17px',
    marginBottom: '17px',
    marginLeft: '14px',
    

    alignItems: 'center',
    border: '2px solid #065273',
    borderRadius: '50%',
    padding: '9px',
    width: '41px', // Add this line
  height: '41px', // Add this line

  },
  headerRight: {
    textAlign: 'right', // Add this line
    // Add your other styles here...
  },
  card: {
    backgroundColor: '#09324C !important', // Replace 'red' with your desired color
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    fontFamily: 'Fellix Medium',
    fontSize: '12px',
   // backgroundColor: 'rgba(10, 49, 73, 0.9)!important',

  },
  chart: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    paddingTop: '6px',
    alignItems: 'center',
    fontFamily: 'Fellix Medium',
    '& .css-1k2u9zb-MuiChartsAxis-root .MuiChartsAxis-label': {
      fontFamily: 'Fellix Medium',
    },
    '& .MuiChartsAxis-root.MuiChartsAxis-directionY.MuiChartsAxis-left.css-1k2u9zb-MuiChartsAxis-root': {
      color: 'white', // Change color to white
    },
    '& .MuiChartsAxis-tickContainer > text > tspan': {
      color: 'white!important', // Change color to white
      fontFamily: 'Fellix Medium'

    },
    '& .MuiChartsAxis-tickContainer > text': {
      fill: 'white',
      color: 'white!important', // Change color to white
    },
    '& .MuiChartsAxis-tickContainer': {
      fill: 'none',
      color: 'white!important', // Change color to white
    },
    '& .MuiChartsAxis-tickLabel > tspan': {
      fontSize: '10px', // Change font size
      fontFamily: 'Fellix Medium'

    },
    '& .MuiChartsAxis-label': {
      transform: 'translate(-20px, 0)!important', // Style axis labels
      color: 'white', // Style axis labels
      fontFamily: 'Fellix Medium'


    },
    '& .MuiChartsLegend-series > text > tspan': {
      fill: 'white', // Style legend text
      fontSize: '13px', // Style legend text
      fontFamily: 'Fellix Medium',
    },
    '& .css-1u0lry5-MuiChartsLegend-root': {
      transform: 'translate(0px, -10px)', // Style legend position
    },
    '& .axis-line': {
      color: 'white',
      fill: 'white', // Style axis lines
      stroke: 'white', // Style axis lines
    },
    '& .tick-line': {
      color: 'white',
      fill: 'white', // Style axis lines
      stroke: 'white', // Style tick lines
    },
    '& text': {
      color: 'white',
      fill: 'white', // Style text elements
    },
    '& .bar': {
      fill: 'white', // Style bars
    },
    '& .label': {
      fill: 'white', // Style labels
    },
    '& .number': {
      color: 'white', // Style numbers
    },
    '& .date': {
      color: 'white', // Style dates
    },
    '& .tooltip': {
      backgroundColor: 'rgba(0, 0, 0, 0.8)', // Style tooltip background
      color: 'white', // Style tooltip text color
      border: '1px solid white', // Style tooltip border
      borderRadius: '4px', // Style tooltip border radius
    },
    '& .tooltip-arrow': {
      fill: 'rgba(0, 0, 0, 0.8)', // Style tooltip arrow color
    },
  },
});

const chartSetting = {
  yAxis: [
    {
      label: 'Energy (MWh)',
    },
  ],
  width: 600,
  height: 300,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: 'translate(0px, 0)',
    },
  },
};


const dataset = [
  { day: 'Monday', EnergyUsed: 4000, EnergySaved: 2400, TotalEnergy: 6400 },
  { day: 'Tuesday', EnergyUsed: 3000, EnergySaved: 1398, TotalEnergy: 4398 },
  { day: 'Wednesday', EnergyUsed: 2000, EnergySaved: 9800, TotalEnergy: 11800 },
  { day: 'Thursday', EnergyUsed: 2780, EnergySaved: 3908, TotalEnergy: 6688 },
  { day: 'Friday', EnergyUsed: 1890, EnergySaved: 4800, TotalEnergy: 6690 },
  { day: 'Saturday', EnergyUsed: 2390, EnergySaved: 3800, TotalEnergy: 6190 },
  { day: 'Sunday', EnergyUsed: 3490, EnergySaved: 4300, TotalEnergy: 7790 },
];

const valueFormatter = (value: number | null) => `${value} MWh`;

export default function EnergyBarChart({ vessel }) {
  const theme = useContext(ThemeContext);
  const classes = useStyles();
  console.log(vessel.SHIPNAME);
  let icon = <BarChartIcon style={{ fontSize: 19}}/>;

  return (
    <Card
    className={`${classes.card} amplify-card ${theme}`}
    height="100%"
      borderRadius="15px"
      position='relative'
      margin="0"
      padding="0"

    >
      <div className={classes.header}>
        <div className={classes.headerLeft}>
          <div className={classes.iconWrapper}>
            {icon}
          </div>
          <div className={classes.titles}>
          <div className={classes.title}>Energy Performance</div>
          <div className={classes.subTitle}>Total for time period (default last 7 days)</div>
          </div>
        </div>
        <div className={classes.headerRight}>
          {/* Add your content here... */}
        </div>
      </div>


      <div className={classes.chart}>

        <BarChart
          dataset={dataset}
          xAxis={[{ scaleType: 'band', dataKey: 'day' }]}
          series={[
            { dataKey: 'EnergyUsed', color: '#ffc01d', label: 'Energy Used', valueFormatter },
            { dataKey: 'EnergySaved', color: '#00a339', label: 'Energy Saved', valueFormatter },
            { dataKey: 'TotalEnergy', color: '#80e4ff', label: 'Total Energy', valueFormatter },
          ]}
          {...chartSetting}
        />
      </div>
    </Card>
  );
}
export { };