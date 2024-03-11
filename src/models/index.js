// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Vessel, VesselsAISHistory } = initSchema(schema);

export {
  Vessel,
  VesselsAISHistory
};