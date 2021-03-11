const people = ['Kasia', 'Tom', 'Sam', 'Pat', 'Kamil'];
const ages = [23, 35, 56, 90, 12];

const add = (num1, num2) => {
  setInterval(() => {
    console.log(num1 + num2);
  }, 2000);
}

module.exports = {
  add, people, ages
};