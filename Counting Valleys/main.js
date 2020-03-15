#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/counting-valleys/problem

function countingValleys(n, s) {
  let valleysCount = 0;
  let seaLevel = 0;

  for (let i = 0; i < n; i++) {
    if (s[i] == 'D') seaLevel--;
    if (s[i] == 'U') seaLevel++;
    // Check if we just came from a valley up to sea level
    if (!seaLevel && s[i] == 'U') valleysCount++;
  }

  return valleysCount;
}

// // Test cases
// console.log(countingValleys(8, 'UDDDUDUU')); // 1
// console.log(countingValleys(8, 'UDUDUDUDU')); // 0, since there is no vallies crossed...
// console.log(countingValleys(8, 'DDDUUUDDU')); // 1
console.log(countingValleys(8, 'DDUUUUDD')); // 1

