// Exercise 1 : Divisible By Three
let numbers = [123, 8409, 100053, 333333333, 7]
// Loop through the array above and determine whether or not each number is divisible by three.
// Each time you loop console.log true or false.
for (let i of numbers) {
    if (i % 3 === 0){
        console.log(i)
        console.log(true)
    } else {
        console.log(i)
        console.log(false)
    }
}

// Exercise 2 : Attendance
let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
// Prompt the student for their name.
let namePrompt = prompt(`Please, enter name:`).toLowerCase()
// If the name is in the object, console.log the name of the student and the country they come from.
// For example: "Hi! I'm [name], and I'm from [country]."
// Hint: You don’t need to use a for loop, just look up the statement if ... in
// If the name is not in the object, console.log: "Hi! I'm a guest."
if (namePrompt in guestList) {
    console.log(`Hi! I'm ${namePrompt}, and I'm from ${guestList[namePrompt]}.`)
} else console.log(`Hi! I'm a guest.`) 

// Exercise 3 : Playing With Numbers
let age = [20,5,12,43,98,55];
// Requirements : Don’t use built-in Javascript methods to answer the following questions. 
// You have to create the logic by yourself. Use simple for loops.
// 1. Console.log the sum of all the numbers in the age array.
// 2. Console.log the highest age in the array.
let sum = 0;
for (let i of age) {
sum+=i
}
console.log(sum)
let max = age[0];
for (let i of age) {
    if (i >= max){
        max = i
    }continue
}
console.log(max)