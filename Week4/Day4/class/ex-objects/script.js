// Object destructuring
// Exercise1
// Part I
// What does the following code return/print?

const facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
const {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // 8
console.log(yearNeptuneDiscovered); // 1846

// Part II
// What does the following code return/print?
let planetFacts = {
    numPlanets1: 8,
    yearNeptuneDiscovered: 1846,
    yearMarsDiscovered: 1659
  };
  
  let {numPlanets1, ...discoveryYears} = planetFacts;
  
  console.log(discoveryYears); // ?= {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659};

//   Exercise3
// Modify the code below, and destructure the object in the parameter (ie. you should have 3 parameters : name, house and goodstudents)
function getDetails({name, house, goodstudent}) {
	console.log(name, house, goodstudent)
}

getDetails({name: 'Harry Potter',house: 'Gryfindor',goodstudent : false})

// Exercise4
// Modify the code below, and destructure the object in the parameter (ie. you should have 4 parameters : name, house, friendName and age)

function getMoreDetails({name,house,friend : {friendName, age}}) {
	console.log(name, house, friendName, age)
}

getMoreDetails(
			{name: 'Hermione Granger', 
			house: 'Gryfindor', 
			friend :  {
					friendName : 'Harry Potter', 
                    age : 20
				}
			})


//             Exercise5
// Modify the code below, and destructure the object in the parameter 
// (ie. you should have 4 parameters : firstname, lastname, locationOne, locationTwo, valueHouses)
const elonPerson = {
    first: 'Elon',
    last: 'Musk',
    housesLocation : ["new york", "paris"],
    twitter: '@elonmusk',
    company: 'Space X',
    houses : {
      amount: 2,
      value : "5Million"
    }
}

function getElonMuskDetails({first : firstname, last : lastname, housesLocation: [locationOne, locationTwo], houses:{value:valueHouses}}){
	console.log(firstname, lastname)
	console.log(locationOne, locationTwo, valueHouses)

}

getElonMuskDetails(elonPerson)

// Exercise 6
// Display in the body of the document, the name, email and phone of every employee. Use a loop and object destructuring
const employees = [
	{name: "Anne", email: "Anna@example.com", phone:"0000–000–0000"},
	{name: "Tom", email: "Tom@gmail.com", phone:"0111–111–1111"},
]
const info = employees.forEach( obj => {
    const {name:fName, email,phone} = obj
    const pTag = document.createElement("p")
    const pText = document.createTextNode(`${fName},${email},${phone}`)
    pTag.appendChild(pText)
    document.getElementById("container").appendChild(pTag)
    console.log(fName,email,phone)
})

// Exercise 2 : USE OBJECT DESTRUCTURING
const studentsFootball = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55}
   ];
//    Using MAP,  create a new array of objects, containing the name, score and isAboveAverage if the students has a score 
// bigger that 50, the key isAboveAverage will be true, else the key isAboveAverage will be false. Use ternary operator
// const studentsNew = [
//     {name: 'Rich', score: 33, isAboveAverage : false}, 
//     {name: 'Peter', score: 55, isAboveAverage : true}
// ];

const newStudFootball = studentsFootball.map(team => {
    let {name:fName,score,isAboveAverage}=team;
    isAboveAverage= score>=50;
    return {fName,score,isAboveAverage}
    // or returt c we can write isAboveAverage just once, because the value and the key have the same name.

    // OR  team => ({...team,isAboveAverage:team.score>50})
})
console.log(newStudFootball)