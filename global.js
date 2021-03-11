setTimeout(() => {
  console.log('Timed Out!');
  clearInterval(int);
}, 3000);

const int = setInterval(() => {
  console.log('Timeout!')
}, 1000);

console.log('Hello');