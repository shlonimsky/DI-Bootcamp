// 🌟 Exercise 1 : Find The Sum
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.
// (function (a,b){ console.log(a+b)})(1,2)
const c=(a,b) => console.log(a+b)

// Exercise 2 : Kg And Grams
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
function convert1(kilo){
    const gram = kilo*1000
    console.log(gram)
}
convert1(5)
// Then, use function expression and invoke it.
const convert2 = function(kilo){
     const gram = kilo*1000
     console.log(gram)
}
convert2(4)
// Write in a one line comment, the difference between function declaration and function expression.
// in function expression we define a variable as a function. 
// Finally, use a one line arrow function and invoke it.
const  convert3 = kilo => (kilo*1000);
console.log(convert3(2));


// 🌟 Exercise 3 : Fortune Teller
// Create a self invoking function that takes 4 arguments: 
// number of children, partner’s name, geographic location, job title.
(function(numOfChild,partnerName,location,job){
    let sentence = `You will be a ${job} in ${location}, and married to ${partnerName} with ${numOfChild} kids.`;
    const pTag = document.createElement("p");
    const pTagText = document.createTextNode(sentence);
    pTag.appendChild(pTagText);
    document.body.append(pTag);
})(3,"tom","Tel-Aviv","Dancers");
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."

// 🌟 Exercise 4 : Welcome
// John has just signed in to your website and you want to welcome him.
// https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg
// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.
(function(usetname){
    const div = document.querySelector("nav a")
    div.textContent=`Hello, ${usetname}`
    const picture = document.createElement("img")
    picture.setAttribute("style","border-radius:50%")
    picture.style.width="50px"
    picture.setAttribute("src","https://play-lh.googleusercontent.com/jkpabs01pnEU5Jc9U3MuWdwwoWi8v7x33RZNYyLP2T8a2j1csnjOy3_-KI6JU8JntlNW")
    div.appendChild(picture)
})("Alex")



// 🌟 Exercise 5 : Juice Bar
// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.
// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants 
// a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> 
// juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the 
// displayJuice function. Finally, invoke the makeJuice function in the global scope.
function makeJuice (size){

    const ingredients=[];

    function addIngredients(ingr1,ingr2,ingr3){
        ingredients.push(ingr1)
        ingredients.push(ingr2)
        ingredients.push(ingr3)
    }
    function displayJuice(){
        const newCoctail = document.createElement("p")
        let newCoctailText = `The client wants a ${size} guice, containing: `
        ingredients.forEach(ingredient => newCoctailText+=ingredient+", ")
        newCoctail.textContent=newCoctailText
        document.getElementById("coctails").appendChild(newCoctail)
    }
    addIngredients("basil","cucumber","gin")
    addIngredients("happiness","talent","luck")
    displayJuice()
}

makeJuice("small")