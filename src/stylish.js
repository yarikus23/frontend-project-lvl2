const toStylish = (data, replacer = ' ', spacesCount = 2) => {
  const iter = (currentValue, depth) => {
    if (typeof currentValue !== 'object') {
      return currentValue.toString();
    }
    if (currentValue === null) {
      return currentValue;
    }
    const indentSize = depth * spacesCount;
    const currentIndent = replacer.repeat(indentSize);
    const bracketIndent = replacer.repeat(indentSize - spacesCount);
    const lines = Object
      .entries(currentValue)
      .map(([key, val]) => {
        if (val.type === 'deleted') {
          return `${currentIndent}- ${key}: ${iter(val.val1, depth + 2)}`;
        }
        if (val.type === 'added') {
          return `${currentIndent}+ ${key}: ${iter(val.val2, depth + 2)}`;
        }
        if (val.type === 'changed') {
          return `${currentIndent}- ${key}: ${iter(val.val1, depth + 2)}\n${currentIndent}+ ${key}: ${iter(val.val2, depth + 2)}`;
        }
        if (val.type === 'unchanged') {
          return `${currentIndent}  ${key}: ${iter(val.val1, depth + 2)}`;
        }
        return `${currentIndent}  ${key}: ${iter(val, depth + 2)}`;
      });
    return [
      '{',
      ...lines,
      `${bracketIndent}}`,
    ].join('\n');
  };
  return iter(data, 1);
};

export default toStylish;
