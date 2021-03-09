'use strict';

const removeElement = (array, item) => {
  array.forEach((el, i) => {
    if (el === item) array.splice(i, 1);
  });
};

module.exports = { removeElement };
