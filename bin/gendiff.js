#!/usr/bin/env node
/* eslint-disable import/extensions */
/* eslint-disable no-console */

import { Command } from 'commander';
import { readFileSync } from 'fs';
import path from 'path';
import genDiff from '../src/diff.js';

const program = new Command();

program
  .version('1.0.0')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format [type]', 'output format')
  .action((filepath1, filepath2) => {
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
    const file1 = readFileSync(path1, 'utf8');
    const file2 = readFileSync(path2, 'utf8');
    const diff = genDiff(file1, file2);
    console.log(diff);
  });

program.parse();
