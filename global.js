let counter = 0;

// const delay = setTimeout(bigTimer, 4000);

function bigTimer() {
  const timer = setInterval(countup, 1000);

  function countup() {
    if (counter < 11) {
      console.log(counter);
      counter++;

    } else {
      clearInterval(timer);
      console.log('Time\'s up!');
    }
  }
}
module.exports = {
  bigTimer
}