'use strict';

// Problem Description at -> https://leetcode.com/problems/fizz-buzz/

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    const output = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 == 0) {
            output.push('FizzBuzz');
        }
        else if (i % 3 == 0) {
            output.push('Fizz');
        }
        else if (i % 5 == 0) {
            output.push('Buzz');
        }
        else {
            output.push(i.toString());   
        }
    }
    
    return output;
};