// 🌟 Exercise 1 : Comparison
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.
// Test: //In the example, the promise should reject
// compareToTen(15)
// .then(result => console.log(result))
// .catch(error => console.log(error))

// //In the example, the promise should resolve
// compareToTen(8)
// .then(result => console.log(result))
// .catch(error => console.log(error))

function  compareToTen(num=3){
    return new Promise(function(res,rej){
        if (num<10){
            res(`Great, it is less then 10`)
        } else{
            rej(`Sorry, it is greater then 10`)
        }
    })
}
compareToTen(10)
.then(result => console.log(result))
.catch(err => console.log(err))

// 🌟 Exercise 2 : Promises
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.
function resolveItself(var1){

    return new Promise(function(res,rej){
        setTimeout(() => {
        if (var1){
            res(`success`)
        } else {
            rej(`Ooops something went wrong`)
        }
        },1000)
    })
}
resolveItself(true)
.then(res => console.log(res))
.catch(err => console.log(err))

const promise1 = Promise.resolve(`success`)
promise1.then(prom => console.log(prom))
const promise2 = Promise.reject(`Ooops something went wrong`);
promise2.catch(err => console.log(err))


// 🌟 Exercise 3 : Resolve & Reject
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”
const promise3 = Promise.resolve(3)
promise3.then(par => console.log("resolve:",par));
const promise4 = Promise.reject(`Boo!`)
promise4.catch(err => console.log("reject:",err))