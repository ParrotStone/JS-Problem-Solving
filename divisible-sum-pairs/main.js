// Problem Description at ->> https://www.hackerrank.com/challenges/divisible-sum-pairs/problem

// Brute force solution, preferred over recursion!

console.log(divisibleSumPairs(6, 5, [1, 2, 3, 4, 5, 6])); // 3
console.log(divisibleSumPairs(6, 3, [1, 3, 2, 6, 1, 2])); // 5

function divisibleSumPairs(n, k, ar) {
  let arrOfPairs = [];
  for (let m = 0; m < n; m++)
    for (let o = m + 1; o < n; o++)
      if ((ar[m] + ar[o]) % k === 0) arrOfPairs.push({ i: m, j: m + 1 });

  return arrOfPairs.length;
}
