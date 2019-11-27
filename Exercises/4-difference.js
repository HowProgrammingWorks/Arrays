'use strict';

const difference = (array1, array2) => {
  const newArray = [];
  for (const item of array1) {
    !array2.includes(item) ? newArray.push(item) : 0;
  }
  return newArray;
};

module.exports = { difference };
