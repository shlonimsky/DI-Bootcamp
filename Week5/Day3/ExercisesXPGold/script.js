// Exercise 1 : Star Wars API
// Using this code:
const urls = [
  'https://www.swapi.tech/api/people/5f',
  'https://www.swapi.tech/api/people/2',
  'https://www.swapi.tech/api/people/3',
  'https://www.swapi.tech/api/people/4'
]
// Use Promise.all to fetch all the characters from the array above with only one request.
// Console.log the output and make sure it has a catch block as well.
function fetchURL(urls){
    urls.forEach(url =>{
        fetch(url)
        .then(responseOne => {
            if(responseOne.status !== 200){
                throw new Error(`Error,something wrong`)
            } else {
                return responseOne.json()
            }
        })
        .then(responseTwo => console.log(responseTwo.result.properties))
        .catch(err => console.log(err))
    })
}
fetchURL(urls)

// const prom1 = new Promise((resolve,reject) => {
//     resolve(fetch(urls[0]))
// })
// const prom2 = new Promise((resolve,reject) => {
//     resolve(fetch(urls[1]))
// })
// const prom3 = new Promise((resolve,reject) => {
//     resolve(fetch(urls[2]))
// })
// const prom4 = new Promise((resolve,reject) => {
//     resolve(fetch(urls[3]))
// })
// PromiseAll([prom1,prom2,prom3,prom4])
// .then(responseOne => {
//     if(responseOne.status !== 200){
//         throw new Error(`Error,something wrong`)
//     } else {
//         return responseOne.json()
//     }
// })
// .then(responseTwo => console.log(responseTwo.result.properties))
// .catch(err => console.log(err))