'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) =>
  // Solution is not short
  array1.filter(element => !array2.includes(element));

module.exports = { difference };
