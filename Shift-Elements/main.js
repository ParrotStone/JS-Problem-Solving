'use strict';

// Problem Description
// the function below takes three inputs, the array, the index from which it will move the element, the offset to move the element in

function move(array, from, offset) {
    const position = offset + from;
    if (position >= array.length || position < 0) {
        console.error('invalid position');
        return;
    }

    const output = [...array];
    const deleted = output.splice(from, 1)[0];
    output.splice(position, 0, deleted);

    return output;
}

const numbers = [1, 2, 3, 4, 5, 6];

console.log(numbers);
console.log(move(numbers, 5, 0));
console.log(move(numbers, 5, -5));
