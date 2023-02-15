// 1st Challenge
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.
// Explain in a comment how Promise.all work and why you receive this output.
// Example 

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"]

async function solvePromises(arrPromises){
    try{
    const allPromises = await Promise.all(arrPromises)
    console.log(allPromises)
    } catch(err){
        console.log(err)
    }
}
solvePromises([promise1,promise2,promise3])


// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.

// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city

// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()
// Try with Paris and New York

// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242

const form = document.forms[0]
form.addEventListener("submit",getFormData)

function getFormData(e){
    e.preventDefault();
    const longitCity1 = e.target.longitude1.value
    const latitCity1 = e.target.latitude1.value
    const longitCity2 = e.target.longitude2.value
    const latitCity2 = e.target.latitude2.value
    console.log(longitCity1,latitCity1,longitCity2,latitCity2)
    createAPIRequest(latitCity1,longitCity1,latitCity2,longitCity2)
}
// https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400

function createAPIRequest(lat1,lng1,lat2,lng2){
    
}