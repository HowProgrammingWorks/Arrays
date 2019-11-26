'use strict';

const removeElements = (array, ...items) => {
  for (const item of items) {
    const index = array.indexOf(item);
    index > -1 ? array.splice(index, 1) : array;
  }
};

module.exports = { removeElements };
