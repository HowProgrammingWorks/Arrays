'use strict';
// Remove multiple items from array modifying original array

const removeElements = (array, ...items) => {
  items.map(it => {
    if (array.includes(it)) array.splice(array.indexOf(it), 1);
  });
};

module.exports = { removeElements };
