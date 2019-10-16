#!/usr/bin/env node

// Problem description at -> https://leetcode.com/problems/implement-strstr/

'use strict';

/**
* @param {string} haystack
* @param {string} needle
* @return {number}
*/
var strStr = function (haystack, needle) {
    if (needle.length == 0) return 0;
    if (needle.length > haystack.length) return -1;

    // First solution
    const splitted = haystack.split(needle);
    return splitted.length > 1 ? splitted[0].length : -1;
};

// // Second solution
// var strStr = function (haystack, needle) {
//     if (needle.length == 0) return 0;
//     if (needle.length > haystack.length) return -1;

//     // // First solution
//     // return haystack.split(needle).length > 1 ? haystack.split(needle)[0].length : -1;

//     for (let i = 0; i < haystack.length; i++) {
//         let x = 0;
//         let indices = [];
//         let isFound = false;
//         for (let j = i; j < haystack.length; j++) {
//             if (haystack[j] == needle[x]) {
//                 isFound = true;
//                 x++;
//                 indices.push(j);
//             } else {
//                 isFound = false;
//                 x = 0
//                 indices = [];
//                 break;
//             }

//             if (x >= needle.length) {
//                 break;
//             }
//         }

//         if (isFound) {
//             if (indices.length == 1 && needle.length > 1 || x < needle.length) return -1;
//             return indices[0]
//         }
//     }

//     return -1;
// };

// var strStr = function (haystack, needle) {
//     if (needle.length == 0) return 0;
//     if (needle.length > haystack.length) return -1;

//     // Third solution using regular expressions
//     const regex = new RegExp(`${needle}`);
//     return haystack.search(regex);
// };

// console.log(strStr('Hello', 'll'));  // 2
// console.log(strStr('mississippi', 'issip'));  // 4
// console.log(strStr('mississippi', 'issi'));  // 1
// console.log(strStr('mississippi', 'issipi'));  // -1
// console.log(strStr('mississippi', 'i'));  // 1
// console.log(strStr('mississippi', 'pi'));  // 9
// console.log(strStr('aaaaa', 'babba'));  // -1
// console.log(strStr('aabaaabaaac', 'aabaaac'));  // 4
// console.log(strStr('mississippi', 'sippia'));  // -1