import yaml from 'js-yaml';
import fs, { readFileSync } from 'fs';
import parse from '../src/parsers.js';

test('parse JSON', () => {
  const filePath = '../__fixtures__/file1.json';
  const content = readFileSync(filePath, 'utf8');
  expect(parse(filePath)).toEqual(content);
});

test('parse YAML', () => {
  const filePath = '../__fixtures__/parseFile.yaml';
  const content = yaml.load(fs.readFileSync(filePath, 'utf8'));
  expect(parse(filePath)).toEqual(content);
});

test('parse YML', () => {
  const filePath = '../__fixtures__/parseFile.yml';
  const content = yaml.load(fs.readFileSync(filePath, 'utf8'));
  expect(parse(filePath)).toEqual(content);
});
