#!/usr/bin/env node

// Problem Description ->> https://www.hackerrank.com/challenges/save-the-prisoner/problem

/*
  n ->> number of prisoners
  m ->> number of sweets
  s ->> number of chair to start w/
*/

// Test cases
console.log(saveThePrisoner(5, 2, 1)); // 2
console.log(saveThePrisoner(5, 2, 2)); // 3
// console.log(saveThePrisoner(7, 19, 2)); // 6
// console.log(saveThePrisoner(3, 7, 3)); // 3
// console.log(saveThePrisoner(4, 6, 2)); // 3
// console.log(saveThePrisoner(4, 1, 1)); // 1
// console.log(saveThePrisoner(4, 0, 0)); // 0
// console.log(saveThePrisoner(4, 0, 4)); // 0
// console.log(saveThePrisoner(4, 3, 4)); // 2

function saveThePrisoner(n, m, s) {
  if (m === 0) return 0;

  // Gets the starting point exactly
  const seatDiff = s - 1;
  // Gets the number of remaining prisoners in case the candies have made their circle
  const remainingSweets = m % n;

  // Gets the exact last chair/prisoner to take the last candy
  const lastPrisoner = (seatDiff + remainingSweets) % n;

  return lastPrisoner === 0 ? n : lastPrisoner;

  // // Shorter form of the above solution
  // if (m === 0) return 0;
  // let totalNumOfSweets = m + s - 1;
  // return totalNumOfSweets % n == 0 ? n : totalNumOfSweets % n;
}
