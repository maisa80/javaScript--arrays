
/** ======================================================================
 * JS- arrays
 *
 * Practise arrays. You might find useful help here:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
 *
 */



/** ----------------------------------------------------------------------
 * Section 1 . Arrays
 *
 * To copy an array use array.slice() to make a real copy, not a shallow one.
 *
 */



/**
 * Exercise 1.1 
 *
 * Create a variable `array2` holding an array with the words:
 * `[potato,carrot,onion,leek,cabbage]`. Return the element on position: `1`
 * in array2.
 *
 * Answer with the result.
 
 */
console.log('#####Exercise 1.1 #####');
let array2 = ['potato','carrot','onion','leek','cabbage'];


console.log(array2[1]);



/**
 * Exercise 1.2 
 *
 * Use the variable `array2`. Concatenate the first item and the last item as
 * a string. Separate the string with `-`.
 *
 * Answer with the result.

 */




 console.log('#####Exercise 1.2 #####');


console.log( array2[0] + "-" + array2[array2.length - 1]);



/**
 * Exercise 1.3 
 *
 * Create an array, `array1`, with the items `47,98,-13,0,-412,499,3,1200`.
 *
 * Merge the two arrays, `array1` and `array2`, into a third variable
 * `array3`.
 *
 * Answer with array3.

 */
 console.log('#####Exercise 1.3 #####');
let array1 = [47,98,-13,0,-412,499,3,1200];
let array3 = array1.concat(array2);

console.log(array3);



/**
 * Exercise 1.4 
 *
 * Create a variable `array21` as a clone of `array2`.
 * Sort `array21`.
 * (Hint:
 * http://stackoverflow.com/questions/3978492/javascript-fastest-way-to-duplicate-an-array-slice-vs-for-loop
 *
 * Answer with the resulting array.
 
 */
 console.log('#####Exercise 1.4 #####');
let array21 = array2.slice();

console.log(array21.sort());



/**
 * Exercise 1.5 
 *
 * Create a variable `array11` as a copy of `array1`.
 * Sort `array11` according to its values. The smallest value comes first and
 * the largest value comes last.
 *
 * Answer with the resulting array.
 *
 */
 console.log('#####Exercise 1.5 #####');
let array11 = array1.slice();


// [47,98,-13,0,-412,499,3,1200];
// ANSWER = array11.sort(function(a, b) {
//     return a - b;
// });
console.log(array11.sort((a, b) => a - b)); // Arrow function has a built-in return statement when removing the curly brackets {}



/**
 * Exercise 1.6
 *
 * Create a variable `array22` which holds the same content as `array2` - but
 * all strings are uppercase.
 * Use the built-in Array-function `map()` to solve it.
 *
 * Answer with the array.
 *
 
 */
 console.log('#####Exercise 1.6 #####');
// ['potato','carrot','onion','leek','cabbage']
let array22 = array2.map((string) => string.toUpperCase());
console.log(array22)



/**
 * Exercise 1.7 
 *
 * Create a new array, `array12`. It should contain all positive numbers from
 * the `array1`.
 * Use the built-in array-function `filter()` to solve it.
 *
 * Answer with the resulting array.

 */
 console.log('#####Exercise 1.7 #####');
const array12 = array1.filter((num) => num > 0);
console.log(array12);



/**
 * Exercise 1.8 
 *
 * Create a function `arrayAverage()` that takes one array as argument and
 * returns the average of all elements in that array.
 *
 * Try out the function using `array1` and answer with the rounded integer
 * result.

 */
 console.log('#####Exercise 1.8 #####');
// Solution 1
// function arrayAverage(theArray) {
//     let sum = 0;
//     for (let i = 0; i < theArray.length; i++) {
//         sum = sum + theArray[i] / theArray.length;
//     }
    
//     return sum;
// }
// const exercise18 = arrayAverage(array1);
// ANSWER = Number(exercise18.toFixed(0));

// ANSWER = arrayAverage(array1);


// Solution 2
function arrayAverage(inputArray) {
    let average = 0;
    for (let i = 0; i < inputArray.length; i++) {
        average += inputArray[i];
    }

    return Math.round(average / inputArray.length);
}

