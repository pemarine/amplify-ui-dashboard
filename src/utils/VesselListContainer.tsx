import { useEffect, useState } from 'react';
//import { LazyVessel } from '../models'; // Import your LazyVessel model
import getVesselsAsJson from './getVesselsAsJson';
import { Vessel } from '../models'; // Import your DataStore model
import { DataStore } from '@aws-amplify/datastore';

const VesselListContainer = () => {
  const [vessels, setVessels] = useState<Vessel[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await DataStore.clear();

      const vessels = await getVesselsAsJson();
      console.log(vessels);
      setVessels(vessels);
    };

    fetchData();
  }, []);

   return vessels;
};

export default VesselListContainer;