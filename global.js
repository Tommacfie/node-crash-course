let counter = 0;



function bigTimer() {
  const delay = setTimeout(timer, 2000);
  function timer() {

    const timer = setInterval(countup, 1000);

    function countup() {

      if (counter <= 10) {

        console.log(counter);
        counter++;
      } else {
        clearInterval(timer);
        console.log('Time\'s up!');
      }
    }
  }
}


module.exports = {
  bigTimer
}
