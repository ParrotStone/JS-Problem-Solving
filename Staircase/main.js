'use strict';


// Problem Description at -> https://www.hackerrank.com/challenges/staircase/problem

function staircase(n) {
    for (let i = 0; i < n; i++) {
        let hashes = '';
        let spaces = '';

        for (let j = 0; j <= i; j++) {
            hashes += '#';
        }

        for (let k = n - i - 1; k > 0; k--) {
            spaces += ' ';
        }

        console.log(`${spaces}${hashes}`);
    }
}

staircase(4);