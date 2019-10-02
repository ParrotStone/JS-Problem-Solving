'use strict';


// FizzBuzz
function fizzBuzz(input) {
    if (typeof input != 'number' || isNaN(input)) {
        return 'Not a number';
    }
    // OR
    // if (typeof input != 'number') { return NaN; }

    if (input % 3 == 0 && input % 5 == 0) { return 'FizzBuzz'; } 
    else if (input % 3 == 0) { return 'Fizz'; } 
    else if (input % 5 == 0) { return 'Buzz'; }

    return input;
}

console.log(fizzBuzz(3)); // Fizz
console.log(fizzBuzz(5)); // Buzz
console.log(fizzBuzz(15)); // FizzBuzz
console.log(fizzBuzz(7)); // 7
console.log(fizzBuzz('234')); // Not a number
console.log(fizzBuzz(true)); // Not a number
console.log(fizzBuzz(NaN)); // Not a number
