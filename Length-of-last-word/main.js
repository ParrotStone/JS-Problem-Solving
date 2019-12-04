'use strict';

// Problem description at -> https://leetcode.com/problems/length-of-last-word/

/**
 * @param {string} s
 * @return {number}
 */
// First solution
// var lengthOfLastWord = function (s) {
//     s = s.trim();
//     let words = s.split(' ');

//     if (words[words.length - 1].search(/[a-z][^0-9]*/ig) != -1) {
//         return words[words.length - 1].length;
//     }
    
//     return 0;
// };

// // console.log(lengthOfLastWord('Hello World'));  // 5
// // console.log(lengthOfLastWord(''));  // 0
// // console.log(lengthOfLastWord('a'));  // 1

// Second solution
var lengthOfLastWord = function (s) {
    s = s.trim();
    let words = s.split(' ');

    words.reverse();
    for (const word of words) {
        if (word.search(/[a-z][^0-9]*/ig) != -1) {
            return word.length;
        }
        
        return 0;
    }

};
// console.log(lengthOfLastWord('Hello World'));  // 5
// console.log(lengthOfLastWord(''));  // 0
// console.log(lengthOfLastWord('a '));  // 1
// console.log(lengthOfLastWord('a '));  // 1
