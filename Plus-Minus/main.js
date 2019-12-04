'use strict';

// Problem Description at -> https://www.hackerrank.com/challenges/plus-minus/problem

const arr = [1, 1, 0, -1, -1];  // .400000 - .400000 - .200000

function plusMinus(arr) {
    let numOfPositives = 0;
    let numOfNegatives = 0;
    let numOfZeros = 0;

    for (const num of arr) {
        if (num > 0) numOfPositives++;
        else if (num == 0) numOfZeros++;
        else numOfNegatives++;
    }

    console.log(numOfPositives / arr.length);
    console.log(numOfNegatives / arr.length);
    console.log(numOfZeros / arr.length);
}

plusMinus(arr);