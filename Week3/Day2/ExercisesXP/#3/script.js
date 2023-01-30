// 🌟 Exercise 3 : Transform The Sentence
// Declare a global variable named allBoldItems.
let allBoldItems=[];
// Create a function called getBold_items() that takes no parameter. This function 
// should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
const allStrong = document.getElementsByTagName("strong")
function getBold_items(){
    for (let word of allStrong){
        allBoldItems.push(word.textContent)
    }
    return allBoldItems
}
getBold_items()
// Create a function called highlight() that changes the color of all the bold text to blue.
function highlight(){
    for ( let word of allStrong)
word.style.color="blue"
}
// Create a function called return_normal() that changes the color of all the bold text back to black.
function return_normal(){
    for ( let word of allStrong)
        word.style.color="black"
}
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), 
// and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). 
// Look at this example
function highlightAnimation(){
    for (let word of allStrong){
        word.addEventListener("mouseover", highlight)
        word.addEventListener ("mouseout", return_normal)
    }
}
highlightAnimation()
