'use strict';

const unique = array => {
  const uniq = [];
  for (const item of array) {
    const index = uniq.indexOf(item);
    if (index < 0) uniq.push(item);
  }
  return uniq;
};

module.exports = { unique };
