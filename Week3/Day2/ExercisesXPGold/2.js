// Exercise 2: Delete Colors
// Add a click event listener to the <input type="button">. When 
// clicked on, it should call a function named : removecolor() that removes 
// the selected color from the dropdown list.
const button = document.querySelector("input")
button.addEventListener("click", removecolor)

function removecolor(){
    const colors = document.querySelector("#colorSelect")
    colors.remove(colors.selectedIndex);
}