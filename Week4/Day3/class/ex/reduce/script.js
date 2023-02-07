// Exercise 1
const students = [
    {name: 'Rich', score: 33}, 
    {name: 'Peter', score: 55},
    {name: 'John', score: 75}
];

// Find the sum of the score of the students using reduce
const newScore = students.reduce((accumulator, elem) => {
    console.log(accumulator)
    console.log(elem.score)
    return accumulator+elem.score
},0);
console.log("new score", newScore);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted
let voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];
const votedPeople = voters
// .filter(elem => elem.voted === true)
.reduce((accumulator, elem) => { 
    return accumulator+elem.voted
},0);
console.log("voted People", votedPeople)