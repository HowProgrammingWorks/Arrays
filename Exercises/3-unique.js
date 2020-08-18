'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const newArr = [];
  array.forEach(x => { if (!newArr.includes(x)) newArr.push(x); });
  return newArr;
};

module.exports = { unique };
