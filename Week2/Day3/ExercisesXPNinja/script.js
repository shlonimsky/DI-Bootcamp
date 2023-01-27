// Exercise 1 : Checking The BMI
// Create two objects, each object should hold a person’s details. Here are the details:
// FullName
// Mass
// Height

// Each object should also have a key which value is a function (ie. A method), 
// that calculates the Body Mass Index (BMI) of each person
// Outside of the objects, create a JS function that compares the BMI of both objects.
// Display the name of the person who has the largest BMI.
let person1 = {
    fullName : "Tom",
    mass : 200,
    height : 200,
    bmi : function bmiP1(){
        const bmiCalc = this.mass/this.height/this.height;
        return bmiCalc;
    }
}
let person2 = {
    fullName : "Dan",
    mass : 150,
    height : 190,
    bmi : function bmiP2(){
        const bmiCalc = this.mass/this.height/this.height;
        return bmiCalc;
    }
}
if (person1.bmi()>person2.bmi()) {
    console.log(person1["fullName"])
} else {
    console.log(person2["fullName"])
}

// Exercise 2 : Grade Average
// - This Exercise is trickier then the others. You have to think about its structure before you start coding.
// - You must use functions to complete this exercise, to do so take a look at tomorrow’s lesson.

// In this exercise we will be creating a function which takes an array of grades as an argument 
// and will console.log the average.

// Create a function called findAvg(gradesList) that takes an argument called gradesList.

// Your function must calculate and console.log the average.

// If the average is above 65 let the user know they passed

// If the average is below 65 let the user know they failed and must repeat the course.
// Bonus Try and split parts 1,2 and 3,4 of this exercise to two separate functions.
// Hint One function must call the other.

let grades = [60,87,69,55,34,0];
grade();

function grade (){
    if (findAvg(grades) >= 65) {
        console.log(`You passed`)
    } else {
        console.log(`You failed and must repeat the course`)
    }

}


function findAvg(gradesList){
    let sum = 0;
    for(i of gradesList){
        sum += i;
    }
    sum = sum/(gradesList.length)
    return sum;
}