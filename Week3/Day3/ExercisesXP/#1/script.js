// 🌟 Exercise 1: Timer
// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.
function alertHello(){
    alert(`Hello World`)
}
setTimeout(alertHello, 2000)

// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
function addParagraph(){
    let newP = document.createElement("p")
    let newtext = document.createTextNode(`Helo World`)
    newP.appendChild(newtext)
    document.querySelector("#container").appendChild(newP)
}
setTimeout(addParagraph, 2000)

// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
// as soon as there will be 5 paragraphs inside the <div id="container">.
let counter =5;
const id = setInterval(part3, 2000)
function part3(){
    if (counter>0){
    addParagraph()
    counter--
    } else {
        clearInterval(id)
    }
}
const button = document.querySelector("#clear")
button.addEventListener("click", clearPart3)
function clearPart3(evt){
    clearInterval(id)
}