'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const result = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      result.push(item);
    }
  }
  return result;
};

module.exports = { difference };
