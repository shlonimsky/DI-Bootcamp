// // // Exercise 1 : guess what will be console.logged

// function setObj(person) { 2
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1); 1

// console.log(personObj1); // -> ?  3
// // {
// //     name: 'Alex',
// //     age: 30
// // };

// console.log(personObj2); // -> ? 4
// // {
// //     name: 'Alex',
// //     age: 25
// // };


// // Exercise 2 guess what will be console.logged

// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };
    
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?
// // personObj1 = {
// //     name: 'Alex',
// //     age: 30
// // };
// console.log(personObj2); // -> ?
// // {
// //     name: 'John',
// //     age: 50
// // };

// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div
(function (username) {
    document.getElementById("container").textContent=`Hello ${username}`
    console.log(`Hello ${username}`);
})("John")


// NESTED FUNCTIONS
// Create a function named starWars that takes no parameter.
// The function should declare a variable characters equal to an empty array
// In the startWars function, create a function named createCharacter. It receives two parameters, the first name and 
// last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once
function starWars (){
    const arr =[];
    function createCharacter(fname, lname="Smith"){
        const fullname = fname+" " + lname
        arr.push(fullname)
        console.log(arr)
    }
    function displayCharacter(){
        const container = document.getElementById("container")
        arr.forEach(element => {
            const para = document.createElement("p")
            const text = document.createTextNode(element)
            para.appendChild(text)
            container.appendChild(para)
        });
    }

    createCharacter("Chubaka")
    createCharacter("Bubaka")
    displayCharacter()

}
starWars()