import { DataStore } from '@aws-amplify/datastore';
import { Vessel } from '../models'; // Import your DataStore model

const getVesselsAsJson = async () => {
  try {
    // Use DataStore.query to retrieve a list of Vessels
    const queriedVessels = await DataStore.query(Vessel);
    console.log('Queried vessels:', queriedVessels); // Add this line

    return queriedVessels;
  } catch (error) {
    console.error('Error fetching vessel data:', error);
    return [];
  }

};

export default getVesselsAsJson;
