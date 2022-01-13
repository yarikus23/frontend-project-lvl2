import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);
  const globalTab = '    ';
  const obj1Tab = '  - ';
  const obj2Tab = '  + ';
  const diff = sortedKeys.reduce((acc, key) => {
    const obj1Value = `${obj1Tab}${key}: ${obj1[key]}`;
    const obj2Value = `${obj2Tab}${key}: ${obj2[key]}`;
    const globalValue = `${globalTab}${key}: ${obj1[key]}`;
    if (_.has(obj1, key) && _.has(obj2, key)) {
      return (obj1[key] !== obj2[key]) ? [...acc, obj1Value, obj2Value] : [...acc, globalValue];
    }
    if (_.has(obj1, key)) {
      return [...acc, obj1Value];
    }
    return [...acc, obj2Value];
  }, []);
  return `{\n${diff.join('\n')}\n}`;
};

export default genDiff;
