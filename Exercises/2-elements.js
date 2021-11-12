'use strict';

const removeElements = (array, ...items) => {
  for (let i = 0; i < items.length; i++) {
    const index = array.indexOf(items[i]);
    if (index !== -1) array.splice(index, 1);
  }
};
const array = ['Kiev', 'Beijing', 'Lima', 'Saratov'];
removeElements(array, 'Lima', 'Berlin', 'Kiev');
console.log(array);
module.exports = { removeElements };
