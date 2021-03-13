const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  fs.readFile('./docs/blog2.txt', (err, data) => {
    console.log(data.toString());
  });

})
server.listen(3000, 'localhost', () => {

})