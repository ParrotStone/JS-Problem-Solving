#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/picking-numbers/problem

// O(n^2) time complexity
function pickingNumbers(a) {
  let maxLength = 0;
  a.sort((a, b) => a - b);

  for (let i = 0; i < a.length; i++) {
    const tempArr = [a[i]];
    for (let j = i + 1; j < a.length; j++) {
      const valid = Math.abs(a[j] - a[j - 1]) <= 1;
      const validInsertion = Math.abs(a[j] - Math.min(...tempArr)) <= 1;
      if (valid && validInsertion) tempArr.push(a[j]);
      if (!valid || !validInsertion) break;
    }

    maxLength = tempArr.length > maxLength ? tempArr.length : maxLength;
    tempArr.length = 0;
  }

  return maxLength;
}

// Test cases
console.log(pickingNumbers([1, 1, 2, 2, 3, 4, 4, 5, 5, 5])); // 5
// console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // 5
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
// console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
// console.log(pickingNumbers([1, 1, 5, 5, 5, 5, 4, 4, 1, 1, 2, 2])); // 6
// console.log(pickingNumbers([1, 1, 5, 5, 5, 5, 4, 4, 1, 1, 2, 2, 2])); // 7

// // Another solution(O(N) time complexity) that is insipred by the problem tester's solution - credit goes to (https://www.hackerrank.com/profile/AllisonP)
// function pickingNumbers(a) {
//   let maxLength = 0;
//   const frequency = [];

//   // Filling the array w/ Zeros
//   for (let i = 0; i < 100; i++) frequency[i] = 0;

//   // Counting the frequency of number in the input array
//   for (let i = 0; i < a.length; i++) frequency[a[i]]++;

//   // Getting the maximum length of the sub-array
//   for (let i = 1; i < a.length; i++) {
//     const count = frequency[i] + frequency[i - 1];
//     if (count > maxLength) maxLength = count;
//   }

//   return maxLength;
// }

// // Test cases
// console.log(pickingNumbers([1, 1, 2, 2, 3, 4, 4, 5, 5, 5])); // 5
// console.log(pickingNumbers([1, 1, 2, 2, 4, 4, 5, 5, 5])); // 5
// console.log(pickingNumbers([4, 6, 5, 3, 3, 1])); // 3
// console.log(pickingNumbers([1, 2, 2, 3, 1, 2])); // 5
// console.log(pickingNumbers([1, 1, 5, 5, 5, 5, 4, 4, 1, 1, 2, 2])); // 6
// console.log(pickingNumbers([1, 1, 5, 5, 5, 5, 4, 4, 1, 1, 2, 2, 2])); // 7
