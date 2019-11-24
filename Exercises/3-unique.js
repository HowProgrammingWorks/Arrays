'use strict';

const unique = array => {
  const nArr = [];
  for (let i = 0; i < array.length; i++) {
    if (!nArr.includes(array[i])) nArr.push(array[i]);
  }
  return nArr;
};
module.exports = { unique };

