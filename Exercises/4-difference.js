'use strict';

const difference = (array1, array2) => array1.filter(elem => {
  const duplicate = array2.filter(el => el === elem);
  return duplicate.length === 0;
});

module.exports = { difference };
