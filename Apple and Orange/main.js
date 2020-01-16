#!/usr/bin/env node

'use strict';

// Problem description at ->> https://www.hackerrank.com/challenges/apple-and-orange/problem

function countApplesAndOranges(s, t, a, b, apples, oranges) {
    apples = apples.map(apple => apple + a);
    oranges = oranges.map(orange => orange + b);

    const numOfApples = apples.reduce((a, c) => c >= s && c <= t ? a + 1 : a, 0);
    const numOfOranges = oranges.reduce((a, c) => c >= s && c <= t ? a + 1 : a, 0);

    console.log(numOfApples);
    console.log(numOfOranges);
}


// countApplesAndOranges(7, 10, 4, 12, [2, 3, -4], [3, -2, -4]);  // 1(apples), 2(oranges)
countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6]);  // 1(apples), 1(oranges)
