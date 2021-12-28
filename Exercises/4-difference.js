'use strict';

const difference = (array1, array2) => {
    const res = [];
    for (const key of array1) {
        if (array2.includes(key) === false) {
            res.push(key);
        }
    } return res;
};

module.exports = { difference };
