#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/camelcase/problem

function camelcase(s) {
   let numOfWords = 1;
   for (let i = 0; i < s.length; i++)
     if (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) numOfWords++;

   return numOfWords;

  // // One linear solution - credit goes to (https://www.hackerrank.com/sblashkov)
  // // Count the number of captial letters + 1 => number of words
  // return s.length - s.replace(/[A-Z]/g, '').length + 1;

  // // Another solution - credit goes to (https://www.hackerrank.com/AllisonP)
  // const words = s.split(/[A-Z]/);
  // return words.length;
}

console.log(camelcase('oneTwoThree')); // 3
console.log(camelcase('saveChangesInTheEditor')); // 5
