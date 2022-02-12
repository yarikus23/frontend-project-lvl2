import stylish from './stylish.js';
import plain from './plain.js';
import toJson from './json.js';

const formatter = (diff, formatName) => {
  let format = stylish(diff);
  if (formatName === 'plain') {
    format = plain(diff);
  } else if (formatName === 'json') {
    format = toJson(diff);
  }
  return format;
};

export default formatter;
