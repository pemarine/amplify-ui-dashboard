/* Amplify Params - DO NOT EDIT
	ENV
	FUNCTION_UPDATEVESSELSMT_NAME
	REGION
Amplify Params - DO NOT EDIT */

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


const mqtt = require('mqtt');
const AWS = require('aws-sdk');

async function updateVessel(vessel, response) {
    // Parse the JSON string into an object
    const dynamodb = new AWS.DynamoDB.DocumentClient();
      
    // Use optional chaining and nullish coalescing to handle missing metrics
    const data = JSON.parse(response);
    const outsideTempObj = data.metrics.find(metric => metric.name === 'Outside temp');
    const HVAC_P_statusObj = data.metrics.find(metric => metric.name === 'HVAC_P_status');
    const En_Vent_P_statusObj = data.metrics.find(metric => metric.name === 'En_Vent_P_status');
    const Pumps_P_statusObj = data.metrics.find(metric => metric.name === 'Pumps_P_status');

    let outsideTemp;
    let HVAC_P_status;
    let En_Vent_P_status;
    let Pumps_P_status;
    
    
    if (outsideTempObj) {
      outsideTemp = outsideTempObj.value.toString();
      console.log('Outside temp:', outsideTemp); // Logs: Outside temp: 45
    } else {
      console.log('Outside temp not found');
    }
  
    if (outsideTempObj) {
      HVAC_P_status = HVAC_P_statusObj.value.toString();
      console.log('HVAC_P_status:', HVAC_P_status);
    } else {
      console.log('HVAC_P_status not found');
    }
    if (outsideTempObj) {
      En_Vent_P_status = En_Vent_P_statusObj.value.toString();
      console.log('En_Vent_P_status:', En_Vent_P_status);
    } else {
      console.log('En_Vent_P_status not found');
    }
    if (Pumps_P_statusObj) {
      Pumps_P_status = Pumps_P_statusObj.value.toString();
      console.log('Pumps_P_status:', Pumps_P_status);
    } else {
      console.log('Pumps_P_status not found');
    }
  
    const params = {
      TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
      Key: {
        id: vessel.id, // Assuming 'id' is the primary key for your table
      },
      UpdateExpression: 'set outsideTemp = :outsideTemp, HVAC_P_status = :HVAC_P_status, En_Vent_P_status = :En_Vent_P_status, Pumps_P_status = :Pumps_P_status',
      ExpressionAttributeValues: {
        ':outsideTemp': outsideTemp, // The new value for 'outsideTemp'
        ':HVAC_P_status': HVAC_P_status, // The new value for 'HVAC_P_status'
        ':En_Vent_P_status': En_Vent_P_status, // The new value for 'En_Vent_P_status'
        ':Pumps_P_status': Pumps_P_status, // The new value for 'Pumps_P_status'
      },
      ReturnValues: 'UPDATED_NEW',
    };
  
    try {
      const result = await dynamodb.update(params).promise();
      console.log(vessel.SHIP_NAME);
      console.log('Update result:', result);
      
    } catch (error) {
      console.error('Update error:', error);
    }
  };

  exports.handler = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
  
    // Retrieve all the vessel records from the DynamoDB table
    const vessels = await dynamoDB.scan({ TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev' }).promise();
  
    const options = {
        host: '88ded4b39cac41f5aa4cad288690a3a6.s2.eu.hivemq.cloud',
        port: 8883,
        protocol: 'mqtts',
        username: '6G0jW1rCKC1g',
        password: 'h37teXC90',
    };
    const client = mqtt.connect(options);
  
    // Wrap MQTT events in promises
    const connectPromise = new Promise((resolve, reject) => {
        client.on('connect', () => resolve('Connected'));
        client.on('error', (error) => reject(error));
    });

    // Wait for the connection to be established
    try {
        await connectPromise;
        console.log('MQTT Connection Established');

        for (const vessel of vessels.Items) {
            if (!vessel.clientID) {
                console.log(`Skipping vessel ${vessel.id} because it has no clientId`);
                continue;
            }

            let name = vessel.SHIPNAME.toLowerCase().split(' ');
            let topic = name.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join('');

            const messagePromise = new Promise((resolve, reject) => {
                client.on('message', (topic, msg) => {
                    console.log('Received message:', topic, msg.toString());
                    resolve(msg.toString());
                });
            });

            client.subscribe(topic, (error) => {
                if (error) {
                    console.error('Subscription Error:', error);
                    throw error;
                }
                console.log('Subscribed to topic', topic);
            });

            const message = await messagePromise;
            await updateVessel(vessel, message);

            client.unsubscribe(topic, (error) => {
                if (error) {
                    console.error('Unsubscription Error:', error);
                    throw error;
                }
                console.log('Unsubscribed from topic', topic);
            });
        }

        // Disconnect the MQTT client
        client.end();
    } catch (error) {
        console.error('Error:', error);

        // Disconnect the MQTT client in case of an error
        client.end();
    }
  
    return {
        statusCode: 200,
        body: 'Lambda execution completed.',
    };
};