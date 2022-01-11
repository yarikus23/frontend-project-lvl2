import yaml from 'js-yaml';
import path from 'path';
import fs, { readFileSync } from 'fs';

const parse = (filePath) => {
  let parsed;
  const format = path.extname(filePath);
  if (format === '.json') {
    const content = readFileSync(filePath, 'utf8');
    parsed = JSON.parse(content);
  } else if (format === '.yaml' || format === '.yml') {
    parsed = yaml.load(fs.readFileSync(filePath, 'utf8'));
  }
  return parsed;
};

export default parse;
