// Exercise 1: Sum Elements
// Instructions
// Write a JavaScript program to find the sum of all elements in an array.
let sum = 0;
const arr = [1,2,4,56,3,44,56,78,98,]
arr.forEach( el => sum+= el);
console.log(sum);

// Exercise 2 : Remove Duplicates
// Instructions
// Write a JavaScript program to remove duplicate items in an array.
let arr1 = [1,2,3,1,"a","b","a"]

// let chars = ['A', 'B', 'A', 'C', 'B'];
let arr2=[];
arr1.forEach((char, index) => {
    if (index == arr1.indexOf(char)){
        arr2.push(char)
    }
});
console.log(arr2);


// Exercise 3 : Remove Certain Values
// Instructions
// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array.
const arr3 = [NaN, 0, 15, false, -22, '',undefined, 47, null];
let res =[];
arr3.forEach( el => el? res.push(el):"")
console.log(res)

// Exercise 4 : Repeat Please !
// Write a JavaScript function to concatenate a given string n times (default is 1).
// Create the repeat function yourself:
function repeat(word,n){
    let newStr ="";
    for(let i=1; i<=n;i++){
        newStr += word;
    }
    return newStr
}
console.log(repeat('Ha!',3));
// "Ha!Ha!Ha!"

// Exercise 5 : Turtle & Rabbit
// For this exercise, look at the lesson More JS methods.

// Using this code :
const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';
turtle = turtle.trim().padStart(9, ' '); 
rabbit = rabbit.trim().padStart(9, ' '); 
// Line up the Turtle and the Rabbit at the start line.
// Expected Output:   When you write:
console.log(startLine);
console.log(turtle);
console.log(rabbit);

// It should look like this:

// '     ||<- Start line'
// '       🐢'
// '       🐇'
// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?