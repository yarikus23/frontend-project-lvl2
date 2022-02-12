import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/diff.js';
import parse from '../src/parsers.js';
import toStylish from '../src/formatters/stylish.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathBuilder = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('removing and adding values', () => {
  const obj1 = parse(pathBuilder('remove.json'));
  const obj2 = parse(pathBuilder('add.json'));
  const etalon = readFileSync(pathBuilder('remove-add.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('updating values', () => {
  const obj1 = parse(pathBuilder('updated1.json'));
  const obj2 = parse(pathBuilder('updated2.json'));
  const etalon = readFileSync(pathBuilder('updated.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('without changes', () => {
  const obj1 = parse(pathBuilder('noChange1.json'));
  const obj2 = parse(pathBuilder('noChange2.json'));
  const etalon = readFileSync(pathBuilder('noChange.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('big data JSON', () => {
  const obj1 = parse(pathBuilder('deepFile1.json'));
  const obj2 = parse(pathBuilder('deepFile2.json'));
  const etalon = readFileSync(pathBuilder('etalon.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});

test('big data YAML', () => {
  const obj1 = parse(pathBuilder('deepFile1.yaml'));
  const obj2 = parse(pathBuilder('deepFile2.yml'));
  const etalon = readFileSync(pathBuilder('etalon.yaml'), 'utf8');
  expect(toStylish(genDiff(obj1, obj2))).toEqual(etalon);
});
