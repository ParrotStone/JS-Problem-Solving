#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/encryption/problem

function encryption(s) {
  const trimmedStr = s.trim().split(' ').join('');
  const length = trimmedStr.length;
  let cols = Math.ceil(Math.sqrt(length));

  let output = '';
  for (let i = 0; i < cols; i++) {
    for (let j = i; j < length; j+=cols) output += `${trimmedStr[j]}`;
    output += ' ';
  }

  return output.trim();
}

// Test cases
console.log(encryption('if man was meant to stay on the ground god would have given us roots')); // imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
console.log(encryption('haveaniceday')); // hae and via ecy
console.log(encryption('feedthedog')); // fto ehg ee dd
console.log(encryption('chillout')); // clu hlt io
