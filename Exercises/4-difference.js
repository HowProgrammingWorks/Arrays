'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const newArr = [];
  array1.map(x => { if (!array2.includes(x)) newArr.push(x); });
  return newArr;
};

module.exports = { difference };
