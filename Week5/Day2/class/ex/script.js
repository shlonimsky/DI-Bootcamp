// Exercise 1 Exception
// Create a function that checks if an email contain the '@', if it doesnt, throw an error and catch it
checkEmail("johnsmith.com") // throw an exception that is caught
checkEmail("john@smith.com")  // will still run because the exception was caught

function checkEmail(email){
    try{
        if (email.includes("@")){
            console.log(email)
        } else {
            throw new Error("You forgot the @")
        }
    } catch (err){
        console.log(`There is an Error: ${err.message} in ${email}`)
       
    }
}

// Exercise 2
// Using the code below:
const someVar = 'Cannot be reassigned';
try {
  someVar = 'Still going to try';
} catch(e) {
  console.log(e);
}
console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google 
// Type Error
// Is the console.log("after") will be shown on the console ? 
// Yes