'use strict';


// Problem description -> Find if a given string is a palindrome with a recursive algorithm;

// const str = 'level';
// const str = 'engine';
const str = '0e0';

/**
 * @param {any} str
 */
function isPalindrome(str) {
    if (str.length == 1) return true;
    return (str[0] == str[str.length - 1]) ? isPalindrome(str.slice(1, str.length - 1)) : false;
}

console.log(isPalindrome(str));