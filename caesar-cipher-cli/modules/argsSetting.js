const { program } = require('commander');
program
  .storeOptionsAsProperties(false)
  .option('-s, --shift <number>', 'a shift')
  .option('-i, --input <value>', 'an input file')
  .option('-o, --output <value>', 'an output file')
  .option('-a, --action <type>', 'an action encode/decode')
  .parse(process.argv);

const args = program.opts();
if (!args.action || !args.shift || (args.action !== 'encode' && args.action !== 'decode')) {
  console.error('Action (encode/decode) and the shift are required');
  process.exit(1);
}

module.exports = args;
