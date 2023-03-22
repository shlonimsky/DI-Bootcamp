// const knex = require('knex')
import { Sequelize } from 'sequelize' //instead of knex
import dotenv from 'dotenv'
dotenv.config()
//in site https://knexjs.org/guide/#log you can find the structure of th objct
// valus in th proprtis of th srvr

const db = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host : process.env.DB_HOST,
    port : process.env.DB_PORT,
    dialect : 'postgres'
  }
)



export default db


