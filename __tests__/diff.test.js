import fileURLToPath from 'url';
import { dirname, path } from 'path';
import genDiff from '../src/diff.js';

test('equal keys, equal values', () => {
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const result = { host: 'hexlet.io' };
  const file1Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq1.json');
  const file2Path = path.join(__dirname, '..', '__fixtures__', 'eq-eq2.json');
  expect(genDiff(file1Path, file2Path)).toEqual(result);
});

// "echo \"Error: no test specified\" && exit 1";
