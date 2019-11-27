'use strict';

const unique = array => {
  const newArray = [];
  for (const item of array) {
    if (!newArray.includes(item)) newArray.push(item);
  }
  return newArray;
};

module.exports = { unique };
