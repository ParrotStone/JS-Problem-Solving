#!/usr/bin/env node

// Problem Description at -> https://www.codewars.com/kata/54c27a33fb7da0db0100040e/train/javascript

var isSquare = function(n){
  return Number.isInteger(Math.sqrt(n));
}

console.log(isSquare(3)); // false
console.log(isSquare(4)); // true
