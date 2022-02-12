import stylish from './stylish.js';
import plain from './plain.js';

const formatter = (diff, formatName) => {
  if (formatName === 'stylish') {
    return stylish(diff);
  }
  return plain(diff);
};

export default formatter;
