// 'use strict';

// Problem Description at -> https://leetcode.com/problems/number-of-1-bits/

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    return [...(n.toString('2'))].reduce((a, c) => c == 1 ? a + 1 : a, 0);
};

console.log(hammingWeight(00000000000000000000000000001011));
