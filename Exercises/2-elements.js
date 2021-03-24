'use strict';

const removeElements = (array, ...items) => {
  items.forEach((x) => {
    const index = array.indexOf(x);
    if (index !== -1) array.splice(index, 1);
  });
};

module.exports = { removeElements };
