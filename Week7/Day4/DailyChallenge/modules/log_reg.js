const fs = require('fs')

let users
try {
    const jsonString = fs.readFileSync('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/DI-bootcamp/Week7/Day4/DailyChallenge/database/users.json');
    console.log("TAAAAAL",jsonString)
     users = JSON.parse(jsonString);
     
  } catch (err) {
    console.log(err);
  }
  console.log(users)

const checkLogin = (obj) => {
    const foundUser = users.find(user => user.username === obj.username)
    if(foundUser && foundUser.password==obj.password) return `Wellcome back, ${obj.username}!`
    else return `Username or password is wrong`
}

const checkRegister =(obj) => {
    const foundUser = users.find(user => user.username === obj.username)
    if(!foundUser) {
        users.push(obj)
        return `Your accaount was successfully created!`
    }
    else return `Username already exist`
}

module.exports = {
    checkLogin,
    checkRegister
}