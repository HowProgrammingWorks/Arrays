'use strict';

const unique = array => {
  const uniq = [];
  for (const item of array) {
    const include = uniq.includes(item);
    if (!include) uniq.push(item);
  }
  return uniq;
};

module.exports = { unique };
