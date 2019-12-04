'use strict';

// Problem description at -> https://www.hackerrank.com/challenges/compare-the-triplets/problem

// const bobPoints = [5, 6, 7];
// const alicePoints = [3, 6, 10];
// // Result => 1, 1

const bobPoints = [17, 28, 30];
const alicePoints = [99, 16, 8];
// Result => 2, 1

function compareTriplets(a, b) {
    let comparisonPoints = [0, 0];
    for (let i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            comparisonPoints[0]++;
        } else if (a[i] < b[i]) {
            comparisonPoints[1]++;
        }
    }

    return comparisonPoints;
}

compareTriplets(bobPoints, alicePoints);