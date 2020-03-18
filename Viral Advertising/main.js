#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/strange-advertising/problem

function viralAdvertising(n) {
    let cumulative = 0;
    let shared = 5;

    for (let i = 1; i <= n; i++) {
      let liked = Math.floor(shared / 2);
      cumulative += liked;
      shared = liked * 3;
    }

    return cumulative;
}

// Test cases
// console.log(viralAdvertising(5)); // 24
// console.log(viralAdvertising(6)); // 37
console.log(viralAdvertising(3)); // 9


