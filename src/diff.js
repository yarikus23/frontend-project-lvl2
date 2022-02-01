import _ from 'lodash';

const genDiff = (obj1, obj2) => {
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  const allKeys = _.union(keys1, keys2);
  const sortedKeys = _.sortBy(allKeys);
  const diff = sortedKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    let currentVal;
    if (_.has(obj1, key) && _.has(obj2, key)) {
      if (_.isObject(value1) && _.isObject(value2)) {
        const children = genDiff(value1, value2);
        return { ...acc, [key]: { type: 'unchanged', val1: children } };
      }
      if (value1 === value2) {
        currentVal = { type: 'unchanged', val1: value1 };
      } else {
        currentVal = { type: 'changed', val1: value1, val2: value2 };
      }
      return { ...acc, [key]: currentVal };
    }
    if (_.has(obj1, key)) {
      currentVal = { type: 'deleted', val1: value1 };
    } else {
      currentVal = { type: 'added', val2: value2 };
    }
    return { ...acc, [key]: currentVal };
  }, {});
  return diff;
};

export default genDiff;
