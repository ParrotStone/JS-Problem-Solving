'use strict';

// Problem description at -> https://leetcode.com/problems/palindrome-number/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let temp = x;
    let digitReversed = '';
    while (temp > 0) {
        const lastDigit = temp % 10;
        temp = parseInt(temp / 10);
        digitReversed += lastDigit;
    }
    
    return x == digitReversed;
};

