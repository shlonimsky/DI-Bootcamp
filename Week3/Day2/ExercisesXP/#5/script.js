// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, 
// mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change 
// position y, change color, change the font size… and more.
let element = document.querySelector("#div")
function elementEvents(){
    element.addEventListener("click", clickEvent)
    element.addEventListener("mouseover", mouseoverEvent)
    element.addEventListener("mouseout", mouseoutEvent)
    element.addEventListener("dblclick", mouseoutEvent)
}
elementEvents()

function clickEvent(){
element.classList.add("click")
element.textContent="I'm Hiding"

}

function mouseoverEvent(){
    element.classList.add("mouseover")
    element.textContent="Hello"
}

function mouseoutEvent(){
    element.textContent="By"
element.classList.add("mouseout")
}

function mouseoutEvent(){
element.classList.add("dblclick")
element.textContent="Yeap"

}