// 🌟 Exercise 1 : Change The Article
// Using a DOM property, retrieve the h1 and console.log it.
const h1Tag = document.body.firstElementChild.firstElementChild
console.log(h1Tag)
// Using DOM methods, remove the last paragraph in the <article> tag.
let articleTag = document.body.firstElementChild
const lastPTag = articleTag.lastElementChild
articleTag.removeChild(lastPTag)
// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const h2Tag = document.querySelector("h2")
h2Tag.addEventListener("click", changeColorH2)
function changeColorH2(){
    h2Tag.style.background="red"
}
// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3Tag = document.querySelector("h3")
h3Tag.addEventListener("click", hideH3)
function hideH3(e){
h3Tag.style.display = "none"
}
// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const newButton = document.createElement("button")
const buttonText = document.createTextNode("Click to bold the paragraphs")
newButton.appendChild(buttonText)
articleTag.appendChild(newButton)
document.querySelector("button").addEventListener("click", changeFontBold)
function changeFontBold(){
    const allP = document.querySelectorAll("p");
    console.log(allP)
    for (let p of allP){
    console.log(p)
    p.setAttribute("style","font-weight: bold;")
    }
}
// newButton.setAttribute("value", "bold")

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
h1Tag.addEventListener("mouseover", hoverH1Font)
function hoverH1Font(){
    console.log("hi")
    let x = Math.floor(Math.random() * 100)
    h1Tag.style.fontSize=`${x}px`
}
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)
h2Tag.addEventListener("mouseover", hoverH2Fade)
function hoverH2Fade(){
    h2Tag.classList="fade-out"
}

