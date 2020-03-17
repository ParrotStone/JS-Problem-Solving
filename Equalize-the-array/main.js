#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/equality-in-a-array/problem

function equalizeArray(arr) {
  const tempSorted = [...new Set(arr)].sort((a, b) => a - b);
  let minLength = Number.POSITIVE_INFINITY;

  for (let i = 0; i < tempSorted.length; i++) {
    const length = arr.filter(num => num != tempSorted[i]).length;
    if (length < minLength) minLength = length;
  }

  return minLength;
}

// Test cases
console.log(equalizeArray([1, 2, 2, 3])); // 2
console.log(equalizeArray([3, 3, 2, 1, 3])); // 2
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])); // 4
console.log(equalizeArray([-1, 2, -1, 1, 2, 3, 3, 3])); // 5

