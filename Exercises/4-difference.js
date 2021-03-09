'use strict';


const difference = (array1, array2) => {
  const diffArr = [];

  array1.forEach((el) => {
    if (!array2.includes(el)) diffArr.push(el);
  });

  return diffArr;
};

module.exports = { difference };
