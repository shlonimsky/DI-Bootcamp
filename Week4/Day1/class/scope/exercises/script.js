//Exercise 1

let text = "Hello"; //global variable

function checkText (){ //3
	console.log("In the function",text);  //"Hello"
	text += " World"; ////it modifies the global variable --> Hello World
    //it changes the variable globally
	console.log("Still in the function",text); //"Hello World"
}

console.log("before the function", text); //1. //"Hello"

checkText() //2. invoke the checkText function

console.log("after the function", text); //4. "Hello World"


// Exercise 2 : guess what will be console logged, and explain why

let friend ="Harry"; //global variable

function checkfriend (){ //3
	let friend = "Alice"; //declare a local variable that is named friend
	console.log("In the function",friend); //"Alice"
	friend += " Smith"; // redefind the variable declared in the local scope 
	console.log("Still in the function",friend); //"Alice Smith"
}

console.log("before the function", friend); //1. "Harry"

checkfriend() //2.

//this line comes from the global scope
//is there a variable friend in the global scope ?
// YES the value is "Harry"
console.log("after the function", friend); //4. "Harry"