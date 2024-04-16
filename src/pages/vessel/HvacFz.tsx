import React from 'react';
//import { ThemeContext } from '../../themes/ThemeContext';
import { styled } from '@mui/system';

interface HvacFzProps {
    fz1Key: string;
    fz1Value: string;
    fz2Key: string;
    fz2Value: string;
    fz3Key: string;
    fz3Value: string;
    fz4Key: string;
    fz4Value: string;
}

const styles = {
    hvacFzContainer: {
        display: 'grid',
        
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '6px',
        padding: '0px',
    },
    fzCard: {
        height: '120px',
        backgroundColor: '#083450',
        borderRadius: '10px',
    },
    header: {
        
      //  backgroundColor: 'rgba(10, 49, 73, 0.6)',
        padding: '0px',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        paddingTop: '12px',
        paddingBottom: '10px',
        paddingLeft: '14px',
       // borderBottom: '3px solid #072f47',

    },
    title: {
        color: '#fff',
        fontSize: '12px',

    },

    content: {
        display: 'flex',
       // backgroundColor: '#083450',
        justifyContent: 'center',
        alignItems: 'center',
        height: '60%',
        borderRadius: '10px',

    },

    fzKey: {
        color: '#e2e2e0',
        fontSize: '10px',
        margin: '0px',
        fontWeight: 'regular',
    },
    fzValue: {
        color: '#fff',
        fontSize: '11px',
    },
};

const HvacFzContainer = styled('div')(styles.hvacFzContainer);
const FzCard = styled('div')(styles.fzCard);
const Title = styled('div')(styles.title);
const FzKey = styled('div')(styles.fzKey);
const FzValue = styled('div')(styles.fzValue);
const Header = styled('div')(styles.header);
const Content = styled('div')(styles.content);

const HvacFz: React.FC<HvacFzProps> = ({ fz1Key, fz1Value, fz2Key, fz2Value, fz3Key, fz3Value, fz4Key, fz4Value }) => {
    // const { theme } = useContext(ThemeContext);

    return (
        <HvacFzContainer>
            <FzCard>
                <Header>
                    <Title>HVAC</Title>
                    <FzKey>{fz1Key}</FzKey>
                </Header>
                <Content>
                    <FzValue>{fz1Value}</FzValue>
                </Content>
            </FzCard>
            <FzCard>
                <Header>
                    <Title>HVAC</Title>

                    <FzKey>{fz2Key}</FzKey>
                </Header>
                <Content>
                    <FzValue>{fz2Value}</FzValue>
                </Content>
            </FzCard>
            <FzCard>
                <Header>
                    <Title>HVAC</Title>

                    <FzKey>{fz3Key}</FzKey>
                </Header>
                <Content>
                    <FzValue>{fz3Value}</FzValue>
                </Content>
            </FzCard>
            <FzCard>
                <Header>
                    <Title>HVAC</Title>

                    <FzKey>{fz4Key}</FzKey>
                </Header>
                <Content>
                    <FzValue>{fz4Value}</FzValue>
                </Content>
            </FzCard>
        </HvacFzContainer>

    );


};
export default HvacFz;
