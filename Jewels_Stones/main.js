'use strict';

// Problem Description at -> https://leetcode.com/problems/jewels-and-stones/

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
    // First approach
    let count = 0;
    for (let i = 0; i < J.length; i++) {
        count += [...S].reduce((a, c) => (J[i] == c) ? ++a : a, 0);
    }
    
    return count;
};

// var numJewelsInStones = function(J, S) {
//     // Second approach
//     let count = 0;
//     for (let i = 0; i < J.length; i++) {
//         for (let j = 0; j < S.length; j++) {
//             if (J[i] == S[j]) {
//                 count++;
//             }
//         }
//     }
    
//     return count;
// };


console.log(numJewelsInStones('aA', 'aAAbbbb'));  // 3
console.log(numJewelsInStones('ebd', 'bbb'));  // 3
