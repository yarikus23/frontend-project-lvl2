import { fileURLToPath } from 'url';
import yaml from 'js-yaml';
import fs, { readFileSync } from 'fs';
import path, { dirname } from 'path';
import parser from '../src/parsers.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('parse JSON', () => {
  const filePath = path.join(__dirname, '..', '__fixtures__', 'file1.json');
  const etalon = JSON.parse(readFileSync(filePath, 'utf8'));
  expect(parser(filePath)).toEqual(etalon);
});

test('parse YAML', () => {
  const filePath = path.join(__dirname, '..', '__fixtures__', 'parseFile.yaml');
  const etalon = yaml.load(fs.readFileSync(filePath, 'utf8'));
  expect(parser(filePath)).toEqual(etalon);
});

test('parse YML', () => {
  const filePath = path.join(__dirname, '..', '__fixtures__', 'parseFile.yml');
  const etalon = yaml.load(fs.readFileSync(filePath, 'utf8'));
  expect(parser(filePath)).toEqual(etalon);
});
