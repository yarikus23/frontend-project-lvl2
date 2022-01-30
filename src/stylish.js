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
        const bar1 = '- ';
        const bar2 = '+ ';
        const value1 = val.val1;
        const value2 = val.val2;
        let value = value1;
        if (val.type === 'deleted') {
          bar = bar1;
          value = value1;
        }
        if (val.type === 'added') {
          bar = bar2;
          value = value2;
        }
        if (val.type === undefined) {
          value = val;
        }
        if (val.type === 'changed') {
          return `${currentIndent}${bar1}${key}: ${iter(value1, depth + 2)}\n${currentIndent}${bar2}${key}: ${iter(value2, depth + 2)}`;
        }
        return `${currentIndent}${bar}${key}: ${iter(value, depth + 2)}`;
      });
    return ['{', ...lines, `${bracketIndent}}`].join('\n');
  };
  return iter(data, 1);
};

export default toStylish;
