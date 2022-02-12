#!/usr/bin/env node

import { Command } from 'commander';
import genDiff from '../src/gendiff.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    if (options.format === 'stylish') {
      console.log(genDiff(filepath1, filepath2));
    } else if (options.format === 'plain') {
      console.log(genDiff(filepath1, filepath2, 'plain'));
    } else if (options.format === 'json') {
      console.log(genDiff(filepath1, filepath2, 'json'));
    }
  });

program.parse();
