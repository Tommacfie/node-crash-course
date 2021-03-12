const fs = require('fs');

fs.readFile('./blog2.txt', (err, data) => {
  if (err) {
    console.log(err)
  }
  console.log(data.toString());
});

console.log('last line');