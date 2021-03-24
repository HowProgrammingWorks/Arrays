'use strict';

const difference = (array1, array2) => {
  const arr = [];
  array1.forEach((x) => {
    if (!array2.includes(x)) arr.push(x);
  });
  return arr;
};

module.exports = { difference };
