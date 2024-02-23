
const axios = require('axios');
const AWS = require('aws-sdk');
const { v4: uuidv4 } = require('uuid');
const { DataStore } = require('@aws-amplify/datastore');

//const uuid = require('uuid');

//const Amplify = require('aws-amplify');
//const awsconfig = require('../../../../../src/aws-exports');
//require = require("esm")(module);
//const awsconfig = require('../../../../../src/aws-exports.js');
//Amplify.configure(awsconfig);
//const Vessel = require('./models');

//const Vessel = require('../../api/amplifyDashboard/build');
/*
AWS.config.update({
    accessKeyId: 'AKIAQA7G7ZIIWXDC75NM',
    secretAccessKey: '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',
    region: 'eu-north-1',
  });
  */
//const { API, graphqlOperation } = require('aws-amplify');
//const { getVessels } = require('../../../../../src/graphql/queries/getVessels.graphql');
//const { createVessel } = require('../../../../../src/graphql/queries/createVessel');
//const { createVessel, getVessels } = require('../../../api/amplifyDashboard/schema.graphql');
//const DataStore = require('aws-amplify').DataStore;

//const Vessel = require('../models/index.js').Vessel;
//const { createRequire } = require('module');
//const requireModule = createRequire(import.meta.url);
//const { Vessel } = requireModule('../models/index.mjs');
/*import('./models/index.mjs').then(models => {
    const Vessel = models.Vessel;
    // Rest of your code...
  }); */
//const { Vessel } = require('../../../../../src/models');
//const { DataStore } = require('@aws-amplify/datastore');
//import Vessel from '../../../../../src/models';
//const dynamodb = new AWS.DynamoDB.DocumentClient();
/*
class Vessel {
    constructor({ LAT, LON, SHIPNAME, FLAG, IMO, MMSI }) {
        this.id = uuid.v4();
        this.LAT = LAT;
        this.LON = LON;
        this.SHIPNAME = SHIPNAME;
        this.FLAG = FLAG;
        this.IMO = IMO;
        this.MMSI = MMSI;
        this.__typename =  'Vessel';
        this._lastChangedAt = new Date().toISOString();
        this.createdAt = new Date().toISOString();
        this.updatedAt = new Date().toISOString();
        this._version = 1;
    }
}
*/

/*
exports.handler = async (event) => {
    try {
        const response = await axios.get('https://services.marinetraffic.com/api/exportvessels/2892a496929507874e0820afc4eaaa5fc31f9f23?v=9&timespan=5&limit=2000&protocol=jsono');
        if (response.data && Array.isArray(response.data.DATA)) {
            const vessels = response.data.DATA.map((data) => new Vessel({
                LAT: data.LAT || '',
                LON: data.LON || '',
                SHIPNAME: data.SHIPNAME || '',
                FLAG: data.FLAG || '',
                IMO: data.IMO || '',
                MMSI: data.MMSI || '',
            }));
    
            for (const vessel of vessels) {
                const params = {
                    TableName: 'Vessel-7zpyoegrijazphw7d7mhvjomfu-emarinedev',
                    Key: { 'id': vessel.id },
                    UpdateExpression: 'set LAT = :lat, LON = :lon, SHIPNAME = :shipname, FLAG = :flag, IMO = :imo, #t = :typename, MMSI = :mmsi, #l = :lastChangedAt, createdAt = :createdAt, updatedAt = :updatedAt, #v = :version',
                    ExpressionAttributeValues: {
                        ':typename': vessel.__typename,
                        ':version': vessel._version,
                        ':lastChangedAt': vessel._lastChangedAt,
                        ':createdAt': vessel.createdAt,
                        ':lat': vessel.LAT,
                        ':lon': vessel.LON,
                        ':shipname': vessel.SHIPNAME,
                        ':flag': vessel.FLAG,
                        ':imo': vessel.IMO,
                        ':mmsi': vessel.MMSI,
                        ':updatedAt': new Date().toISOString(),

                        
                    },
                    ExpressionAttributeNames: {
                        '#t': '__typename',
                        '#l': '_lastChangedAt',
                        '#v': '_version',


                    },
                    ReturnValues: 'UPDATED_NEW',
                };
    
                await dynamodb.update(params).promise();
            }
        }
    
        return { statusCode: 200, body: JSON.stringify({ message: 'Vessels data saved successfully.' }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ message: 'An error occurred while saving vessels data.' }) };
    }
};
*/

  
const dynamodb = new AWS.DynamoDB.DocumentClient();

