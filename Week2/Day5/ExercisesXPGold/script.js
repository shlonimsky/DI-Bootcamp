// 1. Create a HTML file for your calculator and a JS file for the calculator’s functionality.
// 2. You must create 3 functions in the js file:
//  - number(num)
//  - operator(operator)
//  - equal()
// Hint : you can use the eval() method to help with your calculations.
// 3. Before coding, take your time to understand all the parts to the exercise and their process. You can write it down somewhere if it helps (recommended).
// 4. Bonus : create the RESET and CLEAR buttons.
let expression = "";
let numberString ="";
let numb = 0;
let expCalc = [];

function number(num){
numberString += num;
expression += num;
// console.log(typeof expression)
console.log(expression)
}

function operator(operator){
    numb=+numberString;
    expCalc.push(numb)
    expCalc.push(operator)
    expression += operator
    console.log(expression)
    numberString = "";
}


function equal(){
    let result;
    numb=+numberString;
    expCalc.push(numb)
    switch (expCalc[1]){
        case '+' : result = expCalc[0]+expCalc[2]
        break
        case "-" : result = expCalc[0]-expCalc[2]
        break
        case "/" : result = expCalc[0]/expCalc[2]
        break
        case "*" : result = expCalc[0]*expCalc[2]
        break
        default : console.log(`error`)
    }
    expression += "="+result;
console.log(expression)
}
// reset()
// function clear(){
//     console.log(`Clear`)
//      expression = "";
//      numberString ="";
//      numb = 0;
//  expCalc = [];
// }