'use strict';

const difference = (array1, array2) => {
  const array = [];
  for (let i = 0; i < array1.length; i++) {
    const item = array1[i];
    if (!array2.includes(item)) array.push(item);
  }
  return array;
};
const array1 = [7, -2, 10, 5, 0];
const array2 = [0, 10];
const result = difference(array1, array2);
console.log(result);
module.exports = { difference };
