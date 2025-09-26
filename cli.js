'use strict';

const { program } = require('commander');
const { analyze, refactor } = require('./src/tools');

program
  .command('analyze')
  .option('-p, --path <path>', 'path to the project for analysis')
  .action((options) => {
    analyze(options.path);
  });

program
  .command('refactor')
  .option('-p, --path <path>', 'path to the project for refactoring')
  .action((options) => {
    refactor(options.path);
  });

program.parse(process.argv);