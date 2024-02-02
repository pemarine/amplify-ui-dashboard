import { useState, useEffect, createContext } from 'react';
import { DynamoDB } from 'aws-sdk';
import { Vessel } from '../models';
const AWS = require('aws-sdk');


AWS.config.update({
  accessKeyId: 'AKIAQA7G7ZII7XW5FKGA',
  secretAccessKey: '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',
  region: 'eu-north-1',
});

// Create a DynamoDB document client
const dynamodb = new DynamoDB.DocumentClient();

// Create the context
export const VesselsContext = createContext<Vessel[]>([]);

// Create the provider component
export const VesselsProvider = ({ children }) => {
  const [_vessels, setVessels] = useState<Vessel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log('fetchData called' + _vessels); // Log when fetchData is called

      try {
        const params = {
          TableName: 'Vessels',
        };

        const result = await dynamodb.scan(params).promise();
        console.log('Query result:', result); // Log the entire result

        if (result.Items) {
          let vessels = result.Items as Vessel[];

          /* Remove duplicates by IMO
          vessels = vessels.reduce((unique, o) => {
            if(!unique.some(obj => obj.IMO === o.IMO)) {
              unique.push(o);
            }
            return unique;
          }, []); */

          setVessels(vessels);
        }
      } catch (error) {
        console.error('An error occurred while fetching vessels data:', error);
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