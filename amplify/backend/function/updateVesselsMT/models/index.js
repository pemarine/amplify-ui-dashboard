// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema.js';



const { Vessel } = initSchema(schema);

export {
  Vessel
};