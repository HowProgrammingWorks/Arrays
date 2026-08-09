'use strict';

const unique = (array) => {
  const filtered = array.filter((el, i) => i === array.indexOf(el));
  return filtered;
};

module.exports = { unique };
