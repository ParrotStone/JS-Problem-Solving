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

  // // OR - Another simpler solution
  // // TotalPgCount, since every turn contains two pages - this way we get the total count
  // const totalPgCount = Math.floor(n / 2);
  // // The count starting from the left(1, ...etc)
  // const leftPgCount = Math.floor(p / 2);
  // // The count from the right/back side of the book
  // const rightPgCount = totalPgCount - leftPgCount;

  // return Math.min(leftPgCount, rightPgCount);
}


console.log(pageCount(7, 4)); // 1
// console.log(pageCount(5809, 2668)); // 1334 -> From the front of the book
// console.log(pageCount(1000, 3)); // 1 -> from the front of the book
// console.log(pageCount(6, 2)); // 1 -> from the front of the book
// console.log(pageCount(6, 4)); // 1 -> from the back of the book
// console.log(pageCount(5, 4)); // 0 -> from the back...
