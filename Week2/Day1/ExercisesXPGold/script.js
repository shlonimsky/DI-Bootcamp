// Exercise 1 : Favorite Color
// Write some simple Javascript code that will join all the items in the array above, and console.log the result.
let sentence = ["my","favorite","color","is","blue"];
let result = sentence.toString();
console.log(result)

// Exercise 2 : Mixup
// 1. Create 2 variables. The values should be strings.
let pet = "horse";
let meal = "carbonara";

let petFirst = pet.substring(0,2);
let petMidle = pet.slice(2, pet.length-2);
let petLast = pet.substring(pet.length-2,undefined);
let petResult = petLast+petMidle+petFirst;
console.log(petResult)

let mealFirst = meal.substring(0, 2);
let mealMidle = meal.slice(2, meal.length-2);
let mealLast = meal.substring(meal.length-2, undefined);
let mealResult = mealLast+mealMidle+mealFirst;
console.log(mealResult);

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let petMeal = `${petResult} ${mealResult}`

// 4. Finally console.log the new concatenated string.
console.log(petMeal);

// Exercise 3 : Calculator
// Make a Calculator.
// Prompt the user for the first number.
// Store the first number in a variable called num1.
let num1 = prompt('Please, enter the first number:');
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
let num2 = prompt('Please, enter the second number:');
// Create an Alert where the value is the SUM of num1 and num2.
let sum =Number(num1)+Number(num2);
// alert(`The sum is equals to ${sum}`)
// BONUS: Make a program that can subtract, multiply, and also divide!
let substract =Number(num1)-Number(num2);
let multiply =Number(num1)*Number(num2);
let divide =Number(num1)/Number(num2);
alert(`The results of counting:
${num1}+${num2}=${sum};
${num1}-${num2}=${substract};
${num1}*${num2}=${multiply};
${num1}/${num2}=${divide}`)

