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
    const coordinates=[[],[]];
    const latitCity1 = coordinates[0].push(e.target.latitude1.value)
    const longitCity1 = coordinates[0].push(e.target.longitude1.value);
    const latitCity2 = coordinates[1].push(e.target.latitude2.value)
    const longitCity2 = coordinates[1].push(e.target.longitude2.value)
    createAPIRequest(coordinates)
}
// API:  https://api.sunrise-sunset.org/json?lat=36.7201600&lng=-4.4203400

async function createAPIRequest(arr){
    const urls = arr.map(elem => `https://api.sunrise-sunset.org/json?lat=${elem[0]}&lng=${elem[1]}`)
    try{
        const [city1,city2] = await Promise.all(urls.map(async (url) => {
            const obj = await fetch(url)
            if (obj.status!==200){
                throw new Error(`Something went wrong`)
            } else {
            return (await obj.json())
            }
        }))

        const {results : {sunrise : sunriseCity1}}=city1
        const {results : {sunrise : sunriseCity2}}=city2

        console.log("sunrise in city1:",sunriseCity1,"sunrise in city2:",sunriseCity2)

    } catch(err){
        console.log(err)
    }
}