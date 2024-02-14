import React, { useContext } from "react";
import { Card } from "@aws-amplify/ui-react";
import "./VesselPage.css"
import { ThemeContext } from "../../themes/ThemeContext";
import { makeStyles } from '@material-ui/core';
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
const useStyles = makeStyles(() => ({
  content: {
   
    
    },

  title: {
    alignSelf: 'start',
    fontSize: '18px',
    paddingTop: '15px',
    paddingLeft: '20px',
    margin: '0',
  },
  subtitle: {
    fontSize: '12px',
    paddingLeft: '20px',
    paddingBottom: '15px',
    color: '#ececeb',
    // other styles you want...
  },
  value: {
    borderTop: '3px solid #1A223F',
    margin: '0px',
    display: 'flex',
    justifyContent: 'center',
    padding: '15px',

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
}));
const MiniStatistics = (props: MiniStatisticProps) => {
  const { theme } = useContext(ThemeContext);
  const classes = useStyles();

  

  return (
    <>
    <Card
      className={`amplify-card ${theme}`}
      height="100%"
      borderRadius="15px"
      position= 'relative'

      paddingTop={8}
      margin="0"
      padding="0"
      style={{
        
        background: theme === 'dark' 
          ? `radial-gradient(circle 50px at calc(100% - 90px) 50%, ${props.color1} 50%, rgba(144, 202, 249, 0) 100%),
            radial-gradient(circle 80px at 100% 30%,${props.color2} 70%, rgba(144, 202, 249, 0) 100%)`
        : '#082b40',

          
      }}
    >
      <div className={classes.content}>
        <div className={classes.title}>{props.title}</div>
        <div className={classes.subtitle}>{props.subtitle}</div>
        <div className={classes.value}>
          {props.amount}
          <sup className={classes.sup}>{props.measurement}</sup>
        </div>
        <div className={classes.icon}>{props.icon}</div>
      </div>
    </Card>
    </>
  );
};

export default MiniStatistics;
