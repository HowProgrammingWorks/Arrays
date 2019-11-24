'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const res = [];
  for (const el of array) {
    if (res.indexOf(el) === -1) res.push(el);
  }
  return res;
};

// If we know about Set
// const unique2 = array => ([...new Set(array)]);

module.exports = { unique };
