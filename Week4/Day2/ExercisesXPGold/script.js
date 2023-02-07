// Exercise 1 : Nested Functions
// Using the code below, and before executing it, predict the outcome and explain how you came to this conclusion.

// Change the code below to nested arrow functions.
let landscape = function() {

    let result = "";
   
    let flat = function(x) {
      for(let count = 0; count<x; count++){
        result = result + "_";
      }
    }
   
    let mountain = function(x) {
      result = result + "/"
      for(let counter = 0; counter<x; counter++){
        result = result + "'"
      }
      result = result + "\\"
    }
   
    flat(4);
    mountain(4);
    flat(4)
   
    return result;
   }
   
   console.log(landscape())
//    The result will be: ____/''''\____
let mountain = a => (b => (c => (d=>a+a+a+a+b+c+c+c+c+d+a+a+a+a))) 
console.log(mountain("_")("/")("'")("\\"))
// Exercise 2 : Closure
// Analyse the code below, and before executing it, predict the outcome of the last line.
const addTo = x => y => x + y;
const addToTen = addTo(10);
// 10+y
addToTen(3);
// 10+3
// 13


// Exercise 3 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum1 = (a) => (b) => a + b
curriedSum1(30)(1)
// 30+b
// 30+1=31

// Exercise 4 : Currying
// Analyse the code below, and before executing it, predict the outcome of the last line.
const curriedSum2 = (a) => (b) => a + b
const aadd5 = curriedSum2(5)
aadd5(12)
// 5+b
// 5+12=17


// Exercise 5 : Composing
// Analyse the code below, and before executing it, predict the outcome of the last line.
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5 = (num) => num + 5;
compose(add1, add5)(10)
// compose(num+1, num+5)(10)
// (num+1)(num+5)(10)
// (num+1)(10+5)=(num+1)(15)
// (15+1)=16