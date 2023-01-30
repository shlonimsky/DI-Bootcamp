const button = document.querySelector("#btn");

//syntax
// Element.addEventListener(event, callback function);
button.addEventListener("click", sayHello);
button.addEventListener("mouseover", hover);
//sayHello is the reference to the sayHello function

function sayHello () {
    alert("HELLO");
}

function hover () {
    console.log("HOVER");
    button.textContent = "I was hovered";
}

//click on the button, I want to change the background color of the body to blue
const buttonTwo = document.querySelector("#btn2");

buttonTwo.addEventListener("click", changeToYellow)

function changeToYellow () {
    console.log("hello");
    document.body.style.backgroundColor = "yellow";
}

const buttonFirst = document.querySelector("#btnfirst");
const buttonSecond = document.querySelector("#btnsecond");

function changeToBlue () {
    document.body.style.backgroundColor= "blue";
}

function changeToRed () {
    document.body.style.backgroundColor= "red";
}

buttonFirst.addEventListener("click", changeToBlue);
buttonSecond.addEventListener("click", changeToRed);

const buttonA = document.querySelector("#btnA");
const buttonB = document.querySelector("#btnB");

// evt object is a JS object filled with information about the event
// for example we can have the information : what type of event it was, 
// what was clicked, and a lot more 
function changeBackground (evt) {
    console.log(evt); //evt is the object
    console.log(evt.pointerType);
    console.log("evt.target :", evt.target);
    console.log("evt.target.textContent :", evt.target.textContent);
    document.body.style.backgroundColor = evt.target.textContent.toLowerCase();
}


buttonA.addEventListener("click", changeBackground);
buttonB.addEventListener("click", changeBackground);