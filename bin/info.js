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
    let formatted;
    if (options.format === 'stylish') {
      formatted = genDiff(filepath1, filepath2);
    } else if (options.format === 'plain') {
      formatted = genDiff(filepath1, filepath2, 'plain');
    } else if (options.format === 'json') {
      formatted = genDiff(filepath1, filepath2, 'json');
    }
    console.log(formatted);
  });

program.parse();
