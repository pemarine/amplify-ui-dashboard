import React, { useContext, } from 'react';
import Gauge from 'react-gauge-chart';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from "@aws-amplify/ui-react";
import { styled } from '@mui/system';

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
    bottomColor1?: string;
    bottomColor2?: string;

}
interface FooterProps {
    bottomColor1?: string;
    bottomColor2?: string;
}

const styles = {
    content: {

    },
    header: {
        display: 'flex',
        justifyContent: 'space-between', // Add this
        alignItems: 'center', // Add this
        paddingBottom: '7px',
        paddingTop: '7px',
        borderBottom: '4px solid #072f47',

        //  padding: '12px',
    },
    title: {
        alignSelf: 'start',
        fontSize: '14px',
        paddingTop: '9px',
        paddingLeft: '20px',
        margin: '0px',
        paddingBottom: '3px',
        width: '100%',
    },
    percentage: {
        paddingTop: '4px',

        margin: '0px',
        paddong: '0px',
        fontSize: '15px', // Adjust as needed
        paddingRight: '20px', // Adjust as needed

    },
    gauge: {
        width: '100%',
        height: '100%',
        paddingTop: '8px',
        paddingBottom: '0px',
        //display: 'flex',
        //        justifyContent: 'center',
    },
    value: {
        display: 'flex',
        justifyContent: 'center',
        fontSize: '17px',
        padding: '8px',
        paddingTop: '0px',
        // borderTop: '4px solid #072f47',

    },
    footer: (bottomColor1: string, bottomColor2: string) => ({
        borderTop: '4px solid #072f47',
        borderBottomLeftRadius: '15px',
        borderBottomRightRadius: '15px',
        display: 'flex',
        fontSize: '16px',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '7px',
        background: `radial-gradient(circle 200px, ${bottomColor1}, ${bottomColor2})`
    }),
    status: {
        fontSize: '14px',

    },

};

const Content = styled('div')(styles.content);
const Header = styled('div')(styles.header);
const Title = styled('div')(styles.title);
const Percentage = styled('div')(styles.percentage);
const GaugeWrapper = styled('div')(styles.gauge);
const Value = styled('div')(styles.value);
const Footer = styled('div')(({ bottomColor1, bottomColor2 }: FooterProps) => styles.footer(bottomColor1 || '#083450', bottomColor2 || 'rgb(0, 163, 57, 0.7)'));
const GaugeChart: React.FC<GaugeChartProps> = ({ title, id, nrOfLevels, percent, arcWidth, marginInPercent, colors, needleColor, textColor, hideText, bottomColor1, bottomColor2, width }) => {
    const { theme } = useContext(ThemeContext);
    //const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    return (
        <>
            <div>
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
                        <GaugeWrapper style={{ width: ((width * 0.4) - 80) / 3 }}>
                            <Gauge className="percentNumber" id={id} nrOfLevels={nrOfLevels} percent={percent} arcWidth={arcWidth} marginInPercent={marginInPercent} colors={colors} needleColor={needleColor} textColor={textColor} hideText={hideText} />
                        </GaugeWrapper>
                        <Value>
                            70.2 MWh
                        </Value>
                        <Footer bottomColor1={bottomColor1} bottomColor2={bottomColor2}>
                            Power Good
                        </Footer>
                    </Content>
                </Card>
            </div>
        </>
    );
};

export default GaugeChart;