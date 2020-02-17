#!/usr/bin/env node

// Problem Description at ->> https://www.hackerrank.com/challenges/migratory-birds/problem

// Test cases
console.log(migratoryBirds([1, 1, 1, 2, 2, 3])); // 1
console.log(migratoryBirds([1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 4])); // 3
// console.log(migratoryBirds([1, 1, 2, 2, 3])); // 1
// console.log(migratoryBirds([1, 4, 4, 4, 5, 3])); // 4

function migratoryBirds(arr) {
  // Sorting the array of birds allows us to always pick the birds w/ the lowest number ID ;)
  let tempBirds = [...arr].sort((a, b) => a - b);
  let mostFrequent = { num: 0, type: 0 };
  let currentNum = 0;

  for (let i = 0; i < tempBirds.length - 1; i++) {
    let currentType = tempBirds[i];
    currentNum = currentType === tempBirds[i + 1] ? ++currentNum : 0;

    if (currentNum > mostFrequent.num) {
      mostFrequent.num = currentNum;
      mostFrequent.type = currentType;
    }
  }

  return mostFrequent.type;
}
