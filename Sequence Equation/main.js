#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/permutation-equation/problem

function permutationEquation(p) {
  const output = [];
  for (let i = 1; i <= p.length; i++) {
    const p_x = p.indexOf(i) + 1;
    output.push(p.indexOf(p_x) + 1);
  }

  return output;
}

console.log(permutationEquation([2, 3, 1])); // 2, 3, 1
// console.log(permutationEquation([4, 3, 5, 1, 2])); // 1, 3, 5, 4, 2
