'use strict';

const removeElements = (array, ...items) => {
  items.forEach(item => {
    const idx = array.findIndex(el => el === item);
    if (idx >= 0) array.splice(idx, 1);
  });
};

module.exports = { removeElements };
