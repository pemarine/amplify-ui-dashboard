




/* Amplify Params - DO NOT EDIT
  ENV
  FUNCTION_UPDATEVESSELSMT_NAME
  REGION
Amplify Params - DO NOT EDIT */


/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */

const AWS = require('aws-sdk');
// const { get } = require('http');
// const secretsManager = require('aws-sdk/clients/secretsmanager');
const awsIot = require('aws-iot-device-sdk');
const path = require('path');
//const { unsubscribe } = require('diagnostics_channel');
/*

const secretsManager = new AWS.SecretsManager({ region: 'eu-north-1' });

const getSecret = async (secretId) => {
  const data = await secretsManager.getSecretValue({ SecretId: secretId }).promise();
  return data.SecretString;
}; */

class Vessel {
  constructor(item) {
    this.id = item.id;
    this.SHIPNAME = item.SHIPNAME;
  }
}
/*
async function updateVessel(vessel, message) {
 c

export const handler = async (event) => {
  try {
    // Scan DynamoDB for vessels

    const secretsManager = new AWS.SecretsManager({ region: 'eu-north-1' });

    const certificateSecret = await secretsManager.getSecretValue({ SecretId: 'cert' }).promise();
    const privateKeySecret = await secretsManager.getSecretValue({ SecretId: 'private_key' }).promise();
    const caCertSecret = await secretsManager.getSecretValue({ SecretId: 'ca' }).promise();

    const certificate = certificateSecret.SecretString;
    const privateKey = privateKeySecret.SecretString;
    const caCert = caCertSecret.SecretString;

    const device = awsIot.device({
      region: 'eu-north-1',
      keyPath: null,  // Not needed when using Secrets Manager
      certPath: null,  // Not needed when using Secrets Manager
      clientId: 'MIRROR',
      clientCert: Buffer.from(certificate),
      privateKey: Buffer.from(privateKey),
      caCert: Buffer.from(caCert),
      host: 'a2z3i0jp6bn4zz-ats.iot.eu-north-1.amazonaws.com'
    });
    device.setMaxListeners(50);

    // Connect to AWS IoT Core
    await new Promise((resolve) => device.on('connect', resolve));
    console.log('Connected to AWS IoT Core');

    // Scan DynamoDB for vessels (replace with your actual logic)
    //const dynamodb = new AWS.DynamoDB.DocumentClient();
    const dynamodb = new AWS.DynamoDB.DocumentClient();

    const result = await dynamodb.scan({ TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev' }).promise();
    const items = result.Items || [];

    const vessels = items.map(item => new Vessel(item));

    // Loop through vessels to dynamically create topics and subscribe
    for (const vessel of vessels) {
      const topic = vessel.SHIPNAME.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join('');
      
        device.subscribe(topic);


      device.on('message', async (topicReceived, payload) => {
        if (topicReceived === topic) { // Ensure message matches current vessel's topic
          console.log(`Received message from ${topicReceived}:`, payload.toString());

          await updateVessel(vessel, payload.toString());

          // Save the message to DynamoDB (replace with your schema)
          /*const params = {
            TableName: 'VesselMessages', // Replace with your table name
            Item: {
              vesselID: vessel.vesselID, // Replace with actual ID field
              topic: topic,
              timestamp: Date.now(),
              message: payload.toString()
            }
          }; 

          //await dynamodb.put(params).promise();
        }
      });

      console.log(`Subscribed to topic: ${topic}`);
    }

    console.log('Listening for messages on subscribed topics...');

    return { statusCode: 200, body: 'Lambda execution completed.' };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: 'Internal server error.' };
  }
};
*/
exports.handler = async (event) => {
  try {
    // Retrieve secrets from Secrets Manager
    const secrets = await getSecrets();

    // Connect to AWS IoT Core
    const device = await connectToIoTCore(secrets);
    console.log('Connected to AWS IoT Core');

    // Scan DynamoDB for vessels
    const vessels = await scanDynamoDBForVessels();

    /* Subscribe to topics and update vessels asynchronously
    await Promise.all(vessels.map(async (vessel) => {
      const topic = generateTopic(vessel.SHIPNAME);
      await subscribeToTopic(device, topic);
      const message = await getMessage(topic, device);
      await updateVessel(vessel, message); // Call updateVessel asynchronously
      await unsubscribeToTopic(device, topic);
    })); */
    for (const vessel of vessels) {
      const topic = generateTopic(vessel.SHIPNAME);
      await subscribeToTopic(device, topic);
      try {
        const message = await getMessage(device, topic); // Get message from the subscribed topic
        if (message) {
          await updateVessel(vessel, message); // Call updateVessel if a message was received
        }
      } finally {
        //await unsubscribeToTopic(topic); // Always unsubscribe, even if errors occur
      }
    }


    return { statusCode: 200, body: 'Lambda execution completed.' };
  } catch (error) {
    console.error('Error:', error);
    return { statusCode: 500, body: 'Internal server error.' };
  }
};
async function getMessage(device, topic) {
  console.log('Subscribed to topic:', topic);

  const messagePromise = new Promise((resolve, reject) => {
    device.on('message', (topic, msg) => {
      console.log('Received message:', topic, msg.toString());
      resolve(msg.toString()); // Resolve the promise with the message
      device.removeAllListeners('message'); // Remove the listener to stop receiving more messages
    });
  });

  const timeoutPromise = new Promise((resolve, reject) => {
    // Set a 60-second timeout
    setTimeout(() => {
      resolve(null); // Resolve the promise with null after 60 seconds
    }, 70000);
  });

  // Return the promise that resolves first
  return Promise.race([messagePromise, timeoutPromise]);
}
// Helper functions (replace placeholders with actual implementations)
async function getSecrets() {
  const secretsManager = new AWS.SecretsManager({ region: 'eu-north-1' });

  const certificateSecret = await secretsManager.getSecretValue({ SecretId: 'cert' }).promise();
  const privateKeySecret = await secretsManager.getSecretValue({ SecretId: 'private_key' }).promise();
  const caCertSecret = await secretsManager.getSecretValue({ SecretId: 'ca' }).promise();

  return {
    certificate: certificateSecret.SecretString,
    privateKey: privateKeySecret.SecretString,
    caCert: caCertSecret.SecretString,
  };
}

