'use strict';

const unique = array => {
  const nArr = [];
  array.forEach(el => {
    let sc = 0;
    for (let j = 0; j < nArr.length; j++) if (el === nArr[j]) sc++;
    if (sc === 0) nArr.push(el);
  });
  return nArr;
};
module.exports = { unique };


