function sayHello(){
    alert(`hello`)
}
// This function will be called after 2sec of refresing
// setTimeout(sayHello, 2000)


// Exercise 1
// Create a new HTML file
// Create a banner saying "The sales end in 10min ! " . 
// Style the banner and make it visible to the user after 5 sec.
function sales (){
  let div = document.createElement("div")
    let divContent = document.createTextNode(`The sales end in 10 min ! `)
    div.appendChild(divContent)
    document.querySelector("#baner").appendChild(div)
    div.classList.add("baner")
    // setTimeout(timer, 1000)
}
setTimeout(sales, 1000)


// Exercise 2
// Use the same code as before but create a countdown in the banner.
// ... "The sales end in 10sec ! "
// ... "The sales end in 9sec ! "
// etc ... until 0
// If you need help for this exercise, look at the 1st video of this tutorial

const id = setInterval(salesTimer, 1000) 
let counter = 10;

function salesTimer(){
    if (counter>=0){
    document.querySelector("#baner").children[0].textContent=`The sales end in ${counter}min ! `
    counter--;
} else {
    clearInterval(id)
}
}


