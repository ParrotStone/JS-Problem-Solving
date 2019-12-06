'use strict';


// Problem description at -> https://www.hackerrank.com/challenges/time-conversion/problem


/**
 * @param {string} inputStr
 * @description String input representing the date in 12 hour(PM/AM) format
 */
function timeConverter(inputStr) {
    const parts = inputStr.split(':');
    let newFormat = '';
    let newHourFormat = parts[0];

    if (parts[2].includes('PM') && parts[0] != '12')
        newHourFormat = (Number(parts[0]) + 12).toString();

    if (parts[0] == '12')
        newHourFormat = parts[2].includes('AM') ? '00' : newHourFormat;

    newFormat += newHourFormat;
    parts[2] = parts[2].slice(0, parts[2].search(/[A-z][^0-9]*/ig));
    newFormat += `:${parts[1]}:${parts[2]}`;

    return newFormat;
}


// console.log(timeConverter('07:05:45PM'));  // 19:05:45
// console.log(timeConverter('11:27:45PM'));  // 23:27:45
// console.log(timeConverter('02:27:45AM'));  // 02:27:45
// console.log(timeConverter('1:27:45PM'));  // 13:27:45
// console.log(timeConverter('12:27:45AM'));  // 00:27:45
// console.log(timeConverter('12:27:45PM'));  // 12:27:45
console.log(timeConverter('11:00:45AM'));  // 11:00:45
