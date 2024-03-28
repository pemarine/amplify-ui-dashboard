const { exec } = require('child_process');

exports.handler = async (event) => {
    const ip = event.queryStringParameters.ip; // Get the IP address from the query parameters

    return new Promise((resolve, reject) => {
        exec(`ping -c 1 ${ip}`, (error, stdout, stderr) => {
            if (error) {
                reject({
                    statusCode: 500,
                    body: JSON.stringify('Error pinging IP'),
                });
            } else {
                resolve({
                    statusCode: 200,
                    body: stdout,
                });
            }
        });
    });
};