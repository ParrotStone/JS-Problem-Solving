#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/beautiful-days-at-the-movies/problem

function beautifulDays(i, j, k) {
  let numOfBeautifulDays = 0;
  for (let start = i; start <= j; start++) {
    const reverse = Number(String(start).split('').reverse().join(''));
    if ((start - reverse) % k == 0) numOfBeautifulDays++;
  }

  return numOfBeautifulDays;
}

console.log(beautifulDays(20, 23, 6)); // 2
