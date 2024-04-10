import React, { useContext } from "react";
import { Card } from "@aws-amplify/ui-react";
import "./VesselPage.css"
import { ThemeContext } from "../../themes/ThemeContext";
//import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/system';
//import Icon from "@mui/material/Icon";
//import FlashOnIcon from '@mui/icons-material/FlashOn';
import Fuel from '@mui/icons-material/LocalGasStation';
import CO2 from '@mui/icons-material/Co2Outlined';
import EnergySavingsLeafIcon from '@mui/icons-material/EnergySavingsLeaf';


//import styled, { keyframes } from 'styled-components';
const colorMapping = {
  'Energy': '#bfe8ce',
  'Fuel': '#ffefc6',
  'CO2': '#bff1ff',
  // add other title-color pairs here
};

const iconMapping = {
  'Energy': <EnergySavingsLeafIcon style={{ fontSize: 19, color: colorMapping['Energy'] }} />,
  'Fuel': <Fuel style={{ fontSize: 19, color: colorMapping['Fuel'] }} />,
  'CO2': <CO2 style={{ fontSize: 19, color: colorMapping['CO2'] }} />,
  // add other title-icon pairs here
};



interface MiniStatisticProps {
  title: string;
  subtitle: string;
  amount: string;
  icon?: JSX.Element;
  percentage?: number;
  measurement: string;
  color1: string;
  color2: string;
}
const styles = {
  content: {


  },
  header: {
    display: 'flex',
    padding: '0px',
    margin: '0px',
    //backgroundColor: '#0A3149',
    backgroundColor: 'rgba(10, 49, 73, 0.6)',
    // border: '2px solid #082b40',
    // borderBottom: '0px',

    borderTopLeftRadius: '15px',
    borderTopRightRadius: '15px',
  },
  headerLeft: {

    display: 'flex',
    //paddingTop: '10px',
    paddingLeft: '12px',
    paddingTop: '2px',
    margin: '0px',
    right: '0',
    width: '48px',
    alignItems: 'center',



  },
  headerRight: {
    padding: '0px',
    margin: '0px',
    width: 'auto',


  },

  title: {
    alignSelf: 'start',
    fontSize: '15px',
    paddingTop: '16px',
    paddingLeft: '18px',
    marginDown: '10px',
    margin: '0',
  },
  subtitle: {
    fontSize: '10px',
    paddingLeft: '18px',
    paddingBottom: '15px',
    color: '#d9d9d6',


  },
  /* subtitle: {
      fontSize: '12px',
      paddingLeft: '20px',
      paddingBottom: '15px',
      color: '#ececeb',
      visibility: 'hidden', // hide the element
      opacity: 0,
      transition: 'visibility 0s, opacity 0.5s linear',
      // other styles you want...
    }, */
  wrapper: {
    borderTop: '4px solid #072f47',
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '20px',
    paddingBottom: '20px',
    margin: '0',


  },

  value: {

    margin: '0px',
    justifyContent: 'center',

    fontSize: '25px',

  },
  unit: {
    margin: '0px',
    marginTop: '2px',

    marginLeft: '9px',
    fontSize: '22px',
    fontWeight: '300',
  },
  icon: {
    position: 'absolute',
    right: '17px',
    top: '20px',
    width: '41px',
    height: '41px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%', // make it circular
    color: '#fff',
    backgroundColor: 'var(--amplify-colors-brand-primary-60)',
    fontSize: '28px',
    border: '2px solid #fff', // add a 3px wide white border
    padding: '8px', // add padding
  },
  sup: {
    fontSize: '18px',
    marginLeft: '5px',
  }
};

const Content = styled('div')(styles.content);
const Title = styled('div')(styles.title);
const Header = styled('div')(styles.header);
const HeaderLeft = styled('div')(styles.headerLeft);
const HeaderRight = styled('div')(styles.headerRight);
const Subtitle = styled('div')(styles.subtitle);

/*const Subtitle = styled('span')`
  fontSize: '12px';
  paddingLeft: '20px';
  paddingBottom: '15px';
  color: '#fff';
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
`;*/
const Wrapper = styled('div')(styles.wrapper);
const IconWrapper = styled('div') <{ color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  padding: 9px;
`;
const Value = styled('div')(styles.value);
//const Unit = styled('div')(styles.unit);
//const Icon = styled('div')(styles.icon);
const Sup = styled('sup')(styles.sup);


const MiniStatistics = (props: MiniStatisticProps) => {
  const { theme } = useContext(ThemeContext);

  let Icon;
  let color;
  if (props.title.startsWith('Energy')) {
    Icon = iconMapping['Energy'];
    color = colorMapping['Energy'];
  } else if (props.title.startsWith('Fuel')) {
    Icon = iconMapping['Fuel'];
    color = colorMapping['Fuel'];
  } else if (props.title.startsWith('CO2')) {
    Icon = iconMapping['CO2'];
    color = colorMapping['CO2'];
  }

  return (
    <>
      <Card
        className={`amplify-card ${theme}`}
        height="100%"
        borderRadius="15px"
        position='relative'
        margin="0"
        padding="0"
      >
        <Content>
          <Header>
            <HeaderLeft>
              <IconWrapper color={color}>
                {Icon}
              </IconWrapper>


            </HeaderLeft>
            <HeaderRight>
              <Title>{props.title}</Title>
              <Subtitle>total for time period (default last day)</Subtitle>
            </HeaderRight>
          </Header>
          <Wrapper>

            <Value style={styles.value}>
              {props.amount}
            </Value>
            <Sup>{props.measurement}</Sup>
            {/*} <Unit style={styles.unit}>
              {props.measurement}
            </Unit>*/}
          </Wrapper>

          {/*} <Icon>{props.icon}</Icon> */}
        </Content>
      </Card>
    </>
  );
};

export default MiniStatistics;