/*
	Description:
	Given a string, count the number of occurrences of all of its letters.
	Some cases:
	'aabbcc' => { a: 2, b: 2, c: 2 }
	'abcccd' => { a: 1, b: 1, c: 3, d: 1 }
*/

// First way

const exampleOne = 'aabbcc';  // a2b2c2
const exampleTwo = 'abcccd';  // a1b1c3d1
const exampleThree = 'aabaaccbdd'  // a2b1a2c2b1d2


function countStr(someStr) {
	let count = 1;
	let strResult = '';
	let lastEle = someStr[someStr.length - 1];

	for (let i = 0; i < someStr.length - 1; i++) {
		if (someStr[i] == someStr[i + 1]) {
			count++
		} else {
			strResult += `${someStr[i]}${count}`;
			count = 1;
		}
	}

	strResult += `${lastEle}${count}`;


	return strResult;
}


// console.log(`${exampleOne} => ${countStr(exampleOne)}`);
// console.log(`${exampleTwo} => ${countStr(exampleTwo)}`);
// console.log(`${exampleThree} => ${countStr(exampleThree)}`);

// Second way

function countStr(word) {
	let countObj = {};
	word.split('').forEach(letter => {
		countObj[letter] = countObj[letter] ? ++countObj[letter] : 1;
	});

	return countObj;
}


console.log(countStr(exampleOne));
console.log(countStr(exampleTwo));
console.log(countStr(exampleThree));
