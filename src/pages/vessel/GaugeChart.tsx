import React, { useContext } from 'react';
//import Gauge from 'react-gauge-chart';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from "@aws-amplify/ui-react";
import { styled } from '@mui/system';
import GaugePointer from './GaugePointer';

import './GaugeChart.css';

interface GaugeChartProps {
    title: string;
    width: number;
    id: string;
    nrOfLevels: number;
    percent: number;
    arcWidth: number;
    marginInPercent: number;
    colors?: string[];
    needleColor?: string;
    textColor?: string;
    hideText?: boolean;
    status?: number;
    value?: string;
    statusElement?: any;


}
interface FooterProps {
    statusElement?: any;
}


const styles = {
    content: {

    },
    header: {
        justifyContent: 'space-between', // Add this
        alignItems: 'center', // Add this
        paddingLeft: '20px',

        //paddingBottom: '7px',
        paddingTop: '12px',
        //borderBottom: '4px solid #072f47',

        //  padding: '12px',
    },
    title: {
        alignSelf: 'start',
        fontSize: '14px',
        // paddingTop: '14px',
        margin: '0px',
        //paddingBottom: '3px',
        width: '100%',
    },
    percentage: {
        paddingTop: '9px',
        color: '#d9d9d6',
        margin: '0px',
        padding: '0px',
        fontSize: '14px', // Adjust as needed

    },
    gaugeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        padding: '0px',
        //paddingTop: '0px',
        //paddingBottom: '0px',
        //borderBottom: '4px solid #072f47',
    },
    gauge: {
        //paddingTop: '8px',
        //paddingBottom: '0px',
        padding: '0px',
        justifyContent: 'center',
        alignItems: 'center',
    },
    value: {
        display: 'flex',
        justifyContent: 'center',

        fontSize: '16px',
        padding: '8px',
        paddingTop: '0px',
        // borderTop: '4px solid #072f47',

    },
    footer: (statusElement: any) => ({
        borderTop: '4px solid #072f47',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        fontSize: '14px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '7px',
       // background: `radial-gradient(circle 200px, ${bottomColor1}, ${bottomColor2})`
       background: `${statusElement.color}`
    }),
    status: {
        fontSize: '14px',

    },

};

const Content = styled('div')(styles.content);
const Header = styled('div')(styles.header);
const Title = styled('div')(styles.title);
const Percentage = styled('div')(styles.percentage);
const GaugeContainer = styled('div')(styles.gaugeContainer);
//const GaugeWrapper = styled('div')(styles.gauge);
const Value = styled('div')(styles.value);
const Footer = styled('div')(({ statusElement }: FooterProps) => styles.footer(statusElement || ''));
//const GaugeChart: React.FC<GaugeChartProps> = ({ title, id, nrOfLevels, percent, arcWidth, marginInPercent, colors, needleColor, textColor, hideText, width, value, statusElement }) => {
const GaugeChart: React.FC<GaugeChartProps> = ({ title, percent, statusElement, value, needleColor }) => {

    const { theme } = useContext(ThemeContext);
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    return (
        <>
            <div

            >
                <Card
                    className={`amplify-card ${theme}`}
                    style={{
                        //  display: 'flex',
                        // justifyContent: 'flex-start',
                        //   alignItems: 'center',
                        borderRadius: '15px',
                        margin: '0',
                        padding: '0',

                        // position: 'relative',
                    }}
                >
                    <Content>
                        <Header>
                            <Title>{title}</Title>
                            <Percentage>{(percent * 100).toFixed(0)}%</Percentage>
                        </Header>
                        <GaugeContainer>
                          
                                {/* <Gauge className="percentNumber" id={id} nrOfLevels={nrOfLevels} percent={percent} arcWidth={arcWidth} marginInPercent={marginInPercent} colors={colors} needleColor={needleColor} textColor={textColor} hideText={hideText} />  */}
                                <GaugePointer width={150} height={100} percent={Number(percent)} statusColor={statusElement.color} needleColor={needleColor}   />
                        </GaugeContainer>
                        <Value>
                            {value} MWh
                        </Value>
                        <Footer statusElement={statusElement}>
                            {statusElement.statusText}
                        </Footer>
                    </Content>
                </Card>
            </div>
        </>
    );
};

export default GaugeChart;