const axios = require('axios');
const AWS = require('aws-sdk');


AWS.config.update({
    accessKeyId: 'AKIAQA7G7ZII7XW5FKGA',
    secretAccessKey: '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',
    region: 'eu-north-1',
  });
  
  const dynamodb = new AWS.DynamoDB.DocumentClient();

class Vessel {
    constructor({ LAT, LON, SHIPNAME, FLAG, IMO, MMSI }) {
        this.LAT = LAT;
        this.LON = LON;
        this.SHIPNAME = SHIPNAME;
        this.FLAG = FLAG;
        this.IMO = IMO;
        this.MMSI = MMSI;
    }
}

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
                    TableName: 'Vessels',
                    Item: {
                        'MMSI': vessel.MMSI,
                        'LAT': vessel.LAT,
                        'LON': vessel.LON,
                        'SHIPNAME': vessel.SHIPNAME,
                        'FLAG': vessel.FLAG,
                        'IMO': vessel.IMO,
                    },
                };

                await dynamodb.put(params).promise();
            }
        }

        return { statusCode: 200, body: JSON.stringify({ message: 'Vessels data saved successfully.' }) };
    } catch (error) {
        console.error(error);
        return { statusCode: 500, body: JSON.stringify({ message: 'An error occurred while saving vessels data.' }) };
    }
};