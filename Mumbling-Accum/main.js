#!/usr/bin/env node

// Problem Description at -> https://www.codewars.com/kata/5667e8f4e3f572a8f2000039/train/javascript

function accum(s) {
  let output = s[0].toUpperCase() + '-';

  for (let i = 1; i < s.length; i++) {
    let currChar = s[i].toUpperCase();
    for (let j = 0; j < i; j++) {
      currChar += s[i].toLowerCase();
    }

    output += `${currChar}${i != s.length - 1 ? '-' : ''}`;
  }

  return output;

  // OR
  // let output = s.split('').map((letter, index) => letter.toUpperCase() + letter.toLowerCase().repeat(index));
  // return output.join('-');
}


// accum('abcd');
accum('RqaEzty');
// accum('cwAt');
