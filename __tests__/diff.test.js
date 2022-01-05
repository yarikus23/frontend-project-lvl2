import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/diff.js';

test('equal keys, equal values', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const result = '{host: hexlet.io}';
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq2.json');
  const file1 = readFileSync(file1Path, 'utf8');
  const file2 = readFileSync(file2Path, 'utf8');
  console.log(file1Path);
  expect(genDiff(file1, file2)).toEqual(result);
});

// "echo \"Error: no test specified\" && exit 1";
