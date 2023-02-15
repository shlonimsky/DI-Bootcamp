// 🌟 Exercise 1: Conversion
// Convert the below promise into async await:
// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));
async function getData(){
    try{
        const data = await fetch("https://www.swapi.tech/api/starships/9/");
        if (data.status !== 200){
            throw new Error(`Something wrong`)
        } else{
            const dataObj = await data.json();
            console.log(dataObj.result)
        }
    }   catch(err){
        console.log(err)
    }
}
getData()

// 🌟 Exercise 2: Analyze
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?
// 'calling'
// and in 2s --- 'resolved'
