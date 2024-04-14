import React, { useContext } from 'react';
//import { Card } from '@aws-amplify/ui-react';
import { ThemeContext } from "../../themes/ThemeContext";
import { styled } from '@mui/system';
import { getStatusIconAnimation } from '../../utils/VesselStatus'; // Replace with actual path

import './VesselPage.css'; // Import the CSS file

const styles = {
    content: {
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: "15px",
        boxShadow: "0px",
        paddingTop: "0px",
        margin: "0",
        padding:"0px",
        paddingBottom:"6px",
    },
    contentLeft: {
        width: '90%',
        alignItems: 'center',
    },
    flagVessel: {
        display: 'flex',
        alignItems: 'center', // Add this line

       
    },
    imo: {
        fontSize: '12px',
        color: '#f6f6f5'
    },
    contentRight: {
        width: '10%',
        display: 'flex', // Add this line
        alignItems: 'center', // Add this line

    },
};


const Content = styled('div')(styles.content);
const ContentLeft = styled('div')(styles.contentLeft);
const ContentRight = styled('div')(styles.contentRight);
const FlagVessel = styled('div')(styles.flagVessel);
const Imo = styled('div')(styles.imo);

const Title = ({ vessel }) => {
    const { theme } = useContext(ThemeContext);
    const flag = vessel && vessel.FLAG ? vessel.FLAG.toLowerCase() : '';
    const statusMarker = getStatusIconAnimation(vessel);


    return (
        <>
        <Content className={`title ${theme}`}>
            <ContentLeft>
                <FlagVessel>
                    <img src={`/flags/${flag}.png`} alt={vessel.FLAG} width="21" height="14" style={{ marginRight: '8px' }} />
                    <p style={{ fontSize: '17px', fontWeight: 'bold' }}>M/S {vessel.SHIPNAME}</p>
                </FlagVessel>
                <Imo>IMO: {vessel.IMO}</Imo>
            </ContentLeft>
            <ContentRight>
                <div style={{ width: '25px', height: '25px', padding: '0px', margin: '0px' }}>

                    {statusMarker}
                </div>
            </ContentRight>
        </Content>
        </>
    )
}

export default Title;