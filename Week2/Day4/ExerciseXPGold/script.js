// Exercise 1 : Is_Blank
// Write a program to check whether a string is blank or not.
// console.log(isBlank('')); --> true
// console.log(isBlank('abc')); --> false

function check (){
    let sentence = prompt(`Please, enter something`);
    if (sentence === "") {
        return true
    } else {
        return false
    }
}
// console.log(check());

// Exercise 2 : Abbrev_name
// Write a JavaScript function to convert a string into an abbreviated form.
// console.log(abbrevName("Robin Singh")); --> "Robin S."

function abbrevName() {
    let ask = askName;
    ask = ask.split(" ");
    console.log(ask)
    let abbrev = ask[0] + " " + ask[1][0];
    console.log(abbrev);
}
// let askName = prompt(`Please, enter your First Name and Second Name:`)
// abbrevName ()

// Exercise 3 : SwapCase
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example : if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
function swapCase (input="The Quick Brown Fox") {
    console.log(input);
let newSent = "";
for (let i = 0;  i <= input.length-1; i++) {
    // Checkin if rhis letter is in UPPER CASE
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        newSent += String.fromCharCode(input.charCodeAt(i)+32)  ;      
    // Checkin if rhis letter is in UPPER CASE
    } else if (input.charCodeAt(i) >= 97 && input.charCodeAt(i) <= 122){
        newSent += String.fromCharCode(input.charCodeAt(i)-32);
    } else {
        newSent += input[i];
    }
}
console.log(newSent);
}
// Calling the function
let sentence = prompt(`Enter a sentence:`);
swapCase(sentence);

// Exercise 4 : Omnipresent Value
// Create a function that determines whether an argument is omnipresent for a given array.
// A value is omnipresent if it exists in every subarray inside the main array.
// To illustrate:

function isOmnipresent(array,number){
    let omnipresent =0;
    for (element of array){
        if (number in element){
            omnipresent++;
        } 
    }
    if (omnipresent === array.length){
        return true
    }
    return false;
}
console.log(isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 2))