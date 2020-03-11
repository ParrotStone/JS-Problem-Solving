#!/usr/bin/env node

// Problem Description at -> https://www.codewars.com/kata/56747fd5cb988479af000028/train/javascript

function getMiddle(s) {
  const middle = parseInt(s.length / 2);
  return s.length % 2 == 0 ? `${s[middle - 1]}${s[middle]}` : `${s[middle]}`;

  // OR
  // return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 == 0 ? 2 : 1);

}

// getMiddle("test"); // es
// getMiddle('testing'); // t
getMiddle('middle'); // dd
// getMiddle('A'); // A

