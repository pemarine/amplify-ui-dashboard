
import axios from 'axios';

export const fetchVessels = async () => {
  try {
    const response = await axios.get('https://services.marinetraffic.com/api/exportvessels/2892a496929507874e0820afc4eaaa5fc31f9f23?v=9&timespan=5&limit=2000&protocol=jsono');
    return response.data.DATA; // This assumes the API returns the data directly
  } catch (error) {
    console.error('Failed to fetch vessels', error);
    return []; // Return an empty array in case of an error
  }
};

