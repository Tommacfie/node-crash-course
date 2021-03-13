// CREATE A SERVER
// The 'http' node module is required to create a server
const http = require('http');

// This creates a server
// It accepts as callback function as an argument
// It runs every time a request is made of the server
// The request and response objects are available
// const server = http.createServer((req, res) => {

//   // You can log the requests using the following code:
//   console.log(req.url, req.method);

//   // SET HEADER
//   // 'setHeader' tells the browser what type of data you are sending back
//   res.setHeader('content-type', 'text/html');

//   // This is the content you want to send to the browser
//   res.write('<head><link rel="stylesheet" href="#"></head>');
//   res.write('<h1>Hello World</h1>');
//   res.write('<p>This is my server page</p>');

//   // Then you end the response and send it to the browser with:
//   res.end();
// });


// LISTEN
// This method listens out for server requests
// A PORT NUMBER is specified
// A HOST NAME is specified - 'localhost' is a loopback IP that refers to your computers' IP
// A function is executed when listening
// server.listen(3000, 'localhost', () => {
//   console.log('listening for requests on port 3000');
// });




// ---A BETTER WAY TO SEND A HTML FILE---
// Load the FILESYSTEM module
const fs = require('fs');

// Load the server
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  console.log(req, req)

  // Use 'fs' to access the HTML file
  fs.readFile('./views/index.html', (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      console.log('Action recorded');
      res.write(data);
      res.end();
      // If you are only performing one action you can
      // omit 'res.write(data)' and use 'res.end(data)' instead
    }
  })
});
// Set up the server to listen to requests/responses
server.listen(3000, 'localhost', () => {
  console.log('listening for requests on port 3000');
})
