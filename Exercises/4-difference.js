'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const arr = [];
  for (const item of array1) {
    if (!array2.includes(item)) arr.push(item);
  }
  return arr;
};

module.exports = { difference };
