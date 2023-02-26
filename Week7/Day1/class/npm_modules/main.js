const axios = require(`axios`)
const users = async() => {
    try{
        // the axios convert ( do the res.json()) from json to js objects
        const res = await axios.get ("https://jsonplaceholder.typicode.com/users")
        return res.data
    } catch(err) {
        console.log(err)
    }
}
// to create public.html
const path = require('path');
const public = path.join('./public','/html')
console.log(public)

// To get the exact path of this file
// /Users/anastasiiashlonimsky/Documents/Full_Stack_JS/DI-bootcamp/Week7/Day1/class/npm_modules
// console.log(__dirname)

// const path = require('path');
// const public = path.join(__dirname,'/public')
// console.log(public)

module.exports = {
    users
}
