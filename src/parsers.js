import yaml from 'js-yaml';
import path from 'path';
import fs, { readFileSync } from 'fs';

const parser = (filePath) => {
  const format = path.extname(filePath);
  if (format === '.yaml' || format === '.yml') {
    return yaml.load(fs.readFileSync(filePath, 'utf8'));
  }
  const content = readFileSync(filePath, 'utf8');
  return JSON.parse(content);
};

export default parser;
