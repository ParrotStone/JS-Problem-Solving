'use strict';


/**
 * @param {Array} arr
 * @param {number} target
 */
function countOccurences(arr, target) {
    return arr.reduce((a, c) => c == target ? ++a : a, 0);
}


const arr = [1, 2, 3, 4, 5];
const target = 1;

console.log(countOccurences(arr, 1));
