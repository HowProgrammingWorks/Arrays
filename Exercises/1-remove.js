'use strict';
// Remove item from array modifying original array

const removeElement = (array, item) => {
  if (array.includes(item)) array.splice(array.indexOf(item), 1);
};

module.exports = { removeElement };

