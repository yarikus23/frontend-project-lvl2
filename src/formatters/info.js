import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

const formatter = (diff, formatName) => {
  if (formatName === 'plain') {
    return plain(diff);
  }
  if (formatName === 'json') {
    return toJson(diff);
  }
  return stylish(diff);
};

export default formatter;
