import React, { useContext } from 'react';
//import Gauge from 'react-gauge-chart';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from "@aws-amplify/ui-react";
import { styled } from '@mui/system';
import GaugePointer from './GaugePointer';
//import HvacFz from './HvacFz';

import './GaugeChart.css';

interface HvacComboProps {
    titleTotal: string;
    titlePercent: string;
    subtitleTotal: string;
    subtitlePercent: string;
    valueTotal: string;
    valuePercent: string;
    needleColor?: string;
    textColor?: string;
    hideText?: boolean;
    status?: number;
    value?: string;
    statusElement?: any;
    children?: React.ReactNode;




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
    
    subTitle: {
        paddingTop: '6px',
        color: '#d9d9d6',
        margin: '0px',
        padding: '0px',
        fontSize: '12px', // Adjust as needed

    },
    gaugeContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '120px',
        padding: '0px',
        paddingBottom: '10px'
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
        height: '40px',
        borderTop: '4px solid #072f47',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        fontSize: '14px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '7px',
       // background: `radial-gradient(circle 200px, ${bottomColor1}, ${bottomColor2})`
       background: statusElement.statusText === "" ? '#083450' : `${statusElement.color}`
    }),
    status: {
        fontSize: '14px',

    },

};

const Content = styled('div')(styles.content);
const Header = styled('div')(styles.header);
const Title = styled('div')(styles.title);
const SubTitle = styled('div')(styles.subTitle);
const GaugeContainer = styled('div')(styles.gaugeContainer);
//const GaugeWrapper = styled('div')(styles.gauge);
const Value = styled('div')(styles.value);
const Footer = styled('div')(({ statusElement }: FooterProps) => styles.footer(statusElement || ''));
//const GaugeChart: React.FC<GaugeChartProps> = ({ title, id, nrOfLevels, percent, arcWidth, marginInPercent, colors, needleColor, textColor, hideText, width, value, statusElement }) => {
const HvacCombo: React.FC<HvacComboProps> = ({ titleTotal, titlePercent, subtitleTotal, subtitlePercent, valueTotal, valuePercent, statusElement, needleColor }) => {

    const { theme } = useContext(ThemeContext);
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Card
                    className={`amplify-card ${theme}`}
                    style={{
                        borderTopLeftRadius: '15px',
                        borderTopRightRadius: '15px',
                        margin: '0',
                        padding: '0',
                        flex: '1', // Add this
                        marginRight: '10px', // Add this
                    }}
                >
                    <Content>
                        <Header>
                            <Title>{titleTotal}</Title>
                            <SubTitle>{subtitleTotal}</SubTitle>
                        </Header>
                        <GaugeContainer>
                            <GaugePointer width={140} height={90} percent={Number(valueTotal) / 1000} statusColor={statusElement.color} needleColor={needleColor} />
                        </GaugeContainer>
                        <Value>
                            {valueTotal} MWh
                        </Value>
                    </Content>
                </Card>
                <Card
                    className={`amplify-card ${theme}`}
                    style={{
                        borderRadius: '15px',
                        margin: '0',
                        padding: '0',
                        flex: '1', // Add this
                    }}
                >
                    <Content>
                        <Header>
                            <Title>{titlePercent}</Title>
                            <SubTitle>{subtitlePercent}</SubTitle>
                        </Header>
                        <GaugeContainer>
                            <GaugePointer width={140} height={90} percent={Number(valuePercent)} statusColor={statusElement.color} needleColor={needleColor} />
                        </GaugeContainer>
                        <Value>
                            {valuePercent} %
                        </Value>
                    </Content>
                </Card>
            </div>
            <Footer statusElement={statusElement}>
                {statusElement.statusText}
            </Footer>
        </>
    );
};

export default HvacCombo;