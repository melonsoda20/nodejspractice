const chalk = require('chalk');
const getNotes = require('./notes');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.bold.inverse.green('Success!');
console.log(greenMsg);

// const add = require('./utils.js');

// const sum = add(4, -2);

// console.log(sum);