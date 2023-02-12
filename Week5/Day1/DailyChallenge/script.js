// Daily Challenge : HTML Form
// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
const myform = document.forms.myform
console.log(myform);
myform.addEventListener("submit", formFunc)
function formFunc(e){
    e.preventDefault();
 
    let newObj = {};
    newObj["firstName"] = e.target.fname.value;
    newObj["lastName"] = e.target.lname.value;

    const newJson = JSON.stringify(newObj);
    createP(newJson)
}
function createP(json){
const pTag = document.createElement("p")
const pTagText = document.createTextNode(`JSON of the input is: ${json}`)
const div = document.getElementById("container")
pTag.appendChild(pTagText);
div.appendChild(pTag)
}