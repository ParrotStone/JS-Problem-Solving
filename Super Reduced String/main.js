#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/reduced-string/problem

function superReducedString(s) {
  // First way(Using substring string method)
  let output = s;
  for (let i = 1; i < output.length; i++) {
    if (output[i] == output[i - 1]) {
      output = output.substring(0, i - 1) + output.substring(i + 1);
      i = 0;
    }
  }

  return output ? output : 'Empty String';

  // Second way(Using Regex) -> Credit goes to Alison-P(Hackerrank)
  // let output = s;

  // while (true) {
    // const length = output.length;

    // output = output.replace(/(.)\1/g, '');

    // if (output.length == length) break;
  // }

  // return output ? output : 'Empty String';

  // Third way(Traditional approach to the problem)
  // let output = '';
  // let currStr = s;
  // let count = 1;

  //while (true) {
    //let isReduced = true;
    //output = '';
    //count = 1;
    //for (let i = 1; i < currStr.length; i++) {
      //const isEqual = currStr[i] == currStr[i - 1];

      //if (isEqual) count++;

      //if (!isEqual) {
        //if (count % 2 != 0) output += currStr[i - 1];
//        count = 1;
  //    }

    //  if (i == currStr.length - 1) {
      //  if (!isEqual || (isEqual && count % 2 != 0))
        //  output += currStr[i];
//      }
  //  }

    // // Check if the string has been reduced or not
//    for (let j = 1; j < output.length; j++) {
  //    const isEqual = output[j] == output[j - 1];
    //  if (isEqual) {
//        isReduced = false;
  //      currStr = output;
//        break;
  //    }
//    }

  //  if (isReduced) break;
//  }

//  if (output[0] == output[1]) output = '';

//  return output ? output : 'Empty String';

  // Fourth way(using stack) -> credit goes to the problem setter's solution(Hackerrank)
//   let stack = [];

//  for (let i = 0; i < s.length; i++) {
//    if (!stack.length || s[i] != stack[stack.length - 1]) stack.push(s[i]);
//    else stack.pop();
//  }

//  return stack.length ? stack.join('') : 'Empty String';
}

// Test cases
// console.log(superReducedString('ababab')); // ababab
// console.log(superReducedString('bb')); // Empty String
// console.log(superReducedString('aaaab')); // b

// console.log(superReducedString('aaabccddd')); // abd
// console.log(superReducedString('aa')); // Empty String
// console.log(superReducedString('baab')); // Empty String

// console.log(superReducedString('baaab')); // bab
// console.log(superReducedString('bbbaaaabbb')); // Empty string
// console.log(superReducedString('')); // Empty String
console.log(superReducedString('ababababaababaaa')); // abab

