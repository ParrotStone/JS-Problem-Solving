'use strict';

// https://leetcode.com/problems/reverse-integer/

/**
 * @param {number} x
 * @returns {number}
 * @description Returns reversed integer
 */
var reverse = function (x) {
    let temp = Math.abs(x);
    let reversed = '';
    while (temp > 0) {
        reversed += (temp % 10);
        temp = parseInt(temp / 10);
    }

    reversed = Number(reversed) * (x / Math.abs(x));
    if (reversed > ((2 ** 31) - 1) || reversed < -(2 ** 31) || isNaN(reversed)) {
        return 0;
    }

    return reversed;
};

// console.log(reverse(123));  // 321
// console.log(reverse(120)); // 21
// console.log(reverse(-123)); // -321
// console.log(reverse(-987142)); // -241789
console.log(reverse(214748364)); // 463847412