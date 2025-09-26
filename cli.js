'use strict';

const { program } = require('commander');
const { analyze, refactor } = require('./src/tools');

program
  .command('analyze')
  .option('-p, --path <path>', 'Specify the path to the project for analysis')
  .option('-v, --verbose', 'Enable verbose output for detailed information')
  .action((options) => {
    analyze(options.path, options.verbose);
  });

program
  .command('refactor')
  .option('-p, --path <path>', 'Specify the path to the project for refactoring')
  .option('-v, --verbose', 'Enable verbose output for detailed information')
  .action((options) => {
    refactor(options.path, options.verbose);
  });

program.parse(process.argv);