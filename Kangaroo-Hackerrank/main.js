#!/usr/bin/env node

'use strict';

// Problem description at ->> https://www.hackerrank.com/challenges/kangaroo/problem

function kangaroo(x1, v1, x2, v2) {

    let posOfK1 = x1;
    let posOfK2 = x2;
    let maxNumOfJumps = 2500;

    let i = 1;

    while (i <= maxNumOfJumps) {
        posOfK1 += v1;
        posOfK2 += v2;

        if (posOfK1 == posOfK2) return 'YES';

        i++;
    }

    return 'NO';
}

// ====================================
// ============ Test cases ============
// ====================================
// console.log(kangaroo(0, 3, 4, 2));  // YES
// console.log(kangaroo(0, 2, 5, 3));  // NO
// console.log(kangaroo(0, 3, 3, 3));  // NO
// console.log('=======================================');
// console.log(kangaroo(3, 5, 3, 2));  // NO
// console.log(kangaroo(3, 3, 3, 3));  // YES
// console.log(kangaroo(0, 5, 4, 2));  // NO
// console.log('=======================================');
console.log(kangaroo(500, 30, 100, 40));  // YES
console.log(kangaroo(-3, 5, 0, 2));  // YES
console.log(kangaroo(-10, 5, 0, 2));  // NO
console.log(kangaroo(0, 3, -5, 3));  // NO
// console.log('=======================================');
// console.log(kangaroo(0, 3, -5, 4));  // YES
// console.log(kangaroo(-3, 2, -4, 2));  // NO
console.log(kangaroo(-300, 2, -4, 1));  // YES
// console.log(kangaroo(2081, 8403, 9107, 8400));  // YES

