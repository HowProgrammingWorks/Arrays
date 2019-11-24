'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const resArr = [];
  for (const arg1 of array1) {
    if (!array2.includes(arg1)) resArr.push(arg1);
  }
  return resArr;
};

module.exports = { difference };
