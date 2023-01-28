// Exercise 3
// You have to decide which type of variables you have to use


// Create a global variable that save the amount of money you have in your account
let amountOfMoney = 25000;
console.log(amountOfMoney)
// Create a variable that saves the amount of VAT
const vat = 1.7;
// Create a variable that saves the amout of all the expenses and revenu you did /received for the past last month
let expensesRevenu = [2000, -250, -700, 900, -300, -5000, 7000];
// Create a JS code that multiplies of the expenses by the VAT
expensesRevenu.forEach(multiplyExpencesToVat)

function multiplyExpencesToVat (item, index, arr) {
    item<0 ? arr[index] = item * vat : arr[index] = item  
}

console.log(expensesRevenu)
// Create a JS code that changes the amount of the money you have in your account depending on your expenses/revenu.
amountOfMoney = newAmountOfMoney(amountOfMoney, expensesRevenu)

function newAmountOfMoney (money, expensesRevenu){
    // let amount = money;
    for ( transaction of expensesRevenu){
        amountOfMoney += transaction;
    }
    return amountOfMoney;
}
// Display it
console.log(amountOfMoney)