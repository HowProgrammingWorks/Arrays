'use strict';

// Create and return a new array without duplicate elements
// Don't modify initial array

const unique = (array) => {
    const res = [];
    for (const key of array) {
        if (!res.includes(key)) {
            res.push(key);
        }
    }
    return res;
};
const result = unique([2, 1, 1, 3, 2]);
console.log(result);

module.exports = { unique };
