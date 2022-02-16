import _ from 'lodash';

const correctChoice = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  return (typeof value === 'string') ? `'${value}'` : value;
};

const toPlain = (data, parent = []) => {
  const lines = Object.entries(data).reduce((acc, [key, val]) => {
    const value1 = correctChoice(val.val1);
    const value2 = correctChoice(val.val2);
    const keys = [...parent, key];
    const keyPath = keys.join('.');
    const values = {
      deleted: `Property '${keyPath}' was removed`,
      added: `Property '${keyPath}' was added with value: ${value1}`,
      changed: `Property '${keyPath}' was updated. From ${value1} to ${value2}`,
    };
    if (_.has(values, val.type)) {
      return [...acc, values[val.type]];
    }
    if (val.type === 'unchanged' && typeof val.val1 === 'object' && val.val1 !== null) {
      return [...acc, toPlain(val.val1, keys)];
    }
    return acc;
  }, []);
  return lines.join('\n');
};

export default toPlain;
