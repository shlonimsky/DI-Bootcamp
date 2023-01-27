// Exercise 1: Random Number
// Get a random number between 1 and 100.
// Console.log all even numbers from 0 to the random number.
function randomNumber (){
let rand = Math.floor(Math.random() * 100)+1;
let evenNumbers =[];
for (let i=1; i<= rand; i++) {
    if (i % 2 === 0){
        evenNumbers.push(i)
    }
}
return evenNumbers
}
console.log(randomNumber())

// Exercise 2: Capitalized Letters
// Create a function that takes a string as an argument.
// Have the function return:
// The string but all letters in even indexes should be capitalized.
// The string but all letters in odd indexes should be capitalized.
// Note:

// Index 0 will be considered even.
// The argument of the function should be a lowercase string with no spaces.
// For example, capitalize("abcdef") will return ['AbCdEf', 'aBcDeF']
function capitalizedLetters(string) {
    console.log(string)
    let even = "";
    let odd = "";
    let arrLetters =[];
    for (let i=0; i<=string.length-1; i++){
       if (i%2===0) {
        even += string[i].toUpperCase();
        odd += string[i];
        } else {
            even +=string[i];
            odd += string[i].toUpperCase();
        }
    }
   arrLetters[0] = even;
    arrLetters[1] = odd;
    return arrLetters;
}
console.log(capitalizedLetters("elephant"))

// Exercise 3 : Is Palindrome?
// Write a JavaScript function that checks whether a string is a palindrome or not.
// Note A palindrome is a word, phrase or sequence that is spelled the same both 
// backwards and forward, e.g., madam, bob or kayak.
function polindrom(string){
    let halfLength = Math.floor(string.length/2)
    console.log(halfLength)
    for (let i=0; i<=halfLength; i++){
        if (string[i] !== string[string.length-1-i]){
            return false
        }
    }
    return true
}
console.log(polindrom ("madam"))

// Exercise 4 : Biggest Number
// Create a function called biggestNumberInArray(arrayNumber) that 
// takes an array as a parameter and returns the biggest number.
// Note : This function should work with any array;
function biggestNumberInArray(arrayNumber){
    let bigest = 0;
    for (number of arrayNumber){
        if (number > bigest){
            bigest = number;
        }
    }
    return bigest;
}
console.log(biggestNumberInArray([-1,0,3,100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));

// Exercise 5: Unique Elements
// Write a JS function that takes an array and returns a new array with only unique elements.
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
// Example list=[1,2,3,3,3,3,4,5] newList = [1,2,3,4,5]
function uniqueElements(value, index, self) {
    return self.indexOf(value) === index;
  }

  let list = [1,2,3,3,3,4,4,5,6,6,6,7,8];
  let newList = list.filter(uniqueElements);
  
  console.log(unique); 