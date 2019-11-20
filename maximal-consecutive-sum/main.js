'use strict';


// Problem Description
/*
    Write a program, which finds a consecutive subsequence of numbers with
    maximal sum. E.g.: {2, 3, -6, -1, (2, -1, 6, 4), -8, 8} => 11
*/


const arr = [2, 3, -6, -1, 2, -1, 6, 4, -8, 8];

function getMaxSeqNum(arr) {
    let numSet = [];
    let maxSet = [];
    let sum = 0;
    let maxSum = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        sum = arr[i];
        numSet = [arr[i]];
        for (let j = i + 1; j < arr.length; j++) {
            sum += arr[j];
            numSet.push(arr[j]);
            if (sum > maxSum) {
                maxSum = sum;
                maxSet = [...numSet];
            }
        }
    }

    console.log(maxSet, `-> ${maxSum}`);
}

getMaxSeqNum(arr);
