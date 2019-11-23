'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const table = {};
  const res = [];
  array.forEach(el => {
    if (!table[el]) {
      table[el] = true;
      res.push(el);
    }
  });
  return res;
};

// If we know about Set
// const unique2 = array => ([...new Set(array)]);

module.exports = { unique };
