// Exercise 3 : Create A Shopping List
// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array 
// as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.
let shoppingList=[]
addForm()
const form = document.forms[0]
form.addEventListener("submit", addItem)
const buttonClear = document.querySelectorAll("button")[1]
buttonClear.addEventListener("click", clearAll)
function addForm (){
    // create form
const form = document.createElement("form")
// create input text field
const input = document.createElement("input")
input.setAttribute("type", "text")
input.setAttribute("placeholder", "add an item")
// create button Add Item
const button = document.createElement("button")
button.setAttribute("type","submit")
const buttonText = document.createTextNode("Add an item")
// create button Clear All
const buttonClear = document.createElement("button")
buttonClear.setAttribute("type","reset")
const buttonClearText = document.createTextNode("Clear All")
// Appending 
buttonClear.appendChild(buttonClearText)
button.appendChild(buttonText);
form.appendChild(input);
form.appendChild(button)
form.appendChild(buttonClear)

document.getElementById("root").append(form)
}

function addItem (event){
    event.preventDefault();
    console.log(event)
    const value = event.target[0].value
    console.log(value)    
    shoppingList.push(value)
    console.log(shoppingList)
}

function clearAll(e){
    shoppingList=[]
    console.log(shoppingList)
}