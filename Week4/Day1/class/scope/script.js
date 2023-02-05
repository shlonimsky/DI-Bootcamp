// ----------- Function

//function declaration
function sayHello () {
    //statement
    console.log("Hello user");
}

//execute the function // invoke or call the function
sayHello()
// sayHello //reference to the function

// ----------- parameter & arguments

// parameter are boxes that we create when we define the function
// boxes are waiting to the filled with the values of the arguments

function checkUsername (user) {
    if(user === "john") {
        console.log("Hello");
    }
}

// //makes the functions reusable
checkUsername("john");
checkUsername("lea");
checkUsername("david");

// -- the argument can be whatever data types
function infoAboutUser (user, hobbies) {
    const sentence = `hello ${user}, your hobbies are ${hobbies[0]} and ${hobbies[1]}`
    console.log(sentence);
}

infoAboutUser("John", ["tennis", "art"])

// ---- Scope

// GLOBAL -- outside
// LOCAL
    // FUNCTION SCOPE -- within a function
    // BLOCK SCOPE -- if, for, switch, while, do while


const pet = "cat"; // global scope
// declared in the global scope

let num = 1; //declared in the global scope

// //function scope
function checkNum () {
    num = 2; //redefined in the local scope
}

console.log("--1st", num);

checkNum() //function is called

console.log("--2nd--", num); //2


//  --- LET CONST VAR
let user = "John";
user = "Tom" //redefine the variable
// let user = "Lea" // error, I cannot declare another variable with the same name

const age = 23;
age = 32 //error cannot redefine constant variables
// const age = 45; // error, I cannot declare another variable with the same name

// const pet; //cannot declare and define separately
// pet="cat";

// don't use it
var computer = "Mac";
computer = "HP"; // redefine it
var computer = "Lenovo"; //this is possible

// --------- FUNCTION SCOPE

function checkUser (){ //2
    //2.1 we declare 3 local variables
	let age = 12;
	var ownerName = "Sara";
	const pet = "dog";
	console.log("In the function",ownerName, age, pet); //2.2
    // Sara 12 dog
}

checkUser(); //1.

console.log(" age : ", age); //3 //undefined cannot access it in the global
console.log(" pet : ", pet); //4 //undefined cannot access it in the global
console.log(" ownerName : ", ownerName); //5 //undefined cannot access it in the global


// LET CONST AND VAR ARE ALL function scope
// if you declared them in a function you cannot use them outside (in the global scope)

// ---- BLOCK SCOPE

const othernum = 2;

if (othernum === 2) {
    let user = "John"; //declared in the block scope
}

console.log(user); //undefined

// let and const
// if it was declared in the block scope its not accessed outside

for (let i = 0; i<3; i++){
    console.log(i);
}

console.log(i); //undefined

// ALWAYS DECLARE YOUR VARIABLES

for (counter = 0; counter<3; counter++){
    console.log(counter);
}

console.log(counter);
// counter becomes a global variable
// access it in the global scope //attached to the window
// window.conter is equal to 3
// ALWAYS DECLARE THE VARIABLES

function test () {
    favoriteColor = "blue";
}

test();

console.log(favoriteColor); //blue

