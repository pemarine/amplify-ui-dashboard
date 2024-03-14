import React, { useContext } from "react";
import { Card } from "@aws-amplify/ui-react";
import "./VesselPage.css"
import { ThemeContext } from "../../themes/ThemeContext";
//import { makeStyles } from '@material-ui/core';
import { styled } from '@mui/system';
//import Icon from "@mui/material/Icon";


//import styled, { keyframes } from 'styled-components';


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

  title: {
    alignSelf: 'start',
    fontSize: '16px',
    paddingTop: '15px',
    paddingLeft: '20px',
    marginDown: '10px',
    margin: '0',
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
  value: {
    borderTop: '4px solid #072f47',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',
    marginTop: '11px',

    fontSize: '28px',
    marginBottom: '5px',
    alignSelf: 'center',
    justifySelf: 'center',

  },
  unit: {
    marginLeft: '5px',
    fontSize: '15px',
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
    fontSize: '14px'
  }
};

const Content = styled('div')(styles.content);
const Title = styled('div')(styles.title);
/*const Subtitle = styled('span')`
  fontSize: '12px';
  paddingLeft: '20px';
  paddingBottom: '15px';
  color: '#fff';
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.5s linear;
`;*/

const Value = styled('div')(styles.value);
//const Unit = styled('div')(styles.unit);
//const Icon = styled('div')(styles.icon);
const Sup = styled('sup')(styles.sup);

const MiniStatistics = (props: MiniStatisticProps) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
      <Card
        className={`amplify-card ${theme}`}
        height="100%"
        borderRadius="15px"
        position= 'relative'
        margin="0"
        padding="0"
      >
        <Content>
          <Title>{props.title}</Title>
      {/*}    <Subtitle>{props.subtitle}</Subtitle> */}
          <Value>
            {props.amount}
            <Sup>{props.measurement}</Sup>
          </Value>
         {/*} <Icon>{props.icon}</Icon> */}
        </Content>
      </Card>
    </>
  );
};

export default MiniStatistics;