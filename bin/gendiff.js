#!/usr/bin/env node

import { Command } from 'commander';
import path from 'path';
import genDiff from '../src/diff.js';
import parser from '../src/parsers.js';
import toStylish from '../src/stylish.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format', 'stylish')
  .action((filepath1, filepath2, options) => {
    const currentPath = process.cwd();
    const rootDir = currentPath[0];
    let path1 = path.resolve(filepath1);
    let path2 = path.resolve(filepath2);
    if (filepath1[0] === '/') {
      path1 = path.resolve(rootDir, filepath1);
    }
    if (filepath2[0] === '/') {
      path2 = path.resolve(rootDir, filepath2);
    }
    const obj1 = parser(path1);
    const obj2 = parser(path2);
    const diff = genDiff(obj1, obj2);
    let formatted;
    if (options.format === 'stylish') {
      formatted = toStylish(diff);
    }
    console.log(formatted);
  });

program.parse();
