'use strict';

const removeElements = (array, ...items) => {
  for (let i = 0; i < items.length; i++) {
    const indItem = array.indexOf(items[i]);
    if (indItem !== -1) array.splice(indItem, 1);
  }
  return array;
};

module.exports = { removeElements };
