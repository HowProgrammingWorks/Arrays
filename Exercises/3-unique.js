'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
  const res = [];

  for (const item of array) {
    const index = res.indexOf(item);
    if (index === -1) res.push(item);
  }

  return res;
};

module.exports = { unique };
