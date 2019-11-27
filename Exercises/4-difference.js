'use strict';

const difference = (array1, array2) => {
  const newArray = [];
  for (const item of array1) {
    if (!array2.includes(item)) newArray.push(item);
  }
  return newArray;
};

module.exports = { difference };
