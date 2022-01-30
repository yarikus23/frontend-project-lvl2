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
          return `${currentIndent}- ${key}: ${iter(val.val1, depth + 2)}\n${currentIndent}+ ${key}: ${iter(val.val2, depth + 2)}`;
        }
        return `${currentIndent}${bar}${key}: ${iter(value, depth + 2)}`;
      });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(data, 1);
};

export default toStylish;
