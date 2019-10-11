'use strict';

// Problem description at -> https://leetcode.com/problems/longest-common-prefix/

/**
 * @param {string[]} strs
 * @return {string}
 * @description Returns the longest common prefix
 */
var longestCommonPrefix = function (strs) {
    if (strs.length == 0) {
        return '';
    }

    if (strs.length == 1) {
        return strs[0];
    }

    // Defensive condition against the ['', '', '', ...]
    if (!strs.join('')) {
        return strs[0];
    }

    let longestCommonPrefix = '';
    let currW = 0;
    let currChar = 0;
    let nextW = currW + 1;
    let isCommon = true;

    while (isCommon) {
        if (strs[currW][currChar] == strs[nextW][currChar] && strs[currW][currChar]) {
            nextW++;
        } else {
            isCommon = false;
        }

        if (nextW >= strs.length) {
            longestCommonPrefix += strs[currW][currChar];
            nextW = currW + 1;
            currChar++;
        }
    }

    return longestCommonPrefix;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));  // fl
console.log(longestCommonPrefix(["dog", "racecar", "car"]));  // ""
console.log(longestCommonPrefix(["flower", "flow", "racecar"]));  // ""