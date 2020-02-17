#!/usr/bin/env node

// Problem Description at ->> https://www.hackerrank.com/challenges/the-birthday-bar/problem

// Test cases
console.log(birthday([2, 2, 1, 3, 2], 4, 2)); // 2
// console.log(birthday([1, 2, 1, 3, 2], 3, 2)); // 2

function birthday(s, d, m) {
  // Corner case
  if (s.length === m && s[0] === d) return 1;

  let numOfWays = 0;

  for (let i = 0; i < s.length; i++) {
    let monthLength = 1;
    let sum = s[i];
    for (let j = i + 1; j < s.length; j++) {
      monthLength++;
      sum += s[j];
      if (sum === d && monthLength === m) {
        numOfWays++;
      }
      
      // To ignore irrelevant cases
      if (sum > d || monthLength > m) break;
    }
  }

  return numOfWays;
}
