// 🌟 Exercise 2 : Users And Style
// Add a “light blue” background color and some padding to the <div>.
const div = document.body.firstElementChild
div.style.background=("lightblue");
document.body.firstElementChild.style.padding="20px";
// Do not display the <li> that contains the text node “John”.
document.body.children[1].children[0].style.visibility = "hidden";
// Add a border to the <li> that contains the text node “Pete”.
document.body.children[1].children[1].style.border = ("solid", "red");
// Change the font size of the whole body.
document.body.style.fontSize = "50px"
// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
if (div.style.background === "lightblue") {
    div. textContent = `Hello, x and y `
}