import format from './formatters/info.js';
import diff from './diff.js';
import pathbuild from './pathbuild.js';
import parse from './parsers.js';

const genDiff = (filepath1, filepath2, formatName = 'stylish') => {
  const path1 = pathbuild(filepath1);
  const path2 = pathbuild(filepath2);
  const obj1 = parse(path1);
  const obj2 = parse(path2);
  const difference = diff(obj1, obj2);
  return format(difference, formatName);
};

export default genDiff;
