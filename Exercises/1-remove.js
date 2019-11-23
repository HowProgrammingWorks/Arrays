'use strict';

const removeElement = (array, item) => {
  const idx = array.findIndex(el => el === item);
  if (idx >= 0) array.splice(idx, 1);
};

module.exports = { removeElement };
