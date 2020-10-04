const cipher = require('./cipher');
const returnResult = require('./returnResult');

module.exports = (output, shift) => {
  process.stdin.setEncoding('utf8');

  process.stdin.on('readable', () => {
    var chunk = process.stdin.read();
    if (chunk !== null) {
      const result = cipher(chunk, shift);
      returnResult(result, output, true);
    }
  });
};
