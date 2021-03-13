// CREATE A SERVER
// The 'http' node module is loaded to create a server
const http = require('http');

// This creates a server
// It accepts as callback function as an argument
// It runs every time a request is made of the server
// The request and response object are available
const server = http.createServer((req, res) => {
  console.log('Request made');
});

// LISTEN
// This method listens out for server requests
// A PORT NUMBER is specified
// A HOST NAME is specified
// A function is executed when listening
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});