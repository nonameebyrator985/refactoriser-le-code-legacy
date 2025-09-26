'use strict';

const { program } = require('commander');
const { analyze, refactor } = require('./src/tools');

program
  .command('analyze')
  .option('-p, --path <path>', 'path to the project for analysis')
  .option('-v, --verbose', 'increase verbosity of output')
  .action((options) => {
    analyze(options.path, options.verbose);
  });

program
  .command('refactor')
  .option('-p, --path <path>', 'path to the project for refactoring')
  .option('-v, --verbose', 'increase verbosity of output')
  .action((options) => {
    refactor(options.path, options.verbose);
  });

program.parse(process.argv);