class Vessel {
    constructor({
        id,
        __typename,
        _lastChangedAt,
        _version,
        //clientID,
        //outsideTemp,
        AVG_SPEED,
        createdAt,
        CURRENT_PORT,
        DISTANCE_TO_GO,
        DISTANCE_TRAVELLED,
        DESTINATION,
        FLAG,
        IMO,
        LAST_PORT,
        LAT,
        LON,
        MARKET,
        MAX_SPEED,
        MMSI,
        NEXT_PORT,
        NEXT_PORT_NAME,
        SHIPNAME,
        SPEED,
        TYPE_NAME,
        updatedAt
    }) {
        this.id = id;
        this.__typename = __typename;
        this._lastChangedAt = _lastChangedAt;
        this._version = _version;
      //  this.clientID = clientID;
       // this.outsideTemp = outsideTemp;
        this.AVG_SPEED = AVG_SPEED;
        this.createdAt = createdAt;
        this.CURRENT_PORT = CURRENT_PORT;
        this.DISTANCE_TO_GO = DISTANCE_TO_GO;
        this.DISTANCE_TRAVELLED = DISTANCE_TRAVELLED;
        this.DESTINATION = DESTINATION;
        this.FLAG = FLAG;
        this.IMO = IMO;
        this.LAST_PORT = LAST_PORT;
        this.LAT = LAT;
        this.LON = LON;
        this.MARKET = MARKET;
        this.MAX_SPEED = MAX_SPEED;
        this.MMSI = MMSI;
        this.NEXT_PORT = NEXT_PORT;
        this.NEXT_PORT_NAME = NEXT_PORT_NAME;
        this.SHIPNAME = SHIPNAME;
        this.SPEED = SPEED;
        this.TYPE_NAME = TYPE_NAME;
        this.updatedAt = updatedAt;
    }
}

