'use strict';

const { program } = require('commander');
const { analyze, refactor } = require('./src/tools');

program
  .command('analyze')
  .option('-p, --path <path>', 'chemin du projet à analyser')
  .action((options) => {
    analyze(options.path);
  });

program
  .command('refactor')
  .option('-p, --path <path>', 'chemin du projet à refactoriser')
  .action((options) => {
    refactor(options.path);
  });

program.parse(process.argv);
