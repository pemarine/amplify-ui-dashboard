import { DataStore } from '@aws-amplify/datastore';
import { VesselsAISHistory } from '../models';

export const vesselPositionHistory = async (vessel) => {
  try {
    const allVesselsAISHistoryData = await DataStore.query(VesselsAISHistory);
    const vesselsAISHistoryData = allVesselsAISHistoryData.filter(record => record.imo === vessel.IMO);
    console.log('VesselAISHistory:', vesselsAISHistoryData);

    // Transform the data
    const vesselPositions = vesselsAISHistoryData.map(item => {
      const vesselPosition = {
        lat: item.latitude,
        lng: item.longitude,
        timestamp: item.timestamp,
        //_lastChangedAt: new Date(item._lastChangedAt).getTime(), // Convert to Unix timestamp

      };
      return vesselPosition;
    });

    return vesselPositions;
  } catch (err) {
    console.log('Error fetching VesselAISHistory', err);
    return [];
  }
};