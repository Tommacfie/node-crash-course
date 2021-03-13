// REQUIRE
// Use destructured assignment to access elements from other files
// These can then be used normally in the current file
const { people, ages } = require('./exports');
const { bigTimer } = require('./timeout');

console.log(ages, people);
bigTimer();
