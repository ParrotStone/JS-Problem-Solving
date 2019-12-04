'use strict';


// Problem description at -> https://www.hackerrank.com/challenges/mini-max-sum/problem

// const arr = [1, 3, 5, 7, 9];  // -> 16, 24
// const arr = [1, 2, 3, 4, 5];  // -> 10, 14
const arr = [7, 69, 2, 221, 8974];  // -> 299, 9271


function miniMaxSum(arr) {
    let minSum = Number.POSITIVE_INFINITY;
    let maxSum = Number.NEGATIVE_INFINITY;
    let sum = 0;
    const temp = arr.sort((a, b) => a - b);
    for (let i = 0; i < temp.length; i++) {
        sum = temp[i];
        let lengthOfSum = (i + 4);
        if (lengthOfSum > temp.length) break;
        for (let j = i + 1; j < lengthOfSum; j++) {
            sum += temp[j];
        }

        if (sum < minSum) minSum = sum;
        if (sum > maxSum) maxSum = sum;
    }

    console.log(minSum, maxSum);
}

miniMaxSum(arr);