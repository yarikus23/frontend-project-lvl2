import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('equal keys, equal values', () => {
  const etalon = '{\n    host: hexlet.io\n}';
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq2.json');
  expect(genDiff(file1Path, file2Path)).toEqual(etalon);
});

test('equal keys, not equal values', () => {
  const etalon = '{\n  - host: hexlet.io\n  + host: google.com\n}';
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'eq-noteq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'eq-noteq2.json');
  expect(genDiff(file1Path, file2Path)).toEqual(etalon);
});

test('not equal keys, not equal values', () => {
  const etalon = '{\n  + browser: google\n  - host: hexlet.io\n}';
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'noteq-noteq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'noteq-noteq2.json');
  expect(genDiff(file1Path, file2Path)).toEqual(etalon);
});
