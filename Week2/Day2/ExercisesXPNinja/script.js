// Exercise 1 : Age Difference
// Given the years two people were born, find the date when the younger 
// one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY


const age1 = prompt(`Enter the first date of birth in format YYYY:`);
const age2 = prompt(`Enter the first date of birth in format YYYY:`);
let dif = Math.abs((+age1)-(+age2));
console.log(`When the younger will be ${dif}, he will be half age ot the older one`)


// Exercise 2 : Zip Codes
// Hint : This exercise has 2 parts. First, do this exercise without 
// Regular Expressions, then do it using Regular Expressions

// While working in a Post Office you must have the clients’ zip code in order to send them their letters.
// Ask the client for their zip code and console.log “success” or “error” based on the following rules.
// Zip codes consists of 5 numbers
// Must only contain numbers
// Must not contain any whitespace (spaces)
// Must not be greater than 5 digits in length
// Without RegExp
let zip = prompt(`Enter zip-code of 5 numbers`);
let zipLength = zip.length;
zip = +zip;
 if (zipLength === 5 && !isNaN(zip) && zip) {
    alert(`Your zip-code was successfully received`)
} else {
    alert(`oopsss... Error`)
}
// With RegExp
zip = prompt(`Enter zip-code of 5 numbers`);
zipLength = zip.length;
var regex = /^\d{5}$/;
if (zip.match(regex)) {
    alert(`Your zip-code was successfully received`)
} else {
    alert(`oopsss... Error`)
}

// Exercise 3 : Secret Word

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.
// Bonus: Replace the vowels with another character and console.log the result
let word = prompt(`Enter a word`);
let regex2 = /[bcdfghjklmnpqrstvwxys]/gi;
let newWord = word.match(regex2)
console.log(newWord)