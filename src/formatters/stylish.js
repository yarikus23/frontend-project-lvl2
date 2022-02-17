import _ from 'lodash';

const toStylish = (data, depth = 1) => {
  if (typeof data !== 'object' || data === null) {
    return data;
  }
  const indentSize = depth * 2;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 2);
  const lines = Object.entries(data).map(([key, val]) => {
    const values = {
      deleted: `- ${key}: ${toStylish(val.val1, depth + 2)}`,
      added: `+ ${key}: ${toStylish(val.val1, depth + 2)}`,
      unchanged: `  ${key}: ${toStylish(val.val1, depth + 2)}`,
      changed: `- ${key}: ${toStylish(val.val1, depth + 2)}\n${currentIndent}+ ${key}: ${toStylish(val.val2, depth + 2)}`,
    };
    if (_.has(values, val.type)) {
      return `${currentIndent}${values[val.type]}`;
    }
    return `${currentIndent}  ${key}: ${toStylish(val, depth + 2)}`;
  });
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

export default toStylish;
