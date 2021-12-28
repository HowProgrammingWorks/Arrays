'use strict';
const array = [1, 2, 3, 4, 5, 6, 7];
const removeElements = (array, ...items) => {
  for (const key of items) {
    const i = array.indexOf(key);
    if (i !== -1) array.splice(i, 1);
  }
};

removeElements(array, 5, 1, 6);
console.log(array);


module.exports = { removeElements };
