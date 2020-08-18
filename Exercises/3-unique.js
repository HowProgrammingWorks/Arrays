'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const resArr = [];
  for (const arg of array) {
    if (!resArr.includes(arg)) resArr.push(arg);
  }
  return resArr;
};

module.exports = { unique };
