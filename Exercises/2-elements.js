'use strict';

const removeElements = (array, ...items) => {
  for (const item of items)
    array.includes(item) ? array.splice(array.indexOf(item), 1) : array;
};

module.exports = { removeElements };
