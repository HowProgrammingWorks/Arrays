'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = array => {
  const na = [];

  array.forEach(i => {
    if (!na.includes(i)) na.push(i);
  });

  return na;
};

module.exports = { unique };
