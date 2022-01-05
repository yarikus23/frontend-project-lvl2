import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import path, { dirname } from 'path';
import genDiff from '../src/diff.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

test('equal keys, equal values', () => {
  const etalon = '{\n    host: hexlet.io\n}';
  // const etalonFilePath = path.join(__dirname, '..', '__fixtures__', 'eq-eq_etalon.json');
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq2.json');
  // const etalonFile = `${readFileSync(etalonFilePath, 'utf8')}`;
  const file1 = readFileSync(file1Path, 'utf8');
  const file2 = readFileSync(file2Path, 'utf8');
  expect(genDiff(file1, file2)).toEqual(etalon);
});

// "echo \"Error: no test specified\" && exit 1";
