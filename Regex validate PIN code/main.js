#!/usr/bin/env node

// Problem Description at -> https://www.codewars.com/kata/55f8a9c06c018a0d6e000132/train/javascript
function validatePIN (pin) {
  return RegExp(/^\d{4}$|^\d{6}$/).test(pin);
  // OR
  // return /^(\d{4}|\d{6})$/gmi.test(pin);
}


console.log(validatePIN("1234")); // true
console.log(validatePIN("12345")); // false
console.log(validatePIN("a234")); // false
