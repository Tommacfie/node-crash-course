// STREAMS
// Uses a buffer to make data available before the entire program has loaded
// There are 2 types: 'Read' streams and 'Write' streams

const fs = require('fs');

// // READ STREAM
// // This initialises the read stream
// // The first argument is the filepath of the file you want to read
// // The second argument specifies that you want the file to be encoded as readable text
const readStream = fs.createReadStream('./docs/blog2.txt', { encoding: 'utf-8' });
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// // 'Readstream.on' is like an event listener
// // It listens to buffered data events
// // The callback function is executed whenever a new piece of data becomes available
// readStream.on('data', data => {
//   console.log('new chunk');
//   console.log(data);

//   // WRITE STREAM
//   // Writes data to a file specified in the arguments
//   // The code below will write the 'NEW CHUNK' string as well as the data read by the Read stream to blog4.txt
//   const writeStream = fs.createWriteStream('./docs/blog4.txt');
//   writeStream.write('\nNEW CHUNK\n');
//   writeStream.write(data);
// })

// PIPING
// This is a shorter way of performing the above process
readStream.pipe(writeStream);

