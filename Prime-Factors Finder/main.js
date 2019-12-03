'use strict';

// You can find description of algorithm as well as the mathimatical problem at => https://www.mathsisfun.com/prime-factorization.html


console.log(getPrimeFactors(12));  // 2 x 2 x 3 => 12
console.log(getPrimeFactors(147));  // 3 × 7 × 7 => 147
console.log(getPrimeFactors(1000000000000));  // 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 2 × 5 × 5 × 5 × 5 × 5 × 5 × 5 × 5 × 5 × 5 × 5 × 5 => 1000000000000
console.log(getPrimeFactors(3));  // 3 is already a prime number(factor) => It doesn't has any prime factors

/**
 * @param {number} limit
 */
function getPrimeFactors(limit) {
    let tempNum = limit;
    const primeFactors = [];
    for (let i = 2; i <= tempNum; i++) {
        if (isPrime(i)) {
            const divisionResult = tempNum / i;
            if (divisionResult != Number(divisionResult.toFixed())) continue;
            primeFactors.push(i);
            tempNum /= i;
            i--;
        }
    }

    return primeFactors;
}

/**
 * @param {number} number
 */
function isPrime(number) {
    for (let j = 2; j < number; j++)
        if (number % j == 0) return false;

    return true;
}
