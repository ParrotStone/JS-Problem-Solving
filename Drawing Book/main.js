#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/drawing-book/problem

function pageCount(n, p) {
  if (n == p || p == 1) return 0;

  const evenLastPg = (n - 1) % 2 == 0;
  let backPgCount = !evenLastPg ? 1 : 0;
  let frontPgCount = 1;

  let minFront = 0;
  let minBack = 0;
  for (let i = 2, j = !evenLastPg ? n - 1 : n; i < n; i+=2, j-=2) {
    if (i == p || i + 1 == p) minFront = frontPgCount;
    frontPgCount++;
    if(j == p || j - 1 == p) minBack = backPgCount;
    backPgCount++;

    if (minFront != 0 && minBack != 0) break;
  }

  return Math.min(minFront, minBack);
}

// 1 - 2, 3 - 4, 5 - 6, 7
console.log(pageCount(7, 4)); // 1
// console.log(pageCount(5809, 2668)); // 1334 -> From the front of the book
// console.log(pageCount(1000, 3)); // 1 -> from the front of the book
// console.log(pageCount(6, 2)); // 1 -> from the front of the book
// console.log(pageCount(6, 4)); // 1 -> from the back of the book
// console.log(pageCount(5, 4)); // 0 -> from the back...
