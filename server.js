// CREATE A SERVER
// The 'http' node module is loaded to create a server
const http = require('http');

// This creates a server
// It accepts as callback function as an argument
// It runs every time a request is made of the server
// The request and response object are available

const server = http.createServer((req, res) => {

  // You can log the requests using the following code:
  console.log(req.url, req.method);

  // 'setHeader' tells the browser what type of data you are sending back
  res.setHeader('content-type', 'text/html');
  // This is the content you want to send to the browser
  res.write('<head><link rel="stylesheet" href="#"></head>');
  res.write('<h1>Hello World</h1>');
  res.write('<p>This is my server page</p>');
  // This ends the response and sends it to the browser
  res.end();
});

// LISTEN
// This method listens out for server requests
// A PORT NUMBER is specified
// A HOST NAME is specified - 'localhost' is a loopback IP that refers to your computers' IP
// A function is executed when listening
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
});