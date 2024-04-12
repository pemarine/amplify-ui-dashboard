const express = require('express');
const bodyParser = require('body-parser');
const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB.DocumentClient();

// declare a new express app
const app = express();
app.use(bodyParser.json());
app.use(awsServerlessExpressMiddleware.eventContext());

class Vessel {
  constructor(data) {
    this.id = data.id;
    this.clientID = data.clientID;
    this.fleet = data.fleet;
    this.ip = data.ip;
    this.outsideTemp = data.outsideTemp;
    this.Outside_Temp_LastDay = data.Outside_Temp_LastDay;
    this.HVAC_P_status = data.HVAC_P_status;
    this.En_Vent_P_status = data.En_Vent_P_status;
    this.Pumps_P_status = data.Pumps_P_status;
    this.IMO = data.IMO;
    this.MMSI = data.MMSI;
    this.SHIPNAME = data.SHIPNAME;
    this.FLAG = data.FLAG;
    this.MARKET = data.MARKET;
    this.TYPE_NAME = data.TYPE_NAME;
    this.LAT = data.LAT;
    this.LON = data.LON;
    this.LAST_PORT = data.LAST_PORT;
    this.CURRENT_PORT = data.CURRENT_PORT;
    this.NEXT_PORT = data.NEXT_PORT;
    this.NEXT_PORT_NAME = data.NEXT_PORT_NAME;
    this.DISTANCE_TO_GO = data.DISTANCE_TO_GO;
    this.DISTANCE_TRAVELLED = data.DISTANCE_TRAVELLED;
    this.DESTINATION = data.DESTINATION;
    this.SPEED = data.SPEED;
    this.AVG_SPEED = data.AVG_SPEED;
    this.MAX_SPEED = data.MAX_SPEED;
    this.updatedAt = data.updatedAt;
    this.En_Vent_Power = data.En_Vent_Power;
    this.En_Vent_Power_Percent = data.En_Vent_Power_Percent;
    this.HVAC_Power = data.HVAC_Power;
    this.HVAC_Power_Percent = data.HVAC_Power_Percent;
    this.Total_Power = data.Total_Power;
    this.Saved_CO2_LastDay = data.Saved_CO2_LastDay;
    this.Saved_Fuel_LastDay = data.Saved_Fuel_LastDay;
    this.Saved_Energy_LastDay = data.Saved_Energy_LastDay;
    this.Pumps_Power = data.Pumps_Power;
    this.Pumps_Power_Percent = data.Pumps_Power_Percent;
    this.HVAC_Avg_Power = data.HVAC_Avg_Power;
    this.Energy_Last_Day = data.Energy_Last_Day;
  }
}

app.get('/vessels/:id', async function(req, res) {
  const params = {
    TableName: 'Vessel-47tnpcgmffejfjbi2tuaoydnhu-dev',
    Key: {
      id: req.params.id,
    },
  };

  try {
    const data = await dynamodb.get(params).promise();
    const vessel = new Vessel(data.Item);
    res.json(vessel);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Could not retrieve vessel' });
  }
});

module.exports = app;