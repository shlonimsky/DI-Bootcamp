// Daily Challenge: Planets
// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should 
// have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new 
// class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
const allPlanets = ['Mercury','Venus','Earth','Mars','Jupiter','Saturn','Uranus','Neptune'];
const allColors = ["#b9a1f3", "#f3a1be", "#a1a7f3","#a1dff3","#b6f3a1","#f3e3a1","#f3b7a1","#baa1f3"]

let i =0;
for (let planet of allPlanets){
    console.log(planet)
    // create a div
    createDiv(planet)
    // to add a class
    createClassAndColor(i,planet)
    i++;
}

function createDiv (planet){
    // creating a div for each planet and appending to section
    let div = document.createElement("div");
    let divContent = document.createTextNode(planet)
    div.append(divContent)
    document.body.firstElementChild.appendChild(div)
}

function createClassAndColor(i, planet){
    // creating 2 classes for each planet and adding the color from array AllColors
    let div = document.body.firstElementChild.children[i]
    div.classList.add("planet",planet)
    div.setAttribute('style', `background-color:${allColors[i]};`); 
}
