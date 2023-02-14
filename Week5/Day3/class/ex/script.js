// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the input is a string, the promise resolves with that same string uppercased.
// If the input is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")
function callAPromise (par1){
    // const prom = 
    return new Promise(function(resolve,reject){
        setTimeout(() => {
        if (typeof par1 === `string`){
            resolve(par1.toUpperCase())
        } else {
            reject(`${par1} is not string`)
        }
    }, 1000);
    })
//    return prom;
}
// consuming the promise
callAPromise("hello")
.then(str => console.log(str.repeat(2)))
.catch(err => console.log(err))
.finally(() => console.log(`congratulation`))

callAPromise(2)
.then((str) => {console.log(str); return str})
.then((str1) => console.log(str1))
.catch(err => console.log(err))
.finally(() => console.log(`congratulation`))