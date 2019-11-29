'use strict';

const removeElements = (array, ...items) => {
  for (const i of items) {
    const index = array.indexOf(i);
    if (index !== -1) array.splice(index, 1);
  }
  return array;
};

module.exports = { removeElements };
