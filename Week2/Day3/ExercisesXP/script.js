// Exercise 1 : List Of People
// Instructions
const people = ["Greg", "Mary", "Devon", "James"];
// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.
people.shift();
console.log(people);
// Write code to replace “James” to “Jason”.
people.splice(2, 1, "Jason");
console.log(people);
// Write code to add your name to the end of the people array.
people.push("Nastya");
console.log(people);
// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.
console.log(people.indexOf("Mary"));
// Write code to make a copy of the people array using the slice method.
let copyPeople = people.slice();
console.log(copyPeople);
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method
copyPeople = copyPeople.slice(1);
console.log(copyPeople);
// Write code that gives the index of “Foo”. Why does it return -1 ?
console.log(copyPeople.indexOf("Foo"));
// It return -1, because there is no element that containe "Foo"
// Create a variable called last which value is the last element of the array.
let last = copyPeople[copyPeople.length-1];
console.log(last);
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.
for (let i=0; i <= copyPeople.length-1; i++) {
    console.log(copyPeople[i])
}
// Using a loop, iterate through the people array and exit the loop after 
// you console.log “Jason” .
for (let i = 0; i <= copyPeople.length-1; i++) {
    if (copyPeople[i] == "Jason") {
        console.log(copyPeople[i]);
        break;
    }
    console.log(copyPeople[i]);
}
// Hint: take a look at the break statement in the lesson.


// 🌟 Exercise 2 : Your Favorite Colors
// Create an array called colors where the value is a list of your five 
// favorite colors.
let colors = ["red", "blue", "black", "white", "brown"];
let index = colors.indexOf[0];
let x = 0;
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
for (let i of colors) {
    // let index = colors.indexOf["i"];
    x++
    console.log(`My #${x} choice is ${i} `);
}
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, 
// “My 3rd choice”, picking the correct suffix for each number.
let suffix = ["st", "nd", "rd", "th", "th"];
for (let i = 0; i <= colors.length-1; i++) {
    console.log(`My ${(i+1)+suffix[i]} choice is ${colors[i]} `);
}
// Hint : create an array of suffixes to do the Bonus

// 🌟 Exercise 3 : Repeat The Question
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)
// The data type of prompt is allways a "string".
// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?
let num;
do {
num = Number(prompt(`Please, enter a number that I'm thinking about:`));
}
while (num<10);
alert(`You are rigth! It's ${num}`);
// But we can use the both of "while"


// 🌟 Exercise 4 : Building Management
const building = 
{
    numberOfFloors: 4,

    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },

    nameOfTenants: ["Sarah", "Dan", "David"],

    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
// Console.log the number of floors in the building.
// const numberOfFloors = building["numberOfFloors"]
console.log(building["numberOfFloors"]);
// Console.log how many apartments are on the floors 1 and 3.
console.log(`Amount apartments on the 1-st floor : ${building["numberOfAptByFloor"]["firstFloor"]}`);
console.log(`Amount apartments on the 3-th floor : ${building["numberOfAptByFloor"]["thirdFloor"]}`);
// Console.log the name of the second tenant and the number of rooms he has in his apartment.
const secondTenant = building["nameOfTenants"][1];
const secondTenantLC = secondTenant.toLowerCase();
console.log(`The second tenant ${secondTenant} has ${building["numberOfRoomsAndRent"][secondTenantLC][0]} rooms in his apartment`);
// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.
const rentOfSarah = building["numberOfRoomsAndRent"]["sarah"][1];
console.log(rentOfSarah);
const rentOfDavid = building["numberOfRoomsAndRent"]["david"][1];
console.log(rentOfDavid);
const rentOfDan = building["numberOfRoomsAndRent"][secondTenantLC][1];
console.log(rentOfDan);
let sumRent = rentOfDavid+rentOfSarah;
console.log(`The sum of Sarah's and David's rent is ${sumRent}`);
if (sumRent>rentOfDan) {
    building["numberOfRoomsAndRent"][secondTenantLC][1] = 1200;
}
console.log(building["numberOfRoomsAndRent"][secondTenantLC][1]);

// 🌟 Exercise 5 : Family
// Create an object called family with a few key value pairs.
let family = {
    fname : "Ammy",
    lname : "Wood",
    age : 20,
    work : "lawyer"
}
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.
for (let i in family) {
    console.log(`${i} : ${family[i]}`);
}
// Exercise 6 : Rudolf
const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
//   Given the object above and using a for loop, console.log 
// “my name is Rudolf the raindeer”
for (let i in details ) {
    if (details[i] === 'Rudolf') {
    console.log(`My name is ${details[i]} the raindeer`)
    continue
    }
}

// Exercise 7 : Secret Group
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
names.sort();
let code = "";
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”
for (let i of names) {
code += i.slice(0,1);
}
console.log(code);