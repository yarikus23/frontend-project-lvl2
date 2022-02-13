import _ from 'lodash';

const differ = (obj1, obj2) => {
  const allKeys = _.union(Object.keys(obj1), Object.keys(obj2));
  const sortedKeys = _.sortBy(allKeys);
  const diff = sortedKeys.reduce((acc, key) => {
    const value1 = obj1[key];
    const value2 = obj2[key];
    if (_.has(obj1, key) && !_.has(obj2, key)) {
      return { ...acc, [key]: { type: 'deleted', val1: value1 } };
    }
    if (!_.has(obj1, key) && _.has(obj2, key)) {
      return { ...acc, [key]: { type: 'added', val1: value2 } };
    }
    if (_.isObject(value1) && _.isObject(value2)) {
      const children = differ(value1, value2);
      return { ...acc, [key]: { type: 'unchanged', val1: children } };
    }
    const value = (value1 === value2) ? { type: 'unchanged', val1: value1 } : { type: 'changed', val1: value1, val2: value2 };
    return { ...acc, [key]: value };
  }, {});
  return diff;
};

export default differ;
