
// Daily Challenge: Stars
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested 
// for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
let star = "";
for (i=1; i <= 6; i++) {
    star += "*";
    console.log(star);
}
star ="";
for (let i = 1; i<=2; i++){
    star += "*";
    console.log(star);
    for (let j = 1; j<=2; j++) {
        star += "*";
        console.log(star);
    }
}


// Daily Challenge GOLD: Bubble Sort
const numbers = [5,0,6,1,7,4,2,9,3,8];
// Using the .toString() method convert the array to a string.
let numString = numbers.toString();
console.log(numString);
console.log(typeof numString);
// Using the .join()method convert the array to a string. Try passing different values into the join.
// Eg .join(“+”), .join(” “), .join(“”)
let numJoin = numbers.join("+")
console.log(numJoin);
console.log(typeof numJoin);

// “Bubble Sort”
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
let x;
const bubbleSort = [5,0,6,1,7,4,2,9,3,8];
console.log(bubbleSort)
// Calling the function to sort the array
for (let i=0 ;i <= bubbleSort.length-3; i++) {
    step(bubbleSort);
console.log(bubbleSort);
}
// Function that does one loop of sort by putting the smallest number to the end
function step(arr){
for ( let j = 0; j <=arr.length-2; j++ ) {
    if (arr[j]>arr[j+1]){
    } else {
        [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
   }
}
step(bubbleSort)