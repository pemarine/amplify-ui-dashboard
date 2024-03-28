import React, { useContext } from "react";
import { useMeter, useNumberFormatter } from "react-aria";
import { Card } from "@aws-amplify/ui-react";
import { ThemeContext } from "../../themes/ThemeContext";
import { styled } from '@mui/system';

//import { makeStyles } from '@material-ui/core';
/*

const useStyles = makeStyles(() => ({
    meter: {
        display: 'flex',
    justifyContent: 'flex-start', // Align items to the start of the flex container
    alignItems: 'center',
    },
    content: {
      display: 'flex',
        justifyContent: 'left!important',
        alignItems: 'left!important'
      },
  
    title: {
      alignSelf: 'start',
      fontSize: '18px',
     
            margin: '0',
            transform: 'translateX(-4vw)', // Move the title 50px to the left

          
            
    },
    subtitle: {
      fontSize: '12px',
      paddingLeft: '20px',
      paddingBottom: '15px',
      color: '#ececeb',
      // other styles you want...
    }}));
*/
interface MeterProps {
  //formatOptions: Intl.NumberFormatOptions;
  // props: any;
  title: string;
  minValue: number;
  maxValue: number;
  vessel: any;
  unit: string;
}
const styles = {
  content: {
    padding: '0px',
    margin: '0px',
    width: '100%',


  },

  title: {
    alignSelf: 'start',
    fontSize: '14px',
    paddingTop: '9px',
    paddingLeft: '20px',
    //marginBottom: '10px',
    margin: '0px',

    paddingBottom: '6px',
    width: '100%',

  },
  meter: {
    //borderTop: '4px solid #072f47',
    //paddingTop: '8px',
    paddingBottom: '14px',
    display: 'flex',
    justifyContent: 'center', // Align items to the start of the flex container
    
  },
  
};
const Content = styled('div')(styles.content);
const Title = styled('div')(styles.title);
const _Meter = styled('div')(styles.meter);


export function Meter(props: MeterProps) {
  // const classes = useStyles();

  const { theme } = useContext(ThemeContext);
  let { meterProps } = useMeter({ value: props.vessel.SPEED, minValue: props.minValue, maxValue: props.maxValue });

  //let { value } = meterProps;
  // let { meterProps } = useMeter(props);

  let size = 78;
  let center = size / 2;
  let strokeWidth = 9;
  let r = center - strokeWidth;
  let c = 2 * r * Math.PI;
  let a = c * (250 / 360);
  let percentage = (parseFloat(props.vessel.SPEED) - props.minValue) / (props.maxValue - props.minValue);
  // let percentage = (vessel.SPEED - minValue) / (maxValue - minValue);
  let offset = c - percentage * a;

  let formatter = useNumberFormatter({
    // ...props.formatOptions, 
    minimumFractionDigits: 0, // specify the minimum number of decimal places
    maximumFractionDigits: 0  // specify the maximum number of decimal places
  });
  // let parts = formatter.formatToParts(vessel.SPEED);
  let valueString = formatter.format(parseFloat(props.vessel.SPEED));//  let unit = parts.find((p) => p.type === "unit");



  return (
    <>
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
        <Content>
          <Title>{props.title}</Title>
          <_Meter>

          <svg
            {...meterProps}
            width={size}
            height={size}
            viewBox={`0 0 ${size} ${size}`}
            fill="none"
            strokeWidth={strokeWidth}
          >
            <circle
              role="presentation"
              cx={center}
              cy={center}
              r={r}
              stroke="#00c9ff"
              strokeOpacity={0.2}
              strokeDasharray={`${a} ${c}`}
              strokeLinecap="round"
              transform={`rotate(145 ${center} ${center})`}
            />
            <circle
              role="presentation"
              cx={center}
              cy={center}
              r={r}
              stroke="#00c9ff"
              strokeDasharray={c}
              strokeDashoffset={offset}
              strokeLinecap="round"
              transform={`rotate(145 ${center} ${center})`}
            />
            <text
              role="presentation"
              x={center}
              y={center + 9}
              // fontFamily="ui-rounded, system-ui"
              fontSize={23}
              textAnchor="middle"
              fill="#00c9ff"
            >
              {valueString}
            </text>
            <text
              role="presentation"
              x={center}
              y={center + 20 + 19}
              //  fontFamily="ui-rounded, system-ui"
              fontSize={15}
              textAnchor="middle"
              fill="#80e4ff"
              fillOpacity={0.85}
            >
              {props.unit && props.unit}
            </text>
          </svg>
          </_Meter>
        </Content>
      </Card>
    </>
  );
}
