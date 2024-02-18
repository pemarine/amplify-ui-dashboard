import React, { useContext } from "react";
import { useMeter, useNumberFormatter } from "react-aria";
import { Card } from "@aws-amplify/ui-react";
import { ThemeContext } from "../../themes/ThemeContext";
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
export function Meter({ vessel, minValue = 0, maxValue = 30, ...props }) {
   // const classes = useStyles();

    const { theme } = useContext(ThemeContext);
    let { meterProps } = useMeter({ value: vessel.SPEED, minValue, maxValue });

  //let { value } = meterProps;
 // let { meterProps } = useMeter(props);

  let size = 110;
  let center = size / 2;
  let strokeWidth = 14;
  let r = center - strokeWidth;
  let c = 2 * r * Math.PI;
  let a = c * (270 / 360);
  let percentage = (parseFloat(vessel.SPEED) - minValue) / (maxValue - minValue);
 // let percentage = (vessel.SPEED - minValue) / (maxValue - minValue);
  let offset = c - percentage * a;

  let formatter = useNumberFormatter({ 
    ...props.formatOptions, 
    minimumFractionDigits: 1, // specify the minimum number of decimal places
    maximumFractionDigits: 1  // specify the maximum number of decimal places
  });
   // let parts = formatter.formatToParts(vessel.SPEED);
    let valueString = formatter.format(parseFloat(vessel.SPEED));//  let unit = parts.find((p) => p.type === "unit");

  let u = " Knots"

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
        margin: 'auto',
      }}
      >
     
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
        stroke="dodgerblue"
        strokeOpacity={0.2}
        strokeDasharray={`${a} ${c}`}
        strokeLinecap="round"
        transform={`rotate(135 ${center} ${center})`}
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
        transform={`rotate(135 ${center} ${center})`}
      />
      <text
        role="presentation"
        x={center}
        y={center + 15}
       // fontFamily="ui-rounded, system-ui"
        fontSize={28}
        textAnchor="middle"
        fill="#00c9ff"
      >
  {valueString}
      </text>
      <text
        role="presentation"
        x={center}
        y={center + 20 + 35}
      //  fontFamily="ui-rounded, system-ui"
        fontSize={17}
        textAnchor="middle"
        fill="#80e4ff"
        fillOpacity={0.85}
      >
    {u && u}
      </text>
    </svg>
    </Card>
    </>
  );
}
