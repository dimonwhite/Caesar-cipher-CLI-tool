const fs = require('fs');

const outputError = () => {
  console.error('Output file does not exist!');
  process.exit(3);
};

module.exports = (result, output, resume) => {
  if (output) {
    fs.readFile(output, 'utf8', (readError) => {
      if (readError) {
        outputError();
      }
      fs.appendFileSync(output, `${result}\r\n`, (error) => {
        if (error) {
          outputError();
        }
      });
    });
  } else {
    process.stdout.write(result);
  }
  if (resume) {
    process.stdin.resume();
  }
};
