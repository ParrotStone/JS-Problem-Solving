'use strict';

// Problem description at -> https://www.hackerrank.com/challenges/sock-merchant/problem


// const ar = [1, 2, 1, 2, 1, 3, 2];  // => 2
// const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];  // -> 3
const ar = [1, 1, 3, 1, 2, 1, 3, 3, 3, 3];  // -> 4
// const ar = [];
// for (let i = 0; i < 100; i++) {
//     ar.push(42);
// }

function sockMerchant(num, colors) {
    const temp = [...colors];
    let numOfPairs = 0;
    let numOfSocks = 1;
    temp.sort((a, b) => a - b);

    for (let i = 0; i < num - 1; i++) {
        if (temp[i] == temp[i + 1]) {
            numOfSocks++;
        }

        if (temp[i] != temp[i + 1] || i == num - 2) {
            numOfPairs += parseInt(numOfSocks / 2);
            numOfSocks = 1;
        }
    }

    return numOfPairs;
}

console.log(sockMerchant(ar.length, ar));