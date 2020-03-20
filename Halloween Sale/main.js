#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/halloween-sale/problem

function howManyGames(p, d, m, s) {
  let numOfGames = 0;
  while (s >= m && (s - p) >= 0) {
    s -= p;
    p = ((p - d) <= m) ? m : (p - d);
    // OR
    // p = Math.max(m, p - d);
    numOfGames++;
  }

  return numOfGames;
}

// test cases
// console.log(howManyGames(20, 3, 6, 80)); // 6
// console.log(howManyGames(20, 3, 6, 85)); // 7
// console.log(howManyGames(30, 4, 5, 120)); // 6
// console.log(howManyGames(30, 5, 3, 120)); // 11
console.log(howManyGames(50, 5, 3, 120)); // 2
