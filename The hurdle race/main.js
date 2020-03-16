#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/the-hurdle-race/problem

function hurdleRace(k, height) {
  return Math.max(Math.max(...height) - k, 0);
}

// console.log(hurdleRace(4, [1, 6, 3, 5, 2])); // 2
console.log(hurdleRace(7, [2, 5, 4, 5, 2])); // 0
