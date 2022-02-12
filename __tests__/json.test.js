import { fileURLToPath } from 'url';
import path, { dirname } from 'path';
import { readFileSync } from 'fs';
import genDiff from '../src/diff.js';
import parse from '../src/parsers.js';
import toJson from '../src/formatters/json.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const pathBuilder = (name) => path.join(__dirname, '..', '__fixtures__', name);

test('JSON format', () => {
  const obj1 = parse(pathBuilder('deepFile1.json'));
  const obj2 = parse(pathBuilder('deepFile2.json'));
  const etalon = readFileSync(pathBuilder('jsonFormat.json'), 'utf8');
  expect(toJson(genDiff(obj1, obj2))).toEqual(etalon);
});
