#!/usr/bin/env node

// Problem Description at -> https://www.hackerrank.com/challenges/caesar-cipher-1/problem


// O(N) Solution
function caesarCipher(s, k) {
  let encryptedOutput = '';

  for (let i = 0; i < s.length; i++) {
    let encryptedCharCode = s[i].charCodeAt(0) + k;

    if (encryptedCharCode > 122)
      // Alternative traditional O(n^2) solution approach
//       while (encryptedCharCode > 122) encryptedCharCode -= 26;
      encryptedCharCode = ((encryptedCharCode - 97) % 26) + 97;

    if (encryptedCharCode > 90 && /[A-Z]/.test(s[i]))
//       while (encryptedCharCode > 90) encryptedCharCode -= 26;
      encryptedCharCode = ((encryptedCharCode - 65) % 26) + 65;

    const encryptedChar = String.fromCharCode(encryptedCharCode);
    // A regex to exclude the numbers and symbols from the output character set
    encryptedOutput += /[-!$%^&*()_+|~=`{}\[\]:";'<>?,\\.\/]|[0-9]/.test(s[i]) ? s[i] : encryptedChar;
  }

  return encryptedOutput;
}

// Test cases
// console.log(caesarCipher('middle-Outz', 2)); // okffng-Qwvb
// console.log(caesarCipher('There\'s-a-starman-waiting-in-the-sky', 3)); // Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb
// console.log(caesarCipher('This-is-a-string', 7)); // Aopz-pz-h-zaypun
// console.log(caesarCipher('This-is-a-string', 0)); // This-is-a-string
console.log(
caesarCipher(
'DNFjxo?b5h*5<LWbgs6?V5{3M].1hG)pv1VWq4(!][DZ3G)riSJ.CmUj9]7Gzl?VyeJ2dIPEW4GYW*scT8(vhu9wCr]q!7eyaoy.', 45));
// WGYcqh?u5a*5<EPuzl6?O5{3F].1aZ)io1OPj4(!][WS3Z)kbLC.VfNc9]7Zse?OrxC2wBIXP4ZRP*lvM8(oan9pVk]j!7xrthr.
// console.log(caesarCipher('w', 100)); // v
// console.log(caesarCipher('x', 55)); // a
// console.log(caesarCipher('a', 45)); // t
