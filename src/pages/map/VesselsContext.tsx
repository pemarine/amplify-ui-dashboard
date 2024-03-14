import { useState, useEffect, createContext } from 'react';
import { fetchVessels } from './api'; // Import the fetchVessels function

import { Vessel } from './types';

// Create the context
export const VesselsContext = createContext<Vessel[]>([]);

// Create the provider component
export const VesselsProvider = ({ children }) => {
    const [vessels, setVessels] = useState<Vessel[]>([]);  
    useEffect(() => {
      const fetchData = async () => {
        const data = await fetchVessels();
        setVessels(data);
      };
  
      fetchData();
    }, []);
  
    return (
      <VesselsContext.Provider value={vessels}>
        {children}
      </VesselsContext.Provider>
    );
  };