// 🌟 Exercise 3 : Change The Navbar
// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const div = document.body.firstElementChild
div.setAttribute("id", "socialNetworkNavigation")
// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
const newList = document.createElement("li")
// Create a new text node with “Logout” as its specified text.
const newText = document.createTextNode("Logout")
// Append the text node to the newly created list node (<li>).
newList.appendChild(newText)
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.
div.firstElementChild.append(newList)
// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the 
// first and last <li> elements from their parent element (<ul>). 
// Display the text of each link. (Hint: use the textContent property).
const firstLi = div.firstElementChild.firstElementChild.textContent
console.log(firstLi)
const lastLi = div.firstElementChild.lastElementChild.textContent
console.log(lastLi)