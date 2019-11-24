'use strict';

const difference = (array1, array2) => {
  const arr = [];
  for (const item of array1) {
    const include = array2.includes(item);
    if (!include) arr.push(item);
  }
  return arr;
};


module.exports = { difference };
