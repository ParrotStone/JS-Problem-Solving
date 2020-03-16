#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/cats-and-a-mouse/problem

function catAndMouse(x, y, z) {
  if (Math.abs(z - x) == Math.abs(z - y)) return 'Mouse C';
  if (Math.abs(z - x) < Math.abs(z - y)) return 'Cat A';
  return 'Cat B';
}

// console.log(catAndMouse(1, 2, 3)); // Cat B
console.log(catAndMouse(1, 3, 2)); // Mouse C
