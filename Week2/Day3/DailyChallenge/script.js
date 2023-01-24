
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
// Bonus : To do this Bonus look up how to work with nested for loops
// Sort the numbers array in descending order, do so using for loops (Not using built-in sort methods).
// The output should be: [9,8,7,6,5,4,3,2,1,0]
// Hint: The algorithm is called “Bubble Sort”
// Use a temporary variable to swap values in the array.
// Use 2 “nested” for loops (Nested means one inside the other).
// Add comments and console.log the result for each step, this will help you understand.
let x;
let newNumbers = numbers;
console.log(newNumbers)
for (let i=0 ;i <= numbers.length-1; i++) {
    // x = numbers[i]
//    console.log(newNumbers[i]);
//    console.log(newNumbers);
   for (j = 1; j <=numbers.length-1; j++ ) {
    if (numbers[i]>numbers[j]) {
        continue}
        {
        x = numbers[j];
        console.log(x)
        continue
    }
  
   }
   newNumbers[i] = x
   console.log(newNumbers[i])
}
console.log(newNumbers)