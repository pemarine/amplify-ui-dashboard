import React, { useState, useEffect, createContext } from 'react';
//import { DynamoDB } from 'aws-sdk';
import { Vessel } from '../models';
//import env from "dotenv"
//import { DataStore } from 'aws-amplify/datastore';
//import { DataStore } from '@aws-amplify/datastore';
//import awsconfig from '../aws-exports';
import { vesselPositionHistory } from './VesselPositionHistory';

const AWS = require('aws-sdk');
const { DataStore } = require('@aws-amplify/datastore');

// Set the region 
AWS.config.update({ region: 'eu-north-1' }); // replace 'REGION' with your region
//AWS.config.update(awsconfig);


// Call DynamoDB to read the item from the table 
/*
ddb.scan(params, function (err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.Items);
  }
}); */
//AWS.config.update(awsconfig);
//DataStore.configure(awsconfig);
//DataStore.start();
// Create the DynamoDB service objest
//const dynamodb= new AWS.DynamoDB({apiVersion: '2012-08-10'});
//env.config()
/*
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: 'eu-north-1',
  aws_sdk_load_config: '1',
}); */

// Load environment variables from .env file
//require('dotenv').config();
/*
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region:'eu-north-1'
});*/
/*
AWS.config.update({
  region: 'eu-north-1',
  apiVersion: 'latest',
  aws_sdk_load_config: '1',
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
  }
})
*/
//import { config } from 'dotenv';
/*config();

AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});
*/
// Create a DynamoDB document client
//const dynamodb = new AWS.DynamoDB.DocumentClient();
//DataStore.clear(); // Clear the DataStore before starting the app
//DataStore.stop();
DataStore.start();
// Create the context

/*async function refreshDataStore() {
  await DataStore.clear();
  await DataStore.start();
}

refreshDataStore(); */



export const VesselsContext = createContext<Vessel[]>([]);

// Create the provider component

export const VesselsProvider = ({ children }) => {
  /*  async function createVessel() {
      const newVessel = await DyataStore.save(
        new Vessel({
          SHIPNAME: "Ship Name",
          LAT: "22",
          LON: "33",
          // Add other fields here...
        })
      );
    
      console.log("New vessel created: ", newVessel);
    }
    createVessel(); */


  const [_vessels, setVessels] = useState<Vessel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData called' + _vessels); // Log when fetchData is called

      try {
        const vessels = await DataStore.query(Vessel);
        console.log("JEELEELE", vessels);
        console.log("hej" + vessels); // This will log an array of Vessel objects

        // If you want to convert this to a list of plain objects:
        const vesselList = await Promise.all(vessels.map(async vessel => {
          const positions = await vesselPositionHistory(vessel);

          return {
            ...vessel,
            id: vessel.id,
            SHIPNAME: vessel.SHIPNAME,
            positionsList: positions
          };
        }));
        setVessels(vesselList);

        console.log(vesselList); // This will log an array of plain objects

      } catch (error) {
        console.error("Error fetching vessels: ", error);
      }
    };

    fetchData();
  }, []);

  return (
    <VesselsContext.Provider value={_vessels}>
      {children}
    </VesselsContext.Provider>
  );
};


