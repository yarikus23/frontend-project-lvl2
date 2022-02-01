const toStylish = (data, depth = 1) => {
  if (typeof data !== 'object') {
    return data.toString();
  }
  if (data === null) {
    return data;
  }
  const indentSize = depth * 2;
  const currentIndent = ' '.repeat(indentSize);
  const bracketIndent = ' '.repeat(indentSize - 2);
  const lines = Object.entries(data).map(([key, val]) => {
    let bar = '  ';
    let value = val.val1;
    if (val.type === 'deleted') {
      bar = '- ';
    }
    if (val.type === 'added') {
      bar = '+ ';
      value = val.val2;
    }
    if (val.type === undefined) {
      value = val;
    }
    if (val.type === 'changed') {
      return `${currentIndent}- ${key}: ${toStylish(val.val1, depth + 2)}\n${currentIndent}+ ${key}: ${toStylish(val.val2, depth + 2)}`;
    }
    return `${currentIndent}${bar}${key}: ${toStylish(value, depth + 2)}`;
  });
  return ['{', ...lines, `${bracketIndent}}`].join('\n');
};

export default toStylish;