async function connectToIoTCore(secrets) {
  const device = awsIot.device({
    region: 'eu-north-1',
    keyPath: null,
    certPath: null,
    clientId: 'MIRROR',
    clientCert: Buffer.from(secrets.certificate),
    privateKey: Buffer.from(secrets.privateKey),
    caCert: Buffer.from(secrets.caCert),
    host: 'a2z3i0jp6bn4zz-ats.iot.eu-north-1.amazonaws.com',
  });
  device.setMaxListeners(50);

  await new Promise((resolve) => device.on('connect', resolve));
  return device;
}

async function scanDynamoDBForVessels() {
  const dynamodb = new AWS.DynamoDB.DocumentClient();
  const result = await dynamodb.scan({ TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev' }).promise();
  const items = (result.Items || []).filter(item => item.clientID && item.clientID !== "");
  //const _items = items.filter(item => item.SHIPNAME === "VIKING VENUS")
  return items.map(item => new Vessel(item)); // Assuming a Vessel class constructor
}

function generateTopic(shipName) {
  return shipName.split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

async function subscribeToTopic(device, topic) {
  await device.subscribe(topic);
  console.log(`Subscribed to topic: ${topic}`);
}
async function unsubscribeToTopic(device, topic) {
  device.end(false, () => {
    console.log(`Disconnected from all topics`);
  });
  // Re-establish connection and subscribe to other topics as needed
}

async function updateVessel(vessel, message) {
  console.log(message);
  /*
  if (!vessel) {
    console.error('Vessel is undefined');
    return;
  }
  let parsedMessage;
  try {
    // Check if message is already an object
    if (typeof message === 'object') {
      parsedMessage = message;
    } else {
      parsedMessage = JSON.parse(message);
    }
  } catch (error) {
    console.error('Error parsing JSON:', error);
    return; // handle error and exit function if parsing fails
  }

  // Check if parsedMessage and metrics property exist
  if (!parsedMessage || !parsedMessage.metrics) {
    console.error('Parsed message or metrics property is undefined');
    return;
  }
*/
  let parsedMessage = JSON.parse(message);
  try {
    // Parse the JSON string into an object (assuming the message is JSON)
   // let parsedMessage = await JSON.parse(message);


    // Use optional chaining and nullish coalescing to handle missing metrics
    const outsideTempObj = parsedMessage.metrics?.find(metric => metric.name === 'Outside temp');
    const HVAC_P_statusObj = parsedMessage.metrics?.find(metric => metric.name === 'HVAC_P_status');
    const En_Vent_P_statusObj = parsedMessage.metrics?.find(metric => metric.name === 'En_Vent_P_status');
    const Pumps_P_statusObj = parsedMessage.metrics?.find(metric => metric.name === 'Pumps_P_status');

    let outsideTemp;
    let HVAC_P_status;
    let En_Vent_P_status;
    let Pumps_P_status;

    if (outsideTempObj) {
      outsideTemp = outsideTempObj.value.toString();
      console.log('Outside temp:', outsideTemp);
    } else {
      console.log('Outside temp not found');
    }

    if (HVAC_P_statusObj) {
      HVAC_P_status = HVAC_P_statusObj.value.toString();
      console.log('HVAC_P_status:', HVAC_P_status);
    } else {
      console.log('HVAC_P_status not found');
    }
    if (En_Vent_P_statusObj) {
      En_Vent_P_status = En_Vent_P_statusObj.value.toString();
      console.log('En_Vent_P_status:', En_Vent_P_status);
    } else {
      console.log('En_Vent_P_status not found');
    }
    if (Pumps_P_statusObj) {
      Pumps_P_status = Pumps_P_statusObj.value.toString();
      console.error('Pumps_P_status:', Pumps_P_status); // typo fixed: error changed to console.log
    } else {
      console.log('Pumps_P_status not found');
    }

    const params = {
      TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
      Key: {
        id: vessel.id, // Assuming 'id' is the primary key for your table
      },
      UpdateExpression: 'set #ot = :outsideTemp, #hps = :HVAC_P_status, #evps = :En_Vent_P_status, #pps = :Pumps_P_status',
      ExpressionAttributeNames: {
        '#ot': 'outsideTemp',
        '#hps': 'HVAC_P_status',
        '#evps': 'En_Vent_P_status',
        '#pps': 'Pumps_P_status',
      },
      ExpressionAttributeValues: {
        ':outsideTemp': outsideTemp || "0",
        ':HVAC_P_status': HVAC_P_status || "0",
        ':En_Vent_P_status': En_Vent_P_status || "0",
        ':Pumps_P_status': Pumps_P_status || "0",
      },
      ReturnValues: 'UPDATED_NEW',
    };

    const result = await new AWS.DynamoDB.DocumentClient().update(params).promise();
    console.log(vessel.SHIPNAME);
    console.log('Update result:', result);
  } catch (error) {
    console.error('Error parsing message or updating vessel:', error);
  }
}