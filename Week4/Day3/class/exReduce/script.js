// Reduce
// Exercise 1
const students = [
 	{name: 'Rich', score: 33}, 
 	{name: 'Peter', score: 55},
 	{name: 'John', score: 75}
];

const totalScore = students.reduce((acc, obj) => {
    return acc + obj["score"];
}, 0)

// const totalScoreTwo = students.reduce((acc, obj) => acc + obj["score"], 0)

console.log(totalScore);

// Exercise 2
// Turn an array of voter objects into a count of how many people voted
const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Bob' , age: 30, voted: true},
];

const totalPplVoted = voters.reduce((acc, person) => {
    if(person["voted"] === true){
        return (acc + 1);
    } else {
        return acc;
    }
}, 0)

console.log(totalPplVoted);

const totalPplVotedOne = voters.reduce((acc, person) => {
    return acc + person["voted"];
}, 0)

console.log(totalPplVotedOne);

const totalPplVotedTwo = voters.reduce((acc, person) => acc + person["voted"], 0)
console.log(totalPplVotedTwo);