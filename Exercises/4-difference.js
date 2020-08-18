'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) =>
  //i'm here because of limit min, but may be it his wrong solution...
  array1.filter(x => !array2.includes(x));

module.exports = { difference };