async function createOrUpdateVessel(vessel) {
    //DataStore.save(vessel);
    const queryParams = {
        TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
        IndexName: 'IMO-index', // replace with the name of your index
        KeyConditionExpression: 'IMO = :imo',
        ExpressionAttributeValues: {
            ':imo': vessel.IMO
        }
    };

    try {
        const data = await dynamodb.query(queryParams).promise();

        if (data.Items.length > 0) {
            // Vessel with the same IMO exists, update it
            const updateParams = {
                TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
                Key: {
                    'id': data.Items[0].id
                },
                UpdateExpression: "set #__typename = :t, #_lastChangedAt = :l, #_version = :v, AVG_SPEED = :as, createdAt = :c, CURRENT_PORT = :cp, DISTANCE_TO_GO = :dtg, DISTANCE_TRAVELLED = :dt, DESTINATION = :dst, FLAG = :f, IMO = :i, LAST_PORT = :lp, LAT = :lat, LON = :lon, MARKET = :m, MAX_SPEED = :ms, MMSI = :mmsi, NEXT_PORT = :np, NEXT_PORT_NAME = :npn, SHIPNAME = :sn, SPEED = :s, TYPE_NAME = :tn, updatedAt = :u",
                ExpressionAttributeNames: {
                    '#__typename': '__typename',
                    '#_version': '_version',
                    '#_lastChangedAt': '_lastChangedAt'
                },
                ExpressionAttributeValues: {
                    ':t': vessel.__typename,
                    ':l': vessel._lastChangedAt,
                    ':v': vessel._version,
                    ':as': vessel.AVG_SPEED,
                    ':c': vessel.createdAt,
                    ':cp': vessel.CURRENT_PORT,
                    ':dtg': vessel.DISTANCE_TO_GO,
                    ':dt': vessel.DISTANCE_TRAVELLED,
                    ":dst": vessel.DESTINATION,
                    ':f': vessel.FLAG,
                    ':i': vessel.IMO,
                    ':lp': vessel.LAST_PORT,
                    ':lat': vessel.LAT,
                    ':lon': vessel.LON,
                    ':m': vessel.MARKET,
                    ':ms': vessel.MAX_SPEED,
                    ':mmsi': vessel.MMSI,
                    ':np': vessel.NEXT_PORT,
                    ':npn': vessel.NEXT_PORT_NAME,
                    ':sn': vessel.SHIPNAME,
                    ':s': vessel.SPEED,
                    ':tn': vessel.TYPE_NAME,
                    ':u': new Date().toISOString(),
                //    ':ot': vessel.outsideTemp,
              //      ':cid': vessel.clientID
                    
                },
                ReturnValues: "UPDATED_NEW"
            };

            await dynamodb.update(updateParams).promise();
            console.log('Vessel updated successfully');
        } else {
            // No vessel with the same IMO, create a new one
            const putParams = {
                TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
                Item: vessel

                /*Item: {
                    id: data.Items.length > 0 ? data.Items[0].id : vessel.id, // use the existing id if a vessel with the same IMO exists
                    __typename: vessel.__typename,
                    _version: vessel._version,
                    _lastChangedAt: vessel._lastChangedAt,
                    SHIPNAME: vessel.SHIPNAME,
                    IMO: vessel.IMO,
                    MMSI: vessel.MMSI,
                    FLAG: vessel.FLAG,
                }*/
            };

            await dynamodb.put(putParams).promise();
            console.log('Vessel put successfully');
        }

        console.log('Operation succeeded');
    } catch (error) {
        console.error('Unable to perform operation. Error:', JSON.stringify(error, null, 2));
    }
}
/*
const vessel = new Vessel({
    id: "766e95c6-0401-4bef-b2e1-7a478992379b",
    __typename: "Vessel",
    _lastChangedAt: "1707213237128",
    _version: "1",
    AVG_SPEED: "null",
    createdAt: "2024-02-06T09:53:57.093Z",
    CURRENT_PORT: "null",
    DISTANCE_TO_GO: "null",
    DISTANCE_TRAVELLED: "null",
    FLAG: "SE",
    IMO: "4242",
    LAST_PORT: "null",
    LAT: "null",
    LON: "null",
    MARKET: "null",
    MAX_SPEED: "null",
    MMSI: "2342",
    NEXT_PORT: "null",
    NEXT_PORT_NAME: "null",
    SHIPNAME: "Test 2",
    SPEED: "null",
    TYPE_NAME: "null",
    updatedAt: "2024-02-06T09:53:57.093Z"
}); */


exports.handler = async (event) => {
    
    try {
        const response = await axios.get('https://services.marinetraffic.com/api/exportvessels/2892a496929507874e0820afc4eaaa5fc31f9f23?v=9&timespan=120&limit=2000&protocol=jsono');
        if (response.data && Array.isArray(response.data.DATA)) {
            const vessels = response.data.DATA.map((data) => new Vessel({
                id: uuidv4(),
                __typename: "Vessel",
                _lastChangedAt: 1707213237130,
                _version: "1",
                AVG_SPEED: data.AVG_SPEED || '',
                createdAt: new Date().toISOString(),
                CURRENT_PORT: data.CURRENT_PORT || '', 
                DISTANCE_TO_GO: data.DISTANCE_TO_GO || '',
                DISTANCE_TRAVELLED: data.DISTANCE_TRAVELLED || '',
                DESTINATION: data.DESTINATION || '',
                FLAG: data.FLAG || '',
                IMO: data.IMO || '',
                LAST_PORT: data.LAST_PORT || '',
                LAT: data.LAT || '',
                LON: data.LON || '',
                MARKET: data.MARKET || '',
                MAX_SPEED: data.MAX_SPEED || '',
                MMSI: data.MMSI || '',
                NEXT_PORT: data.NEXT_PORT || '',
                NEXT_PORT_NAME: "null",
                SHIPNAME: data.SHIPNAME || '',
                SPEED: data.SPEED || '',
                TYPE_NAME: data.TYPE_NAME || '',
                updatedAt: new Date().toISOString(),
                outsideTemp: "null",
                clientID: "null"

            }));

            for (const vessel of vessels) {
                await createOrUpdateVessel(vessel);

            };

              // await dynamodb.put(params).promise();
        } 
        
        return { statusCode: 200, body: JSON.stringify({ message: 'Vessels data saved successfully.' }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ message: 'An error occurred while saving vessels data.' }) };
    }
};

