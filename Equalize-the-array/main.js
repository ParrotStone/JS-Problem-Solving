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

  // // A more efficient solution, O(n) time complexity
  // // Array for counting the frequency, also called Hashmap
  // const frequency = [];

  // for (let i = 0; i <= 100; i++) frequency[i] = 0;
  // for (let i = 0; i < arr.length; i++) frequency[arr[i]]++;

  // return arr.length - Math.max(...frequency);
}

// Test cases
console.log(equalizeArray([1, 2, 2, 3])); // 2
console.log(equalizeArray([3, 3, 2, 1, 3])); // 2
console.log(equalizeArray([1, 2, 3, 1, 2, 3, 3, 3])); // 4
console.log(equalizeArray([-1, 2, -1, 1, 2, 3, 3, 3])); // 5
