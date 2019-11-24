'use strict';

const removeElements = (array, ...items) => {
  for (const arg of items) {
    const indItem = array.indexOf(arg);
    if (indItem !== -1) array.splice(indItem, 1);
  }
  return array;
};

module.exports = { removeElements };
