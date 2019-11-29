'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const arr = [];
  for (const item of array)
    if (!arr.includes(item)) arr.push(item);
  return arr;
};

module.exports = { unique };

