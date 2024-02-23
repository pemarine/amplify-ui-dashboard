

/**
 * @type {import('@types/aws-lambda').APIGatewayProxyHandler}
 */


const mqtt = require('mqtt');
const AWS = require('aws-sdk');

async function updateVessel(vessel, response) {
    // Parse the JSON string into an object
    const dynamodb = new AWS.DynamoDB.DocumentClient();
  
    const data = JSON.parse(response);
    const outsideTempObj = data.metrics.find(metric => metric.name === 'Outside temp');
    const HVAC_P_statusObj = data.metrics.find(metric => metric.name === 'HVAC_P_status');
  
    let outsideTemp;
    let HVAC_P_status;
  
    if (outsideTempObj) {
      outsideTemp = outsideTempObj.value.toString();
      console.log('Outside temp:', outsideTemp); // Logs: Outside temp: 45
    } else {
      console.log('Outside temp not found');
    }
  
    if (HVAC_P_statusObj) {
      HVAC_P_status = HVAC_P_statusObj.value.toString();
      console.log('HVAC_P_status:', HVAC_P_status);
    } else {
      console.log('HVAC_P_status not found');
    }
  
    const params = {
      TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
      Key: {
        id: vessel.id, // Assuming 'id' is the primary key for your table
      },
      UpdateExpression: 'set outsideTemp = :outsideTemp, HVAC_P_status = :HVAC_P_status',
      ExpressionAttributeValues: {
        ':outsideTemp': outsideTemp, // The new value for 'outsideTemp'
        ':HVAC_P_status': HVAC_P_status, // The new value for 'HVAC_P_status'
      },
      ReturnValues: 'UPDATED_NEW',
    };
  
    try {
      const result = await dynamodb.update(params).promise();
      console.log('Update result:', result);
    } catch (error) {
      console.error('Update error:', error);
    }
  };

exports.handler = async (event) => {
    const dynamoDB = new AWS.DynamoDB.DocumentClient();
  
    // Retrieve all the vessel records from the DynamoDB table
    const vessels = await dynamoDB.scan({ TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev' }).promise();
  
    // Use Promise.all to wait for all the MQTT operations to complete
    await Promise.all(vessels.Items.map(async (vessel) => {
      // If there is no clientId for this vessel, skip it
      if (!vessel.clientID) {
        console.log(`Skipping vessel ${vessel.id} because it has no clientId`);
        return;
      } else {
        const options = {
          host: '88ded4b39cac41f5aa4cad288690a3a6.s2.eu.hivemq.cloud',
          port: 8883,
          protocol: 'mqtts',
          username: vessel.clientID,
          password: 'h37teXC90',
        };
        const client = mqtt.connect(options);
  
        // Wrap MQTT events in promises
        const connectPromise = new Promise((resolve, reject) => {
          client.on('connect', () => resolve('Connected'));
          client.on('error', (error) => reject(error));
        });
        let message;
        const messagePromise = new Promise((resolve, reject) => {
          client.on('message', (topic, msg) => {
            console.log('Received message:', topic, msg.toString());
            message = msg.toString();
            resolve();
          });
        });
  
        // Wait for the connection to be established
        try {
          await connectPromise;
          console.log('MQTT Connection Established');
  
          // Subscribe to the MQTT topic
          client.subscribe('topic', (error) => {
            if (error) {
              console.error('Subscription Error:', error);
              throw error;
            }
  
            console.log('Subscribed to my/test/topic');
          });
  
          // Wait for the message event to be triggered
          await messagePromise;
          await updateVessel(vessel, message);
  
          // Disconnect the MQTT client
          client.end();
        } catch (error) {
          console.error('Error:', error);
  
          // Disconnect the MQTT client in case of an error
          client.end();
        }
      }
    }));
  
    return {
      statusCode: 200,
      body: 'Lambda execution completed.',
    };
  };

/*

const AWS = require('aws-sdk');
const mqtt = require('mqtt');

exports.handler = async (event, context) => {
    // Your MQTT broker connection options
    const options = {
        host: '88ded4b39cac41f5aa4cad288690a3a6.s2.eu.hivemq.cloud',
        port: 8883,
        protocol: 'mqtts',
        username: '6G0jW1rCKC1g',
        password: 'h37teXC90',
    };

    // Initialize the MQTT client
    const client = mqtt.connect(options);

    // Wrap MQTT events in promises
    const connectPromise = new Promise((resolve, reject) => {
        client.on('connect', () => resolve('Connected'));
        client.on('error', (error) => reject(error));
    });

    const messagePromise = new Promise((resolve, reject) => {
        client.on('message', (topic, message) => {
            console.log('Received message:', topic, message.toString());
            resolve();
        });
    });

    // Wait for the connection to be established
    try {
        await connectPromise;
        console.log('MQTT Connection Established');

        // Subscribe to the MQTT topic
        client.subscribe('my/test/topic', (error) => {
            if (error) {
                console.error('Subscription Error:', error);
                throw error;
            }

            console.log('Subscribed to my/test/topic');

            // Publish a message to the MQTT topic
            client.publish('my/test/topic', 'Hello', (error) => {
                if (error) {
                    console.error('Publish Error:', error);
                    throw error;
                }

                console.log('Message Published');
            });
        });

        // Wait for the message event to be triggered
        await messagePromise;

        // Disconnect the MQTT client
        client.end();

        return {
            statusCode: 200,
            body: 'Lambda execution completed.',
        };
    } catch (error) {
        console.error('Error:', error);

        // Disconnect the MQTT client in case of an error
        client.end();

        return {
            statusCode: 500,
            body: 'Lambda execution encountered an error.',
        };
    }
};

*/



/*
exports.handler = async (event) => {
    console.log(`EVENT: ${JSON.stringify(event)}`);
    return {
        statusCode: 200,
    //  Uncomment below to enable CORS requests
    //  headers: {
    //      "Access-Control-Allow-Origin": "*",
    //      "Access-Control-Allow-Headers": "*"
    //  },
        body: JSON.stringify('Hello from Lambda!'),
    };
};
*/

