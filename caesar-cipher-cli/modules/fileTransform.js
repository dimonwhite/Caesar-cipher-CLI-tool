const cipher = require('./cipher');
const fs = require('fs');
const returnResult = require('./returnResult');

module.exports = (input, output, shift) => {
  fs.readFile(input, 'utf8', (error, data) => {
    if (error) {
      console.error('Input file does not exist!');
      process.exit(2);
    }
    const result = cipher(data, shift);
    returnResult(result, output);
  });
};
