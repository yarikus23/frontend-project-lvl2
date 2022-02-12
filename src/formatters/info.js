import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

const formatter = (diff, formatName) => {
  // let format = stylish(diff);
  if (formatName === 'plain') {
    return plain(diff);
  }
  if (formatName === 'json') {
    return toJson(diff);
  }
  return stylish(diff);
};

export default formatter;
