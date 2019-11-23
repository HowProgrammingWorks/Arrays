'use strict';


const difference = (array1, array2) => {
  const res = array1.filter(arg => {
    let sc = 0;
    for (let i = 0; i < array2.length; i++) if (arg === array2[i]) sc++;
    if (sc === 0) return arg;
  });
  return res;
};

module.exports = { difference };
