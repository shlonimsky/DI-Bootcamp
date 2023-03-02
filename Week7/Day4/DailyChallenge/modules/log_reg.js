const fs = require('fs')

// let users
// try {
//     const jsonString = fs.readFileSync('../database/users.json');
//      users = JSON.parse(jsonString);
     
//   } catch (err) {
//     console.log(err);
//   }
//   console.log(users)

const checkLogin = (obj) => {
    const jsonString = fs.readFileSync('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/DI-bootcamp/Week7/Day4/DailyChallenge/database/users.json');
    users = JSON.parse(jsonString);
      console.log("users json in ligin",users)


    const foundUser = users.find(user => user.username === obj.username)
    if(foundUser && foundUser.password==obj.password) return `Wellcome back, ${obj.username}!`
    else return `Username or password is wrong`
}

const checkRegister =(obj) => {
    const jsonUsers = fs.readFileSync('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/DI-bootcamp/Week7/Day4/DailyChallenge/database/users.json');
    users = JSON.parse(jsonUsers);
    console.log("users json in reg ",users)
    const foundUser = users.find(user => user["username"] === obj["username"])
    if(!foundUser) {
        users.push(obj)
        console.log(users)
        fs.writeFile('/Users/anastasiiashlonimsky/Documents/Full_Stack_JS/DI-bootcamp/Week7/Day4/DailyChallenge/database/users.json',JSON.stringify(users),(err) => {
            if (err) throw err;
            console.log('The file has been saved!');
          });
          
        return `Your accaount was successfully created!`
    }
    else return `Username already exist`
}

module.exports = {
    checkLogin,
    checkRegister
}