const http = require('http');
const app = require('./index'); // Import the Express app

const PORT = 3000;

setTimeout(() => {
  http.get(`http://localhost:${PORT}/`, (res) => {
    let data = '';

    res.on('data', (chunk) => {
      data += chunk;
    });

    res.on('end', () => {
      if(data.includes('This is a complex message')) {
        console.log('Test passed: Received expected message from server.');
      } else {
        console.error('Test failed: Unexpected response from server.');
        process.exit(1); // Exit with error code

      }
      process.exit(0); // Exit after receiving the response from main
    });

    }).on('error', (err) => {  
        console.error('Test failed: Unable to connect to server.', err);
        process.exit(1); // Exit with error code
    });
}, 1000); // Wait for the server to start before sending the request
