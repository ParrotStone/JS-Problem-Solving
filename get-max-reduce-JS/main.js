'use strict';


function getMax(array) {
    return arr.reduce((max, current) => current >= max ? current : max);
}

const arr = [6547, 1, 2, 234, 4, 5];
console.log(getMax(arr));