#!/usr/bin/env node

'use strict';

// Problem description at ->> https://www.hackerrank.com/challenges/grading/problem

const studentGrades = [4, 73, 67, 38, 33];

function gradeStudents(grades) {
    const newGrades = [];
    for (const grade of grades) {
        let newGrade = Math.round(grade / 5) * 5;
        newGrade > grade && newGrade >= 37.5 ? newGrades.push(newGrade) : newGrades.push(grade);
    }

    return newGrades;
}


// Result ->> [4, 75, 67, 40, 33]
console.log('output', gradeStudents(studentGrades));