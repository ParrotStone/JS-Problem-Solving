#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/electronics-shop/problem

function getMoneySpent(keyboards, drives, b) {
  // let maxPrice = -1;

  // for (let i = 0; i < keyboards.length; i++) {
  //   let sum = keyboards[i];
  //   for (let j = 0; j < drives.length; j++) {
  //     sum += drives[j];
  //     if (sum > maxPrice && sum <= b) {
  //       maxPrice = sum;
  //     }

  //     sum -= drives[j];
  //   }
  // }

  // OR (More performant algorithm) - Idea credit goes to (https://www.hackerrank.com/ryanfehr18)
  let maxPrice = -1;
  keyboards.sort((a, b) => a -b).reverse();
  drives.sort((a, b) => a - b);

  for (let i = 0, j = 0; i < keyboards.length; i++) {
    let sum = keyboards[i];
    for ( ; j < drives.length; j++) {
      sum += drives[j];
      if (sum > b) break;
      if (sum <= b && sum > maxPrice) maxPrice = sum;
      sum -= drives[j];
    }
  }

  return maxPrice;
}

// Test cases
console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58
// console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
// console.log(getMoneySpent([4], [5], 5)); // -1
