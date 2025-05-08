const https = require('https');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    path: '/posts/1', // specify a valid path
    method: 'GET'
};

const client = https.request(options, (res) => {
    let data = '';

    res.on('data', (chunk) => {
        data += chunk;
    });

    res.on('end', () => {
        console.log("Data received:");
        console.log(data);
    });
});

// Proper error handling
client.on('err', (e) => {
    console.error('Error in client:', e.message);
});

// End the request
client.end();
