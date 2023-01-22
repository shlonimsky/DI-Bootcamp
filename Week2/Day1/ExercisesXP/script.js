// Exercise 1: Your Favorite Food
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>
let food = 'babies';
let favMeal = 12;
console.log(`I eat ${food} at every ${favMeal}pm`)

// Exercise 2 : Series
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.

const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
let myWatchedSeriesLength = myWatchedSeries.length;
let myWatchedSeriesSentence = `I'h already watched the next ${myWatchedSeriesLength} series: ${myWatchedSeries[0]}, ${myWatchedSeries[1]} and ${myWatchedSeries[2]}.`;
console.log(myWatchedSeriesSentence);
myWatchedSeries.splice(2,1,'friens');
console.log(myWatchedSeries)
myWatchedSeries.push('despirate housewifes')
console.log(myWatchedSeries)
myWatchedSeries.splice(0,0,'suit')
console.log(myWatchedSeries)
myWatchedSeries.splice(1,1)
console.log(myWatchedSeries)
// console.log(myWatchedSeries[1][2])
let thirdLetter =myWatchedSeries[1].substring(2,3);
console.log(thirdLetter)
console.log(myWatchedSeries)

// Exercise 3 : The Temperature Converter
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

let temperatureC = 15;
console.log(temperatureC/5*9+32)

// Exercise 4 : Guess The Answers #1
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: Output will bbe 55, because it's the summe of a and b;
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: output is 23 because we defined the variable a;
// Actual: 23

// console.log(typeof c) //third expression
// Prediction: undefined, becuase we didn't define it;
// Actual: undefined

// Exercise 5 : Guess The Answers #2
console.log(typeof(15));
// Prediction: number
// Actual:number

console.log(typeof(5.5))
// Prediction:number
// Actual:number

console.log(typeof(NaN))
// Prediction: undefined
// Actual:number

console.log(typeof("hello"))
// Prediction: string
// Actual:string

console.log(typeof(true))
// Prediction: boolean
// Actual: boolean

console.log(typeof(1 != 2))
// Prediction: boolean
// Actual:boolean

console.log("hamburger" + "s")
// Prediction: hamburgers
// Actual: hamburgers

console.log("hamburgers" - "s")
// Prediction: arror
// Actual: NaN

console.log("1" + "3")
// Prediction: 13
// Actual: 13

console.log("1" - "3")
// Prediction: -2
// Actual: -2

console.log("johnny" + 5)
// Prediction: johnny5
// Actual:johnny5

console.log("johnny" - 5)
// Prediction: j
// Actual:NaN

console.log(99 * "hello")
// Prediction: NaN
// Actual:NaN

console.log(1 != 1)
// Prediction: false
// Actual:false

console.log(1 == "1")
// Prediction: true
// Actual:true

console.log(1 === "1")
// Prediction: false
// Actual:false


// Exercise 6 : Guess The Answers #3
5 + "34"
// Prediction: 534
// Actual: 534

5 - "4"
// Prediction:1
// Actual: 1

10 % 5
// Prediction: 0
// Actual: 0

5 % 10
// Prediction: 5
// Actual: 5

"Java" + "Script"
// Prediction:JavaScript
// Actual: JavaScript

" " + " "
// Prediction: 
// Actual:  

" " + 0
// Prediction:  0
// Actual: 0

true + true
// Prediction: true
// Actual: 2

true + false
// Prediction: 1
// Actual:1

false + true
// Prediction:  1
// Actual:1

false - true
// Prediction: -1
// Actual:-1

!true
// Prediction: false
// Actual: false

3 - 4 
// Prediction: -1
// Actual:-1

"Bob" - "bill"
// Prediction: NaN
// Actual: NaN
