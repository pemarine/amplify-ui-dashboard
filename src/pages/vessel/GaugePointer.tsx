import React from 'react';
//import { styled } from '@mui/system';
import { styled } from '@mui/system';

import {
  GaugeContainer,
  GaugeValueArc,
  GaugeReferenceArc,
  useGaugeState,
} from '@mui/x-charts';
/*interface GaugeValueArcProps {
  fill: string;
}*/
interface GaugeChartProps {
  width: number;
  height: number;
  statusColor: string;
  needleColor?: string;
  value?: number;
  percent?: number;

}
interface GaugePointerProps {

  statusColor: string;
  needleColor?: string;
}

//const GaugePointerValueArc: React.FC<GaugeValueArcProps> = ({ fill }) => {};
const GlobalStyles = styled('div')<{ statusColor: string }>`
  & .css-b9rdri-MuiGauge-referenceArc {
    fill: ${props => props.statusColor} !important;
  }
`;

const GaugePointer: React.FC<GaugePointerProps> = ({ needleColor }) => {

  
   const { valueAngle, outerRadius, cx, cy } = useGaugeState();

  if (valueAngle === null) {
    // No value to display
    return null;
  }

  const target = {
    x: cx + outerRadius * Math.sin(valueAngle),
    y: cy - outerRadius * Math.cos(valueAngle),
  };
  return (
    <g>
      <circle cx={cx} cy={cy} r={5} fill="#00c9ff" />
      <path
        d={`M ${cx} ${cy} L ${target.x} ${target.y}`}
        stroke={needleColor}
        strokeWidth={3}
      />
    </g>
  );
}

export default function Main({ percent, width, height, statusColor, needleColor }: GaugeChartProps) {

  //const GaugePointerValueArc = styled('div')(styles.GaugePointerValueArc);
  const _percent = (percent ?? 0) * 100;
  return (
    
    <GlobalStyles statusColor={statusColor}>

    <GaugeContainer
      width={width}
      height={height}
      startAngle={-105}
      endAngle={105}
      value={_percent}
      
    >
      <GaugeReferenceArc />
      <GaugeValueArc />

      <GaugePointer statusColor={statusColor} needleColor={needleColor} />
    </GaugeContainer>
    </GlobalStyles>
  );
  
}