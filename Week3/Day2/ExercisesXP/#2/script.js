// 🌟 Exercise 2 : Work With Forms
// Retrieve the form and console.log it.
const userForm = document.forms[0]
console.log(userForm)
// Retrieve the inputs by their id and console.log them.
console.log(userForm.elements[0].id)
console.log(userForm.elements[1].id)
// Retrieve the inputs by their name attribute and console.log them.
console.log(userForm.elements[0].name)
console.log(userForm.elements[1].name)
// When the user submits the form (ie. submit event listener)
userForm.addEventListener("submit", keepInputData)
function keepInputData(event){
 //  - use event.preventDefault(), why ? // It prevents refreshing of form
    event.preventDefault(); 
        //  - get the values of the input tags,
    const valueFirstName = event.target[0].form[0].value;
    const valueLastName = event.target[1].form[1].value;
    //  - make sure that they are not empty,
    if (formValidation(valueFirstName,valueLastName)){
        console.log(valueFirstName);
        console.log(valueLastName);
    } else{
        alert (`Error. Enter the valid names`);
    }
    //  - create an li per input value,
    const liFirstName = document.createElement("li")
    const liTextFName = document.createTextNode(valueFirstName)
    const liLastName = document.createElement("li")
    const liTextLName = document.createTextNode(valueLastName)
//  - then append them to a the <ul class="usersAnswer"></ul>, below the form.
liFirstName.appendChild(liTextFName)
document.querySelector("ul").appendChild(liFirstName)
liLastName.appendChild(liTextLName)
document.querySelector("ul").appendChild(liLastName)   
}

function formValidation(value1,value2){
    // Cheking if the form is empty
    let valid
    ( value1 === "" || value2 === "") ? valid = false : valid = true 
    return valid
}

