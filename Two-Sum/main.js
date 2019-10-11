'use strict';

// Problem description at -> https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let indices = [];

    for (let currentNum = 0; currentNum < nums.length; currentNum++) {
        let sum = nums[currentNum];
        indices.push(currentNum);
        for (let j = currentNum + 1; j < nums.length; j++) {
            sum += nums[j];
            indices.push(j);
            if (sum == target) {
                return indices;
            }

            indices.pop();
            sum = nums[currentNum];
        }

        indices = [];
    }


    return indices;
};

console.log(twoSum([2, 7, 11, 15], 9));  // [0, 1]
console.log(twoSum([3, 2, 4], 6));  // [1, 2]
console.log(twoSum([3, 2, 3], 6));  // [0, 2]