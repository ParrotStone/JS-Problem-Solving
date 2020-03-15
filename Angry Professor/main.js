#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/angry-professor/problem

function angryProfessor(k, a) {
  let attendeeNum = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) attendeeNum++;
  }

  return attendeeNum >= k ? 'NO' : 'YES';

//   // OR -- Idea credit goes to (https://www.hackerrank.com/profile/amonjerro)
//   a.sort((a, b) => a - b);
//   return a[k - 1] <= 0 ? 'NO' : 'YES';
}

// Test cases
console.log(angryProfessor(3, [-1, -3, 4, 2])); // YES -> The class is cancelled
console.log(angryProfessor(2, [0, -1, 2, 1])); // NO -> The class is NOT cancelled

