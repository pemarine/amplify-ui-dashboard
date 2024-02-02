import { DataStore, Predicates } from 'aws-amplify/datastore';
import { Vessel } from '../models';
import axios from 'axios';


export const updateVessels = async (): Promise<void> => {
  try {
    const response = await axios.get('https://services.marinetraffic.com/api/exportvessels/2892a496929507874e0820afc4eaaa5fc31f9f23?v=9&timespan=5&limit=2000&protocol=jsono');
    if (response.data && Array.isArray(response.data.DATA)) {
      const vessels = response.data.DATA.map((data: any) => ({
        LAT: data.LAT || '',
        LON: data.LON || '',
        SHIPNAME: data.SHIPNAME || '',
        FLAG: data.FLAG || '',
        IMO: data.IMO || '',
        MMSI: data.MMSI || '',
      }));

      // Delete all vessels
     //deleteAllVessels();

      // Clear the local DataStore
   // await DataStore.clear();

      // Start a fresh sync with the backend
     // await DataStore.start();

      //await new Promise(resolve => setTimeout(resolve, 5000));


      //DATA STORE START
      //DataStore.start();
      // Fetch all vessels from the DataStore

      //const currentVessels = await DataStore.query(Vessel);

      for (const vessel of vessels) {
        await DataStore.save(new Vessel({
          LAT: vessel.LAT,
          LON: vessel.LON,
          SHIPNAME: vessel.SHIPNAME,
          FLAG: vessel.FLAG,
          IMO: vessel.IMO,
          MMSI: vessel.MMSI,
        }));
        console.log(response.data);
        // Find the corresponding vessel in the DataStore
        //const currentVessel = currentVessels.find(v => v.IMO === vessel.IMO);
        // Fetch all vessels from the DataStore
        const allVessels = await DataStore.query(Vessel);

        // Find the corresponding vessel in the DataStore
        const currentVessel = allVessels.find(v => v.IMO === vessel.IMO);

          if (currentVessel) {
            // Update the vessel in the DataStore
            await DataStore.save(Vessel.copyOf(currentVessel, updated => {
              if (updated.LAT !== vessel.LAT) {
                updated.LAT = vessel.LAT;
              }
              if (updated.LON !== vessel.LON) {
                updated.LON = vessel.LON;
              }
             
              updated.SHIPNAME = vessel.SHIPNAME;
              updated.FLAG = vessel.FLAG;
              updated.MMSI = vessel.MMSI;
              updated.IMO = vessel.IMO;
             // updated._version = currentVessel._version + 1; // increment the version
              //updated._lastChangedAt = Math.floor(Date.now() / 1000); // update the timestamp

              
            }));
          } else {
            // If there's no corresponding vessel in the DataStore, create a new one
            const newVessel = new Vessel({
              ...vessel,
              LAT: vessel.LAT,
              LON: vessel.LON,
              SHIPNAME: vessel.SHIPNAME,
              MMSI: vessel.MMSI,
              IMO: vessel.IMO,
              //_version: 1, // assign a default value
             //_lastChangedAt: Math.floor(Date.now() / 1000), // assign the current timestamp
            });
            // Check if the vessel already exists in the DataStore
          
            await DataStore.save(newVessel);
          }
        
      }

      //Remove duplicates
      await removeDuplicatesFromDataStore();

    } else {
      console.error('Unexpected response data structure:', response.data);
    }
  } catch (error) {
    console.error('Error fetching data: ', error);
  }
};

export const deleteAllVessels = async (): Promise<void> => {
  try {
    await DataStore.delete(Vessel, Predicates.ALL);
  } catch (error) {
    console.error('Error deleting all vessels: ', error);
  }
};

export const removeDuplicatesFromDataStore = async (): Promise<void> => {
  try {
    // Fetch all vessels from the DataStore
    let vessels = await DataStore.query(Vessel);
    let uniqueVessels: Vessel[] = [];

    for (const vessel of vessels) {
      try{
          for (const _vessel of uniqueVessels) {
            if (vessel.IMO !== _vessel.IMO) {
              uniqueVessels.push(vessel);
            }
          }

      }
      catch (error) {
        console.error('Error deleting vessel: ', error);
      }
    }
     deleteAllVessels();
    // Save the unique vessels to the DataStore
    for (const vessel of uniqueVessels) {
      await DataStore.save(new Vessel({
        LAT: vessel.LAT,
        LON: vessel.LON,
        SHIPNAME: vessel.SHIPNAME,
        FLAG: vessel.FLAG,
        IMO: vessel.IMO,
        MMSI: vessel.MMSI,
      }));
    }

  } catch (error) {
    console.error('Error removing duplicates from DataStore: ', error);
  }
};