'use strict';


const difference = (array1, array2) => {
  const res = [];
  for (const el of array1) {
    if (!array2.includes(el)) res.push(el);
  }
  return res;
};

module.exports = { difference };



