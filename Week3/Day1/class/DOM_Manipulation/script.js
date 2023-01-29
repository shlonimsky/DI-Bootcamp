function changeParagraph () {
    const title = document.body.firstElementChild;
    const division = title.nextElementSibling;
    const paragraph =  division.firstElementChild;
    console.log(paragraph);
    paragraph.textContent = "Great!!"
}

changeParagraph()
// title.textContent = "Good Morning";

//access the second div on the page
const secondDiv = document.body.children[2];
//access the first child of the div
const paragraphOfSecondDiv = secondDiv.firstElementChild;
//change the text content of the paragraph inside the second div
paragraphOfSecondDiv.textContent = "How are you";

// Change the style
// change the background color of the H1
document.body.firstElementChild.style.backgroundColor = "yellow"

// method
// getElementById retrieves only 1 element
const main = document.getElementById("mainDiv"); //element with the id "mainDiv"
const para = main.firstElementChild; //first element of the div

//querySelector
// select elements with css property
// retrieve the element with the id "#mainDiv"
//querySelector retrives only 1 element
const mainD = document.querySelector("#mainDiv");
// querySelectorAll retrives all elements
const allDiv = document.querySelectorAll("div"); 
// [div, div#mainDiv]

//retrieve all the paragraphs inside the mainDiv
const allPara = document.querySelectorAll("#mainDiv > p");

//make all the div to yellow
for (let block of allDiv) {
    block.style.backgroundColor = "yellow";
}

// Create Element 

//1st : retrieve the section
const containerSection =  document.querySelector("#container");

//2nd : create the paragraph
const newParagraph = document.createElement("p");

//3rd step : create the content
const content = document.createTextNode("Hello John");

// 4th step : add the content to the paragraph
newParagraph.appendChild(content);

//5th step : add the paragraph to the section
containerSection.appendChild(newParagraph);

// Select the span
const spanData = document.querySelector("#usernamePrompt");

const username = prompt("what is your name");

spanData.textContent = username;

// OR
const title = document.querySelector("#title");

title.textContent += " John";

// EXERCISE
const items = ["chocolate", "shoes", "food"];

// in the section I want to add the items the user bought
// paragraph that says "You bought ..."

function addItems () {
    const containerSection = document.querySelector("#container");
    for (let product of items) {
        const newP = document.createElement("p");
        const content = document.createTextNode(`You bought ${product}`);
        newP.classList.add("ocean")
        newP.appendChild(content); //add the content to the paragraph
        containerSection.appendChild(newP); //add the paragraph to the section
    }
}

addItems()


const itemsMore = ["chocolate", "shampoo"];

// in the section I want to add the items the user bought
// paragraph that says "You bought ..."

function addPics () {
    const containerSection = document.querySelector("#container");
    for (let product of itemsMore) {
        const newImg = document.createElement("img");
        newImg.setAttribute("src", `${product}.jpg`);
        newImg.classList.add("imgFood");
        containerSection.appendChild(newImg);
    }
}

addPics()









// function sayHello (username) {
//     const spanData = document.querySelector("#usernamePrompt");
//     spanData.textContent = username;
// }

// sayHello("John");



//1st loop
//element = div
//2nd loop
//element = div#mainDiv

//list or array
// const colors = ["blue", "red", "yellow"];

// for (let i = 0; i < colors.length; i++){
//     console.log(colors[i]);
// }

// for (let elem of colors) {

// }

//1st loop 
// elem = 'blue'

// //2nd loop
// elem = 'red'

// const colors = ["blue", "red", "yellow"];

// for(let elem in colors){

// }
// //1st loop
// elem = 0

// // 2nd loop
// elem = 1
// // 

// const family = {
//     members : 5,
//     lastName : 'Smith',
// }

// for (let prop in family) {
//     console.log(prop);
//     console.log(family[prop]);
// }

// //1st loop
// prop = 'members'
// console.log(family["members"]); --> 5

// //2nd loop
// prop = 'lastName'
// console.log(family["lastName"]); --> 'Smith'
