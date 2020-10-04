const cipher = require('./modules/cipher');
const fileTransform = require('./modules/fileTransform');
const stdinTransform = require('./modules/stdinTransform');
const args = require('./modules/argsSetting');

const shift = args.action === 'encode' ? +args.shift : -args.shift;
const { input, output } = args;

if (input) {
  fileTransform(input, output, shift);
} else {
  stdinTransform(output, shift);
}
