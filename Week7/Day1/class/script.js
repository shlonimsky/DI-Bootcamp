// console.log(`hello`);
// fetch("https://jsonplaceholder.typicode.com/users")
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))
// for (let i=0; i<=10;i++){
//     console.log(i)
// }

// const full_name = `Mike tylor`

// greating(full_name);

const greeting = (name) => {
    console.log(`Hello, ${name}, wellcome to Node.js`)
}


const hello = (name) => {
    console.log(`Just Hello, ${name}`)
}

const a=5

module.exports = {
    greeting,
    hello,
    a
}