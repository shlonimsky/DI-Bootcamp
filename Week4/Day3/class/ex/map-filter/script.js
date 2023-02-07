const famousPeople = [
    {
        name: "Angelina Jolie",
        job: "actor",
        age: 80
    },
    {
        name: "Georges Clooney",
        job: "actor",
        age: 2
    },
    {
        name: "Paris Hilton",
        job: "actor",
        age: 5
    },
    {
        name: "Kayne West",
        job: "singer",
        age: 16
    },
    {
        name: "Britney Spears",
        job: "singer",
        age: 100
    }
]
// Using the array above, use the map method, to create a new array that contains only the name of the people
const names = famousPeople.map(elem => elem.name)
console.log(names)
// Use the map method, to create a new array, that contains objects, each object contains the name of the actor, and it's job
const obj = famousPeople.map((elem,index) => {
    const newobj ={
        name: elem.name,
        job : elem.job
    }
    return newobj
})
console.log("obj",obj)
const obj1 = famousPeople
.map(elem => ({name: elem.name,job : elem.job}))
// BONUS: Using the array you get from question2, use the for each method, to add the names and the job of the actors on the DOM (in a paragraph, appended to a div with an id "container")
.forEach(elem => {
    const pTag = document.createElement("p")
    const pTagText = document.createTextNode(`name: ${elem.name}, job: ${elem.job}`)
    pTag.appendChild(pTagText)
    document.querySelector("#container").appendChild(pTag)
})



// Exercise 2
const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];
//    Create a new array of objects, containing the name, score and isAboveAverage if the students has a 
// score bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
// Result const studentsNew = [
    // {name: 'Rich', score: 33, isAboveAverage : false}, 
    // {name: 'Peter', score: 55, isAboveAverage : true}];

const scores = studentsFootball.filter(elem => ({name:elem.name, score : elem.score, isAboveAverage: elem.score>50? true:false }))
console.log(scores)

// Exercise 1: create a new array that filters only the positive value
const numbers = [-23,-20,-17, -12, -5, 0, 1, 5, 12, 19, 20];

const onlyPositive = numbers.filter(num => num>0)
console.log(onlyPositive);

// Exercise 2: Suppose you have a list of Star Trek characters,
// and you want to get just the characters that appeared in Star Trek: The Next Generation. Use filter() to filter the array of characters below
const characters = [
    { name: 'James T. Kirk', series: ['Star Trek'] },
    { name: 'Spock', series: ['Star Trek', 'Star Trek: The Next Generation'] },
    { name: 'Jean-Luc Picard', series: ['Star Trek: The Next Generation'] },
    { name: 'Worf', series: ['Star Trek: The Next Generation', 'Star Trek: Deep Space Nine'] }
 ]; 
const onlyNextGeneration = characters.filter( elem => elem.series.includes("Star Trek: The Next Generation"))
console.log(onlyNextGeneration)