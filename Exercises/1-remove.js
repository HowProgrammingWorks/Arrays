'use strict';

const removeElement = (array, item) => {
  const indItem = array.indexOf(item);
  if (indItem !== -1) array.splice(indItem, 1);
  return array;
};

module.exports = { removeElement };
