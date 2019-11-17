'use strict';

// Problem Description at => https://www.hackerrank.com/challenges/lonely-integer/problem

let arr = [2, 3, 3, 6, 2, 6, 4, 8, 1, 4, 8];  // => 1
// arr = [2]; => 2

function findUnique(arr) {
    const commonNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i], i + 1) == -1 && !commonNumbers.includes(arr[i])) {
            return arr[i];
        }

        commonNumbers.push(arr[i]);
    }
}

console.log(findUnique(arr));
