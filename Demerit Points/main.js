'use strict';


/*
    [Problem Description]
    ---------------------
    If the speed is less than or equal to 70 miles, print 'okay'.
    if the speed id higher than 70, then for every 5 miles, increment/accumlate 1 point in a variable
    if the speed is not high enough to complete a (5 -> 1 point increment) like 74 value, also print 'okay'
    if the points exceeded the 12, print 'License Suspended'
*/

// // First solution
// function checkSpeed(speed) {
//     const limit = 70
//     let points = 0;
//     let diff = speed - limit;

//     while (diff >= 5) {
//         points++;
//         diff -= 5;
//     }

//     if (points >= 12) { return 'License Suspended!'; }
//     return (points == 0) || (speed <= limit) ? 'okay' : `Points: ${points}`;
// }

// Second solution
function checkSpeed(speed) {
    const limit = 70;
    const milePerPoint = 5;

    if (speed < limit + milePerPoint) {
        return 'okay';
    }

    const points = Math.floor((speed - limit) / milePerPoint);
    return points >= 12 ? 'License Suspended!' : `Points: ${points}`;

}

console.log(checkSpeed(50)); // okay
console.log(checkSpeed(70)); // okay
console.log(checkSpeed(74)); // okay
console.log(checkSpeed(80)); // Points: 2
console.log(checkSpeed(220)); // License Suspended!

