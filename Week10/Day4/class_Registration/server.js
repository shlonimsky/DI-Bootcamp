//in payload of token don't put sensetivedata.
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c

//in json put:   "type" : "module", it used to 
import express from "express";
//cookieParser put it in http session (http cookie) and it will gone
import cookieParser from "cookie-parser";
import cors from 'cors'
import dotenv from 'dotenv'
import db from './config/Database.js'
import router from "./routes/Users.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(cookieParser()); //uses as a middleWare
app.use(express.json());

app.use(express.urlencoded({extended:true})); //bodyparser

app.use(router)

app.listen(process.env.PORT || 8080, () => {
    console.log(`run on port ${process.env.PORT || 8080}`)
})

try{
    await db.authenticate();
    console.log('database connected')
} catch(err){
    console.log(err)
}

