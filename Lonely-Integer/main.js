'use strict';

// Problem Description at => https://www.hackerrank.com/challenges/lonely-integer/problem
// The code below is the setup for the NodeJS environment to take input

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the lonelyinteger function below.
function lonelyinteger(a) {
    // The algorithm
    const commonNumbers = [];
    for (let i = 0; i < a.length; i++) {
        if (a.indexOf(a[i], i + 1) == -1 && !commonNumbers.includes(a[i])) {
            return a[i];
        }

        commonNumbers.push(a[i]);
    }
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const a = readLine().split(' ').map(aTemp => parseInt(aTemp, 10));

    let result = lonelyinteger(a);

    ws.write(result + "\n");

    ws.end();
}

