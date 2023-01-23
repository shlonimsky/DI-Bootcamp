// 5 >= 1
// // true
// 0 === 1
// // false
// 4 <= 1
// // false
// 1 != 1
// // false
// "A" > "B"
// // false
// "B" < "C"
// // true
// "a" > "A"
// // NaN. The correct answer is true, because of ASCII Code. 
// // First goes A,B,C... then a,b,c. so, 0097>0065
// "b" < "A"
// // false because 0098>0065
// true === false
// // false
// true != true
// // false

// // Exercise 2 : Ask For Numbers
// // Ask the user for a string of numbers separated by commas
// // Console.log the sum of the numbers.
// // Hint: use some string methods
// let inputData = prompt('please,enter a string of 3 numbers separated by commas');
// let numbers = inputData.split(',');
// let sum = (+numbers[0])+(+numbers[1])+(+numbers[2]);
// alert(`The summ of the numbers ${numbers} is ${sum}`);


// Exercise 3 : Find Nemo
// Find the word “Nemo”
// Console.log a string as follows: "I found Nemo at [the position of the word Nemo]".
// If you can’t find Nemo, console.log “I can’t find Nemo”.
let sentence = prompt(`Please, write a sentence containing the word “Nemo”. For example "I love the movie named Nemo"`).toLowerCase();
let sentenceArray = sentence.split(" ");
let nemoPosition = sentenceArray.indexOf('nemo');
if (nemoPosition >= 0) {
    alert(`I found Nemo at ${nemoPosition+1} word`)
} else {
    alert(`I can’t find Nemo`)
}

// Exercise 4 : Boom
// Prompt the user for a number. Depending on the users number you will return a string of the word “Boom”. Follow the rules below:

// If the number given is less than 2 : return “boom”
// If the number given is bigger than 2 : the string should include n number of “o”s (n being the number given)
// If the number given is evenly divisible by 2, add a exclamation mark to the end.
// If the number given is evenly divisible by 5, return the string in ALL CAPS.
// If the number given is evenly divisible by both 2 and 5, return the string in ALL CAPS and add an exclamation mark to the end.

const num = prompt(`Please, enter a number:`);
let boom;
if (num <= 2) {
 boom = 'Boom';
} else {
    let num1 = 'o';
     boom = `B${num1.padStart(num,'o')}m`;
} 


if ((num % 2 == 0) && (num % 5 == 0)) {
    boom += '!';
    boom = boom.toUpperCase();
} else if (num % 2 == 0) {
    boom += '!'
} else if (num % 5 == 0) {
 boom = boom.toUpperCase();
} 
alert(boom);
