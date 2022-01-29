import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/diff.js';
import parser from '../src/parsers.js';
import toStylish from '../src/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathBuilder = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('removing and adding values', () => {
  const obj1 = parser(pathBuilder('remove.json'));
  const obj2 = parser(pathBuilder('add.json'));
  const etalon = readFileSync(pathBuilder('remove-add.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('updating values', () => {
  const obj1 = parser(pathBuilder('updated1.json'));
  const obj2 = parser(pathBuilder('updated2.json'));
  const etalon = readFileSync(pathBuilder('updated.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('without changes', () => {
  const obj1 = parser(pathBuilder('noChange1.json'));
  const obj2 = parser(pathBuilder('noChange2.json'));
  const etalon = readFileSync(pathBuilder('noChange.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('big data JSON', () => {
  const obj1 = parser(pathBuilder('deepFile1.json'));
  const obj2 = parser(pathBuilder('deepFile2.json'));
  const etalon = readFileSync(pathBuilder('etalon.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('big data YAML', () => {
  const obj1 = parser(pathBuilder('deepFile1.yaml'));
  const obj2 = parser(pathBuilder('deepFile2.yaml'));
  const etalon = readFileSync(pathBuilder('etalon.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});
