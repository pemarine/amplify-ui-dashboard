import React from 'react';
import { styled } from '@mui/system';

const styles = {
    informationContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '6px',
        padding: '0px',
    },
    informationCard: {
        border: '2px solid rgba(7, 47, 71, 0.9)',

        backgroundColor: '#123550',
        borderRadius: '10px',
    },
    header: {
        display: 'flex',
        backgroundColor: 'rgba(7, 47, 71, 0.8)',
        padding: '0px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: '12px',
        paddingBottom: '10px',
        paddingLeft: '14px',
        borderBottom: '3px solid #072f47',

    },
    content: {
        display: 'flex',
        backgroundColor: '#083450',
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: '20px',
        paddingBottom: '22px',
        borderRadius: '10px',

    },

    informationKey: {
        color: '#e2e2e0',
        fontSize: '12px',
        margin: '0px',
        fontWeight: 'regular',
    },
    informationValue: {
        color: '#fff',
        fontSize: '11px',
    },
};

const InformationContainer = styled('div')(styles.informationContainer);
const InformationCard = styled('div')(styles.informationCard);
const InformationKey = styled('div')(styles.informationKey);
const InformationValue = styled('div')(styles.informationValue);
const Header = styled('div')(styles.header);
const Content = styled('div')(styles.content);


const Information = ({ vessel }) => {
    const brand = `${process.env.PUBLIC_URL}/logos/${vessel.fleet}.png`;

    const vesselData = {
        //   Name: vessel.SHIPNAME,
        Shipowner: brand,

        //   IMO: vessel.IMO,
        IPaddress: vessel.ip,
        MMSI: vessel.MMSI,
        // GeneralVesselType: 'Cargo',
        Market: vessel.MARKET,
        // Add the rest of your data here...
    };

    return (
        <InformationContainer>
            {Object.entries(vesselData).map(([key, value]) => (
                <InformationCard key={key}>
                    <Header>
                        <InformationKey>{key}</InformationKey>
                    </Header>
                    <Content>
                        {key === 'Shipowner' && vessel.fleet ? <img src={value} alt="Logo" width="130px" /> : <InformationValue>{value}</InformationValue>}
                    </Content>
                </InformationCard>
            ))}
        </InformationContainer>
    );
};

export default Information;