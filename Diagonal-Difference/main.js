'use strict';


// Problem description at -> https://www.hackerrank.com/challenges/diagonal-difference/problem


/*
    => 2
    1 2 3
    4 5 6
    9 8 9
    =====
    => 15
    11 2 4
    4 5 6
    10 8 -12
*/

const arr = [
    [1, 2, 3],
    [4, 5, 6],
    [9, 8, 9]
];

// const arr = [
//     [11, 2, 4],
//     [4, 5, 6],
//     [10, 8, -12]
// ];

function diagonalDiff(arr) {
    let leftDiagonal = 0;
    let rightDiagonal = 0;

    for (let row = 0; row < arr.length; row++) {
        leftDiagonal += arr[row][row];
        rightDiagonal += arr[row][arr.length - row - 1];
    }

    return Math.abs(leftDiagonal - rightDiagonal);
}

console.log(diagonalDiff(arr));