'use strict';

const unique = (array) => {
  const arr = [];
  array.forEach((x) => {
    if (!arr.includes(x)) arr.push(x);
  });
  return arr;
};

module.exports = { unique };
