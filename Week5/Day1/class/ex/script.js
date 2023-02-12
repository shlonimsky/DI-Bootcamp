// Exercise:
// Take a look at this URL : https://www.marvel.com/search?limit=9&query=IRONMAN
// Create a form in the HTML that will redirect the user to the URL above, the point is to fetch 10 pieces of information per page, for Thor
// You first need to validate the data:
// make sure the limit is equal to 10
// make sure the query is not empty, and contains at least 5 characters
// if not, you shouldn't submit the form
const myForm = document.forms.myform
myForm.addEventListener("submit", limitIs10)
function limitIs10(e){
    // e.preventDefault();

    const valueLimit = +e.target.limit.value
    const valueQuery = e.target.query.value
    console.log(valueLimit)
    console.log(valueQuery)
   if(valueLimit!==10 || valueQuery==" " || valueQuery.length()<4){
    e.preventDefault();
   }
}


// JSON Exercise
// Exercise with JSON
// Parse this JSON string into a JS object
// Use array or object methods to display THE VALUES OF THE OPTIONS OF THE FIRST SPORT QUESTION
// Create another variable to stringify the JS object. Console.log the variable
// Then use pretty print (look at the lesson)
let jsonString = `
{
    "quiz": {
        "sport": {
            "q1": {
                "question": "Which one is correct team name in NBA?",
                "options": [
                    "New York Bulls",
                    "Los Angeles Kings",
                    "Golden State Warriros",
                    "Huston Rocket"
                ],
                "answer": "Huston Rocket"
            }
        },
        "maths": {
            "q1": {
                "question": "5 + 7 = ?",
                "options": [
                    10,
                    11,
                    12,
                    13
                ],
                "answer": 12
            },
            "q2": {
                "question": "12 - 8 = ?",
                "options": [
                    1,
                    2,
                    3,
                    4
                ],
                "answer": 4
            }
        }
    }
}`
const newObj = JSON.parse(jsonString)
console.log(newObj);
const sportQuest = newObj.quiz.sport.q1.options
console.log(sportQuest);
const newJson = JSON.stringify(newObj,null,2)
console.log(newJson);