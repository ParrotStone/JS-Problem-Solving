#!/usr/bin/env node

// Problem Description ->> https://www.hackerrank.com/challenges/between-two-sets/problem

// There is another solution that w/ LCD and GCD, but the use of it here is irrelevant because the problem description dictates that the length of the input arrays wouldn't go over 10 elements, meaning that more efficient algorithm here won't make a difference in the performance.

console.log(getTotalX([2, 6], [24, 36])); // 2
// console.log(getTotalX([3, 4], [24, 48])); // 2
// console.log(getTotalX([2, 4], [16, 32, 96])); // 3

function getTotalX(a, b) {
  const commonFactors = [];

  for (let i = Math.max(...a); i <= Math.min(...b); i++) {
    let isFactor = true;
    for (let j = 0; j < a.length; j++) {
      if (i % a[j] !== 0) {
        isFactor = false;
        break;
      }
    }

    for (let k = 0; k < b.length; k++) {
      if (b[k] % i !== 0) {
        isFactor = false;
        break;
      }
    }

    if (isFactor) commonFactors.push(i);
  }

  return commonFactors.length;
}
