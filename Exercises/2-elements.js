'use strict';

const removeElements = (array, ...items) => {
  items.forEach((el) => {
    const idx = array.indexOf(el);
    if (idx !== -1) array.splice(idx, 1);
  });

  return array;
};

module.exports = { removeElements };
