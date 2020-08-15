#!/usr/bin/env node


// Problem Description at -> https://www.hackerrank.com/challenges/jumping-on-the-clouds/problem

function jumpingOnClouds(c) {
  let minPath = 0;

  let i = 0;
  while (i < c.length - 1) {
    if (c[i] == 1) continue;

    if (c[i + 2] == 0) {
      minPath++;
      i += 2;
      continue;
    }

    if (c[i + 1] == 0) {
      i += 1;
      minPath++;
    }
  }

  return minPath;
}

// Test cases
console.log(jumpingOnClouds([0, 0, 1, 0, 0, 1, 0])); // 4 jumps
console.log(jumpingOnClouds([0, 0, 0, 0, 1, 0])); // 3 jumps
console.log(jumpingOnClouds([0, 1, 0, 0, 1, 0])); // 3 jumps
