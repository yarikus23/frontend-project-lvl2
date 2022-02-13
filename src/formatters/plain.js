import _ from 'lodash';

const toPlain = (data, parent = []) => {
  const lines = Object.entries(data).reduce((acc, [key, val]) => {
    let value1 = '[complex value]';
    let value2 = '[complex value]';
    if (typeof val.val1 !== 'object' || val.val1 === null) {
      value1 = (typeof val.val1 === 'string') ? `'${val.val1}'` : val.val1;
    }
    if (typeof val.val2 !== 'object' || val.val2 === null) {
      value2 = (typeof val.val2 === 'string') ? `'${val.val2}'` : val.val2;
    }
    const keyPath = [...parent, key].join('.');
    const values = {
      deleted: `Property '${keyPath}' was removed`,
      added: `Property '${keyPath}' was added with value: ${value1}`,
      changed: `Property '${keyPath}' was updated. From ${value1} to ${value2}`,
    };
    if (_.has(values, val.type)) {
      return [...acc, values[val.type]];
    }
    if (val.type === 'unchanged' && typeof val.val1 === 'object' && val.val1 !== null) {
      return [...acc, toPlain(val.val1, [...parent, key])];
    }
    return acc;
  }, []);
  return lines.join('\n');
};

export default toPlain;
