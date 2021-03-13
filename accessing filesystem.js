// FILE SYSTEM
// This loads the 'File System' module
// This allows you to interact with the computers' File System
// It MUST be loaded in order to use it's methods
const fs = require('fs');

// READFILE
// 'fs.readFile' is use below to access a file and read it
// It accepts 2 arguments - the filepath and a function which executes when readFile completes
// You pass the callback functions 'err'(error) and 'data'
// 'fs' is an asynchronous function - it doesn't prevent further code from executing

// fs.readFile('./blog.txt', (err, data) => {
//   if (err) {
//     console.log(err)
//   }
//   console.log(data.toString());
// });

// WRITEFILE
// 'fs.writeFile' is used to write to or create new files
// It accepts 3 arguments
// This OVERWRITES all content with the new
// fs.writeFile('./blog.txt', 'Hello World', () => {
//   console.log('File written');
// })

// DIRECTORIES
// 'fs.existsSync' checks if a file exists in a given directory
// 'fs.mkdir' and 'fs.rmdir' creates or removes a directory, just like in bash

// if (!fs.existsSync('./assets')) {
//   fs.mkdir('./assets', err => {
//     if (err) {
//       console.log(err);
//     }
//     console.log('folder created');
//   });
// } else {
//   fs.rmdir('./assets', (err) => {
//     if (err) {
//       console.log(err)
//     } console.log('Folder deleted');
//   })
// }

// DELETE FILES
// 'fs.unlink' deletes a file

if (fs.existsSync('./deleteme.txt')) {
  fs.unlink('./deleteme.txt', (err) => {
    if (err) {
      console.log(err)
    }
    console.log('file deleted');
  })
} else {
  console.log('No such file');
}