console.log(arrayAverage(array1));



/** ----------------------------------------------------------------------
 * Section 2 . Modify arrays
 *
 * Learn how to modify arrays.
 *
 */



/**
 * Exercise 2.1 
 *
 * Create a new array `myArray` and make it a copy of `array1`. Switch place
 * on the first and the last element, with the help of built-in
 * array-functions.
 * Use the array-functions `pop(), push(), shift() and unshift()`.
 *
 * Answer with `myArray`.
 
 */

 console.log('#####Exercise 2.1 #####');
// [47,98,-13,0,-412,499,3,1200, 1200];
let myArray = array1.slice();
let firstElement = myArray.shift(); // 47
let lastElement = myArray.pop(); // 1200
// [,98,-13,0,-412,499,3];
myArray.push(firstElement);
// [,98,-13,0,-412,499,3,47];
myArray.unshift(lastElement);
// [1200,98,-13,0,-412,499,3,47];




console.log(myArray);


/**
 * Exercise 2.2
 *
 * In `myArray` change the `3rd and 4th` value to the boolean value `false`
 * using built-in array-function `splice()`.
 *
 * Answer with the resulting array.

 */
 console.log('#####Exercise 2.2 #####');
myArray.splice(2, 2, false, false); // This changes the exisiting array
console.log(myArray);


/**
 * Exercise 2.3 
 *
 * Remove the `4th and 5th` item in 'myArray'. Then insert the string `MEGA`
 * after the item `3rd`. Answer with the resulting array.
 
 */


myArray.splice(3, 2, `MEGA`);

console.log(myArray);



/** ----------------------------------------------------------------------
 * Section 3 .  Arrays with loops
 *
 * Learn how to loop array elements
 *
 */


/**
 * Exercise 3.1 
 *
 * Create a variable "myString2" that holds an empty string.
 * Create an array "myArray2" that holds 5 values.
 * Manually fill each space in the array with the word "JavaScript".
 * Then concatinate the array elements into "myString2", using a loop.
 * Do not set a specific number to determine the number of loops. 
 * Use instead the array-function .length to determine how many times you want to loop.
 * 
 * Answer with the resulting "myString2" variable

 */
 console.log('#####Exercise 3.1 #####');
// Solution 1
// let myString2 = '';
// let myArray2 = ["JavaScript", "JavaScript", "JavaScript", "JavaScript", "JavaScript"];
// for (let i = 0; i < myArray2.length; i++) {
//     myString2 = myString2 + myArray2[i];
// }



// Solution 2
let myString2 = '';
let myArray2 = Array(5).fill("JavaScript");
for (let i = 0; i < myArray2.length; i++) {
    myString2 += myArray2[i];
}

console.log(myString2);




/**
 * Exercise 3.2 
 *
 * Create an array "myList" and assign it the following elements 1, 3, 5, 7, 9.
 * Create a variable "search" with the value 5
 * 
 * If the "search" number is in the array, answer "The number is in the array",
 * otherwise "The number is not in the array" 
 *
 * Make a loop that searches through the array. 
 * You must check each position in the array against the value. 
 
 */
 console.log('#####Exercise 3.2 #####');
// Solution 1 without loop
// let myList = [1, 3, 5, 7, 9];
// let search = 5;
// let checkArray = "";
// if (myList.includes(search)) {
//     checkArray = "The number is in the array";
// } else {
//     checkArray = "The number is not in the array";
// }

// console.log(checkArray); 

// Solution 2
let myList = [1, 3, 5, 7, 9];
let search = 9;
let answer = '';
for (let i = 0; i < myList.length; i++) {
    if (search == myList[i]) {
        answer = "The number is in the array";
        break;
    } else {
        answer = "The number is not in the array";
    }
}

console.log(answer);



// Solution 2
// let myList = [1, 3, 5, 7, 9];
// let search = 4;
// let answer = "The number is not in the array";
// for (let item of myList) {
//     if (search == item) {
//         answer = "The number is in the array";
//         break;
//     }
// }

// console.log(answer);


