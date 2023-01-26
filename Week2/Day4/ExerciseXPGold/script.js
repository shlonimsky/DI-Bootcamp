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
console.log(check());

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
let askName = prompt(`Please, enter your First Name and Second Name:`)
abbrevName ()

// Exercise 3 : SwapCase
// Write a JavaScript function which takes a string as an argument and swaps the case of each character.
// For example : if you input 'The Quick Brown Fox' 
// the output should be 'tHE qUICK bROWN fOX'.
function swapCase (inputSent) {
let input = inputSent;
let newSent = "";
console.log(input)
for (let i = 0;  i <= input.length-1; i++) {
    if (input.charCodeAt(i) >= 65 && input.charCodeAt(i) <= 90) {
        newSent += input[i].toLowCase;
    } else if (input.charCodeAt(i) >= 32 && input.charCodeAt(i) <= 64){
        newSent += input[i];
    } else {
        newSent += input[i].toUpperCase();
    }
console.log(newSent)
return newSent;
}
}
swapCase(prompt(`Enter a sentence:`))