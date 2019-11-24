'use strict';

// Find difference of two arrays
// elements from array1 that are not includes in array2

const difference = (array1, array2) => {
  const na = [];

  array1.forEach(i => {
    if (!array2.includes(i)) na.push(i);
  });

  return na;
};

module.exports = { difference };
