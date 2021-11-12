'use strict';

const unique = (array) => {
  const result = [];
  for (const str of array) {
    if (!result.includes(str)) {
      result.push(str);
    }
  }
  return result;
};
const result = unique([2, 1, 1, 3, 2]);
console.log(result);
module.exports = { unique };
