#!/usr/bin/env node

// Problem description -> https://www.hackerrank.com/challenges/cut-the-sticks/problem

const cutSticks = (sticks) => {
  // This is the proper way to create a copy of a array(or any reference type for that matter)
  let temp = [...sticks];
  let lengths = [];
  while (temp.length > 0) {
    lengths.push(temp.length);
    const shortestStick = Math.min(...temp);
    for (let j = 0; j < temp.length; j++) temp[j] -= shortestStick;

    temp = temp.filter((item) => item != 0);
  }

  return sticks;

  // const output = [];
  // while (sticks.length > 0) {
  //   output.push(sticks.length);
  //   const shortestStick = Math.min(...sticks);
  //   sticks = sticks.filter((stick) => stick != shortestStick);
  // }

  // return sticks;
};

// Test cases
console.log(cutSticks([1, 2, 3])); // [3, 2, 1]
console.log(cutSticks([5, 4, 4, 2, 2, 8])); // [6, 4, 2, 1]
console.log(cutSticks([1, 2, 3, 4, 3, 3, 2, 1])); // [8, 6, 4, 1]
