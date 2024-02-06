import React, { useState, useEffect, createContext } from 'react';
//import { DynamoDB } from 'aws-sdk';
import { Vessel } from '../models';
//import env from "dotenv"
//import { DataStore } from 'aws-amplify/datastore';
import { DataStore } from '@aws-amplify/datastore';

const AWS = require('aws-sdk');

// Set the region 
AWS.config.update({region: 'eu-north-1'}); // replace 'REGION' with your region


// Create the DynamoDB service object
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
DataStore.start();
// Create the context
export const VesselsContext = createContext<Vessel[]>([]);

// Create the provider component

export const VesselsProvider = ({ children }) => {
  const [_vessels, setVessels] = useState<Vessel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData called' + _vessels); // Log when fetchData is called

      try {
        const vessels = await DataStore.query(Vessel);
        console.log("hej" + vessels); // This will log an array of Vessel objects
    
        // If you want to convert this to a list of plain objects:
        const vesselList = vessels.map(vessel => {
          return {
            ...vessel,
            // Replace 'field1', 'field2', etc. with the actual fields of your Vessel model
            id: vessel.id,
            SHIPNAME: vessel.SHIPNAME,
            LAT: vessel.LAT,
            LON: vessel.LON,
            FLAG: vessel.FLAG,
            MMSI: vessel.MMSI,
            IMO: vessel.IMO            
            // ...
          };
        });
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


