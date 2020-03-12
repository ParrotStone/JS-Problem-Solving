#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/day-of-the-programmer/problem

function dayOfProgrammer(year) {
  if (year == 1918) {
    // Corner case
    return `26.09.${year}`; 
  } else if (year > 1918) {
    // Calculating Leap year in Gregorian Calendar
    const isLeapYear = (year % 4 == 0) && (year % 100 != 0) || year % 400 == 0;
    return `${isLeapYear ? 12 : 13}.09.${year}`;
  } else {
    // Calculating Leap year in Julian Calendar
    return `${year % 4 == 0 ? 12 : 13}.09.${year}`;
  }
}

// dayOfProgrammer(2000) // leap year -> 12...
dayOfProgrammer(1700); // leap year > 13..
// dayOfProgrammer(1800) // NOT leap year -> 12-9-1800
// dayOfProgrammer(2016) // leap year -> 13-9-2016
// dayOfProgrammer(2017) // NOT leap year -> 12-9-2017
