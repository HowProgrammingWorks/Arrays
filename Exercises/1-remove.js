'use strict';

const removeElement = (array, item) =>
  (array.includes(item) ? array.splice(array.indexOf(item), 1) : array);

module.exports = { removeElement };
