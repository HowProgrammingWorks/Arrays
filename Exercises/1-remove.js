'use strict';

const removeElement = (array, item) => {
  const index = array.indexOf(item);
  return index !== -1 ? array.splice(index, 1) : array;
};

module.exports = { removeElement };
