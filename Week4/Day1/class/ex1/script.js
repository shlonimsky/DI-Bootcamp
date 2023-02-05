let text = "Hello";

function checkText (){
	console.log("In the function",text); 
	text += " World";
	console.log("Still in the function",text);
}

console.log("before the function", text);
// `Hello`

checkText()

console.log("after the function", text);
// `Hello Word`

// EXERCISE 2
let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); 
    // Alice
	friend += " Smith";
	console.log("Still in the function",friend);
    // Alice Smith
}

console.log("before the function", friend);
// Harry

checkfriend()

console.log("after the function", friend);
// Harry


// Exercise 1:
// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function
function helloUser (user){
    console.log(`HELLO, ${user}`);
}
helloUser('John')

const helloAnonum1 = function (user){
    console.log(`HELLO, ${user}`);
}
helloAnonum1('Alice')

const helloAnonum2 = user => console.log(`HELLO, ${user}`);
helloAnonum2('Tom')

// Exercise 1
const prices = [10, 23, 5];
// 1. Using a normal for loop, find the sum of the array
// 2. Using the for each method, find the sum of the array
let sum=0;
for (let num of prices){
    sum+=num
    console.log(sum);
}
const findSum = prices.forEach(elem=> sum+=elem)
console.log(sum)

// Exercise 2
const ageClient = [5, 8, 40, 18];
// Use the some method to check if there is at least one adult 
const adult = ageClient.some((elem, index) => {
elem>=18? console.log("you are in charge of the others"): console.log("There is no adults");

})
// in the array (ie. age bigger or equal to 18)
// If there is, alert him that he is in charge of the others
// Use the every method to check if all the users are adults (ie. age bigger or equal to 18)
// If there not, alert them that they have a price reduction
const everyAdult = ageClient.every(elem =>elem>=18)
console.log(everyAdult)