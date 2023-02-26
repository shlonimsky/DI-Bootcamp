// to import the module
// ./-the same folder
// const greeting = require('./script.js')
// console.log(greeting("John"))

const {users} = require('./npm_modules/main.js');
// users() - return promise
users().then(res => console.log(res))
