// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
//     // inside the funcOne function 3
// }

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ? Will receive Error, because we can't redefine contstants.

// //#2
// let a = 0;

// function funcTwo() {
//     a = 5;
// }

// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree()
// // inside the funcThree function 0
// funcTwo()
// // this function just defining the global variable a
// funcThree()
// // inside the funcThree function 5



// // #2.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Function funcTwo will not be executed because we can't redefine a global function


// //#3
// function funcFour() {
//     window.a = "hello";
// }


// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// }

// // #3.1 - run in the console:
// funcFour()
// funcFive()

// //#4
// // let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // #4.1 - run in the console:
// funcSix()


// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
// // Nothing because they are in the different scopes. The result will be "inside the funcSix 
// // function test". 

// //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
//     // in the if block 5
// }
// alert(`outside of the if block ${a}`);
// outside of the if block 2

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?
// Nothing, it will work okey, because they are in the different scopes.

// 🌟 Exercise 2 : Ternary Operator

function winBattle(){
    return true;
}
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, 
// the experiencePoints variable should be equal to 10, else the variable 
// should be equal to 1.
// Console.log the experiencePoints variable.
const experiencePoints = (win) => {
    // if (win===true){
    //     return 10
    // } else {return 1;}
   const result = win ? 10 : 1;
   return result;
};

console.log(experiencePoints(true))

// 🌟 Exercise 3 : Is It A String ?

// Write a JavaScript arrow function that checks whether the value of the 
// argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
const isString = elem => {
    if (typeof elem  == "string"){
return true
    } else {
        return false
    }
}
console.log(isString(12))

// 🌟 Exercise 4 : Colors

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

// Write a JavaScript program that displays the colors in the following order : 
// “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.
colors.forEach((color,i) => {
    console.log(`${i+1}# choice is ${color}`)
})

// 🌟 Exercise 5 : Colors #2
const colors1 = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : 
// “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.

    colors1.forEach((color,i) => {
        switch (i){
            case 0 : console.log(`${i+1}${ordinal[1]} choice is ${color}`);
            break
            case 1 : console.log(`${i+1}${ordinal[2]} choice is ${color}`);
            break;
            case 2 : console.log(`${i+1}${ordinal[3]} choice is ${color}`);
            break
            default: console.log(`${i+1}${ordinal[0]} choice is ${color}`);
        }
        })
    
// Exercise 6 : Bank Details
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):
// Create a global variable called bankAmount which value is the amount of money currently in your account.
let bankAmount = 50000;
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 1.17
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will 
// include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
details.forEach(value => {
    bankAmount += value*vat
})
console.log(bankAmount)