#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/bon-appetit/problem

function bonAppetit(bill, k, b) {
  bill.splice(k, 1);
  const actualCharge = bill.reduce((a, c) => a + c) / 2;

  return actualCharge == b ? 'Bon Appetit' : Math.abs(actualCharge - b);
}

console.log(bonAppetit([3, 10, 2, 9], 1, 12)); // 5
console.log(bonAppetit([3, 10, 2, 9], 1, 7)); // Bon Appetit

