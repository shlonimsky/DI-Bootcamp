const knex = require('knex')
const dotenv = require('dotenv')
dotenv.config()
//in site https://knexjs.org/guide/#log you can find the structure of th objct
// valus in th proprtis of th srvr


// this is data base
const db = knex({
    client: 'pg',
    connection: {
      host : process.env.DB_HOST,
      port : process.env.DB_PORT,
      user : process.env.DB_USER,
      password : process.env.DB_PASS,
      database : process.env.DB_NAME
    }
})

module.exports={
  db
}




// // DAY3
// console.log(process.env.DB_HOST)
// // DB_HOST=localhost
// // DBB_PORT=5432
// // DB_USER=postgres
// // DB_PASS=3707
// // DB_NAME=dvdrental

// //dont us th slct all
// db('products')
// .select('id','name','price')
// .then(data => console.log(data))
// .catch(err => console.log(err))



// // db.select('*').from('country')
// // .then(data => console.log(data))
// // .catch(err => console.log(err))


// // //updating. the country is th nam of column
// // db('country')
// // .update({country:'Developers Institute'})
// // .where({country_id:2})
// // .returning('*')
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// // //insrting
// // db('country')
// // .insert([
// //     {country:'Amy 1'},
// //     {country: 'Claire 1'}
// // ])
// // .returning('*')
// // .then(rows => console.log(rows))
// // .catch(err => console.log(err))

// // //deleting
// // db('country')
// // .where({country:'Amy 1'})
// // .del()
// // .returning('*')
// // .then(rows => console.log(rows))
// // .catch(err => console.log(err))