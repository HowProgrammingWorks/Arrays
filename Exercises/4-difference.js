'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) =>
  array1.filter(e => !array2.includes(e));

module.exports = { difference };
