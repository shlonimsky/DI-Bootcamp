const express = require('express');
const cors = require('cors');
const {sendRequestLogin,sendRequestRegister} = require('./controllers/log_reg.js')


// dotenv.config()
const app = express();

app.listen(5000,() => {
    console.log(`Server is listening port 5000`)
});
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors());


app.use('/',express.static(__dirname+'/public'))

app.get("/login",(req,res) => res.sendFile(__dirname+"/public/login.html"))

app.get('/register',(req,res) => res.sendFile(__dirname+'/public/register.html'))

app.post('/login',sendRequestLogin)
app.post('/register',sendRequestRegister)

