// 🌟 Exercise 1 : Information
// Part I : function with no parameters
// Create a function called infoAboutMe() that takes no parameter.
// The function should console.log a sentence about you (ie. your name, age, hobbies ect…).
// Call the function.
function infoAboutMe(){
    console.log(`I'm Nastya, I'm 28 eyars old and I like drawing`)
}
infoAboutMe()

// Part II : function with three parameters
// Create a function called infoAboutPerson(personName, personAge, personFavoriteColor) that takes 3 parameters.
// The function should console.log a sentence about the person (ie. “You name is …, you are .. years old, your favorite color is …”)
// Call the function twice with the following arguments:
// infoAboutPerson("David", 45, "blue")
// infoAboutPerson("Josh", 12, "yellow")
function infoAboutPerson (fname, age, color) {
    console.log(`Your name is ${fname}, you are ${age} years old, your favorite color is ${color}`)
}
infoAboutPerson("David", 45, "blue");
infoAboutPerson("Josh", 12, "yellow");

// 🌟 Exercise 2 : Tips
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.
// Create a function named calculateTip() that takes no parameter.
// Inside the function, use prompt to ask John for the amount of the bill.
// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.
// Console.log the tip amount and the final bill (bill + tip).
// Call the calculateTip() function.
function calculateTip() {
    let bill = +prompt(`Please, enter the amount of the bill in $`);
    let tip = 0;
    if (bill < 50 ){
        tip = bill * 0.2;
    } else if (50 <= bill <= 200) {
        tip = bill * 0.15
    } else {
        tip = bill * 0.1
    }
    console.log (`The tip you have to leave is ${tip}$`)
}
calculateTip();
calculateTip();
calculateTip();

// 🌟 Exercise 3 : Find The Numbers Divisible By 23
// Create a function call isDivisible() that takes no parameter.
// In the function, loop through numbers 0 to 500.
// Console.log all the numbers divisible by 23.
// At the end, console.log the sum of all numbers that are divisible by 23.
// Bonus: Add a parameter divisor to the function.

function isDivisible(divisor){
    let sum = 0;
    for (let i = 0; i<=500; i++){
    if (i % divisor === 0){
        console.log(i);
        sum += i;
    } continue
    }
    console.log(sum)
}
isDivisible(23)

// 🌟 Exercise 4 : Shopping List
const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 
// Create an array called shoppingList with the following items: “banana”, “orange”, and “apple”. 
// It means that you have 1 banana, 1 orange and 1 apple in your cart.
// Create a function called myBill() that takes no parameters.
// The function should return the total price of your shoppingList. In order to do this you must follow these rules:
// The item must be in stock. (Hint : check out if .. in)
// If the item is in stock find out the price in the prices object.
// Call the myBill() function.
// Bonus: If the item is in stock, decrease the item’s stock by 1
let shoppingList = ['banana', 'orange', 'apple'];
function myBill(){
    let sum = 0;
    for (let i of shoppingList) {
        if (i in stock && stock[i] > 0){
            sum += prices[i];
            console.log(`The price of ${i} is ${prices[i]}`);
            stock[i]=stock[i]-1;
        }
    }
    console.log(`Your total order is: ${sum}`)
    console.log(`Now in stock:`)
    console.log(stock)
}
myBill()

// Exercise 5 : What’s In My Wallet ?
// 1. Create a function named changeEnough(itemPrice, amountOfChange) that receives two arguments :
// - an item price
//  - and an array representing the amount of change in your pocket.
// 2. In the function, determine whether or not you can afford the item.
// If the sum of the change is bigger or equal than the item’s price (ie. it means that you can afford the item), the function should return true
// If the sum of the change is smaller than the item’s price (ie. it means that you cannot afford the item) the function should return false
function changeEnough (itemPrice, amountOfChange=[7,2,1,3]){
    let change = [0.25,0.1,0.05,0.01];
    let sumOfChange = 0;
    for (let i = 0; i <= amountOfChange.length-1; i++) {
        sumOfChange += amountOfChange[i]*change[i];
    }
    if (itemPrice > sumOfChange) {
        return false;
    } else {
        return true;
    }
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))

// 🌟 Exercise 6 : Vacations Costs
// Let’s create functions that calculate your vacation’s costs:
// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.
function hotelCost(textHotel) {
    let nights;
    let price = 140;
    do {
        nights = textHotel;
    }
    while  (isNaN(nights) || nights == " ")
    let amountNight = price*nights;
    return amountNight;
    }
    // hotelCost()

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$
function planeRideCost(textTicket) {
    let destination;
    let location = {
        'london': 183,
        'paris' : 220,
        'other' : 300
    }
    do {
        destination = textTicket;
    }
    while  (destination == "" || !isNaN(destination))
    // isNaN(destination) || destination === " "
    if (destination in location) {
        // if (destination === i){
            destination = (location[destination]);
        } else {
            destination = (location['other']);
        }
    return destination;
    }
// planeRideCost()

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.
function rentalCarCost(textCar) {
    let daysOfCar;
    let rent = 40;
    do {
        daysOfCar = textCar;
    }
    while  (isNaN(daysOfCar) || daysOfCar == " ")
    amountOfCar = 40*daysOfCar;
    if (daysOfCar>10){
        amountOfCar -= amountOfCar*0.05;
    } 
    console.log(amountOfCar)
    return amountOfCar;
}
// rentalCarCost()

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation 
// by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the 
// function totalVacationCost().
// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
function totalVacationCost(){
    const textTicket = prompt(`Where do you travell?`).toLowerCase();
    const textHotel = +prompt(`How many nights would you like to stay?`);
    const textCar = +prompt(`For how many days would you like to rent a car?`);
    const ticket = planeRideCost(textTicket);
    const hotel = hotelCost(textHotel);
    const car = rentalCarCost(textCar);
 
    console.log(`Total amount for the tickets is : ${ticket}`);
    console.log(`Total amount for the hotel is: ${hotel}`);
    console.log(`Total amount for car rent is: ${car} `);   
    console.log(`Total for the travelling: ${car+hotel+ticket}`);
}
totalVacationCost()
