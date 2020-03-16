#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/utopian-tree/problem

function utopianTree(n) {
//   if (n == 0) return 1;

//   // Recursive approach
//   // Rules: A closed-form equation
//   // Rules taken from => https://oeis.org/A075427
//   // a(0) = 1; base case
//   // a(n) = if n is even then a(n - 1) + 1 
//   // if n is odd then 2 * a(n - 1)

//   let finalHeight = 0;
//   if (n % 2 == 0) {
//     finalHeight += utopianTree(n - 1) + 1;
//   } else {
//     finalHeight += 2 * utopianTree(n - 1);
//   }
//   // Shorter form
//   // finalHeight += n % 2 == 0 ? utopianTree(n - 1) + 1 : 2 * utopianTree(n - 1);

//   return finalHeight;

  // Iterative Approach -> It follows the same rules as above in its core - closed-form equation thingie
  let finalHeight = 1;

  for (let i = 1; i <= n; i++) {
    finalHeight += i % 2 == 0 ? 1 : finalHeight;
  }

  return finalHeight;
}

// // Test cases
// console.log(utopianTree(0)); // 1
// console.log(utopianTree(1)); // 2
// console.log(utopianTree(4)); // 7
console.log(utopianTree(5)); // 14
console.log(utopianTree(9)); // 62
