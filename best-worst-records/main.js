#!/usr/bin/env node

// Problem Description at ->> https://www.hackerrank.com/challenges/breaking-best-and-worst-records/problem

console.log(...breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // 2 4
// console.log(...breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42])); // 4 0

function breakingRecords(scores) {
  let currentMax = scores[0];
  let currentMin = scores[0];

  let maxRecord = 0;
  let minRecord = 0;

  for (const score of scores) {
    if (score > currentMax) {
      currentMax = score;
      maxRecord++;
    }

    if (score < currentMin) {
      currentMin = score;
      minRecord++;
    }
  }

  return [maxRecord, minRecord];
}
