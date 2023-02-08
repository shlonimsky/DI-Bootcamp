// Exercise 1 : Print Full Name
// Create a function called printFullName(studentObj) that accepts an object as a parameter.
// For example : printFullName({first: 'Elie', last:'Schoppik'}).
// The function should return a string like the example below
// printFullName({first: 'Elie', last:'Schoppik'}) 
// // 'Your full name is Elie Schoppik`
// Destructure this object DIRECTLY from the parameters (ie. Look at the Advanced Object lesson - Part II : Object destructuring used as an assignment to a function)

// The output of the printFullName() function should be the exact same as the displayStudentInfo function. (Exercise XP)
function printFullName({first,last}){
    return `Your full name is ${first} ${last}`
}
console.log(printFullName({first: 'Elie', last:'Schoppik'}))

// Exercise 2 : Keys And Values
// Create a function that takes an object and returns the keys and values as separate arrays.
// Return the keys sorted alphabetically, and their corresponding values in the same order.
function keysAndValues(obj){
   const onlyKeys = Object.keys(obj).sort()
   const onlyValues = Object.values(obj).sort()
   console.log(onlyKeys)
   console.log(onlyValues);
}
keysAndValues({ a: 1, b: 2, c: 3 })
keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
keysAndValues({ key1: true, key2: false, key3: undefined })

// Exercise 3 : Counter Class
// Analyze the code below, what will be the output?
class Counter {
    constructor() {
      this.count = 0;
    }
  
    increment() {
      this.count++;
    }
  }
  
  const counterOne = new Counter();
  counterOne.increment();
  counterOne.increment();
  
  const counterTwo = counterOne;
  counterTwo.increment();
  
  console.log(counterOne.count);//3