// Exercise 1 : HTML Form #3
// Create a form like the form provided above. The form should contain three inputs:
// name,
// lastname,
// submit
// Send the data to another HTML file and display the sent data in the body.
// console.log(document.querySelector("#container"));

(function(){
    const form = document.forms.myform;
form.addEventListener("submit", sendData)
}())

function sendData(e){
    // e.preventDefault();
    const fname = e.target.fname.value;
    const lname = e.target.lname.value;
    createElements(fname,lname)
}

function createElements(fname,lname){
    const secondHTML = window.location.href("second.html").querySelector("#container")
    console.log(secondHTML);
    const p= document.createElement("p");
    const pText = document.createTextNode(`Hello, ${fname} ${lname}!`)
    p.appendChild(pText);
    div.appendChild(p)
}