'use strict';

const removeElement = (array, item) => {
  const idx = array.indexOf(item);
  if (idx >= 0) array.splice(idx, 1);
};

module.exports = { removeElement };
