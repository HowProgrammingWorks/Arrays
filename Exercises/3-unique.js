'use strict';

const unique = array => {
  const newArray = [];
  for (const item of array) {
    !newArray.includes(item) ? newArray.push(item) : array;
  }
  return newArray;
};

module.exports = { unique };
