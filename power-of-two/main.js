'use strict';

// Problem Description at -> https://leetcode.com/problems/power-of-two/

/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
    if (n <= 0) return false;

    let powerNum = 0;
    while (2 ** powerNum <= n) {
        if (2 ** powerNum == n)
            return true;

        powerNum++;
    }

    return false;
};
