/* LEXICAL SCOPE
Lexical scope means the children scope have the access to the variables 
defined in the parent scope. 
The children functions are lexically bound to the execution context of their parents.
*/

function checkName (){ //2
	let username = "Sara"; //2.1 declare & define local variable
	if (1>0){ //2.2
		let age = 23; //2.3 declare & define a local variable
		console.log("In the IF username is :", username) //Sara
		console.log("In the IF, age : ", age);//23
	}
	console.log("In the function, age : ",age);//undefined
}

checkName(); //1

console.log("age : ", age) //undefined
console.log("username : ", username)//undefined

// YOU CAN DECLARE VARIABLES WITH THE SAME SAME IN DIFFERENT SCOPE
// ITS OK

let username = "Tom";

function checkName (){
	let username = "Sara"; 
	console.log("In the function, username : ",username); //Sara
}

checkName(); //1
console.log("In the global scope, username : ",username); //Tom