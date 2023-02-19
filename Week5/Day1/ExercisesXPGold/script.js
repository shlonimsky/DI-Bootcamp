// // Exercise 1 : HTML Form #3
// // Create a form like the form provided above. The form should contain three inputs:
// // name,
// // lastname,
// // submit
// // Send the data to another HTML file and display the sent data in the body.
// // console.log(document.querySelector("#container"));

let url = window.location.href;
console.log(url);

if (url.indexOf("?") !== -1){
    url = url.slice(url.indexOf("?")+1);

    const searchParams = new URLSearchParams(url);
    const fname = searchParams.getAll('fname');
    const lname = searchParams.getAll('lname')

    const div = document.querySelector("#container");
    const p= document.createElement("p");
    const pText = document.createTextNode(`Hello, ${fname} ${lname}!`)
    p.appendChild(pText);
    div.appendChild(p)
}
