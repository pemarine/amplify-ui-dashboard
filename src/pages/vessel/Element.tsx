import React, { useContext } from 'react';
import { ThemeContext } from "../../themes/ThemeContext";
import { Card } from '@aws-amplify/ui-react';
import { makeStyles } from '@material-ui/core';



const useStyles = makeStyles(() => ({
    container: {
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        
      },
    card: {

      borderRadius: '4px',
      height: '100%',
      boxSizing: 'border-box',
    },
    title: {
      alignSelf: 'start',
      padding: '0',
      margin: '0',
    },
    value: {
        textAlign: 'center',
      fontSize: '24px',
      marginBottom: '5px',
      alignSelf: 'center',
      justifySelf: 'center',
 
    },
    unit: {
      marginLeft: '5px',
      fontSize: '17px'
    },
  }));
 const Element = ({vessel}) => {
    const { theme } = useContext(ThemeContext);

    const classes = useStyles();

    return (
    <>
      <div className={classes.container}>
        <Card
          className={`amplify-card ${theme}`}
          borderRadius="15px"
          marginBottom="10px"
          style={{
           // border: '2px solid #00c9ff' 

          }}

          
        >
            <div className={classes.card}>
                <p className={classes.title}>
                    Attribute 1
                </p>
                <div className={classes.value}>
                    <span>100</span>
                    <sup className={classes.unit}>MWh</sup>
                </div>
            </div>
        </Card>
        <Card
            className={`amplify-card ${theme}`}
            borderRadius="15px"
            marginBottom="10px"

        >
            <div className={classes.card}>
                <p className={classes.title}>
                    Attribute 2
                </p>
                <div className={classes.value}>
                    <span>{vessel.IMO}</span>
                    <sup className={classes.unit}>MWh</sup>
                </div>
            </div>
        </Card>
        <Card
          className={`amplify-card ${theme}`}
          borderRadius="15px"
        >
            <div className={classes.card}>
                <p className={classes.title}>
                    Attribute 3
                </p>
                <div className={classes.value}>
                    <span>100</span>
                    <sup className={classes.unit}>MWh</sup>
                </div>
            </div>
        </Card>
   
        </div>
    </>
    );
  };
  
  export default Element;