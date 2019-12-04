'use strict';

// Problem description at -> https://www.hackerrank.com/challenges/birthday-cake-candles/problem


const ar = [3, 2, 1, 3];  // -> 2


function birthdayCakeCandles(ar) {
    let numOfCandles = 0;
    let maxCandleHeight = Math.max(...ar);
    ar.forEach(candle => (maxCandleHeight == candle) ? numOfCandles++ : numOfCandles)

    return numOfCandles;
}

console.log(birthdayCakeCandles(ar));