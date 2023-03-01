const express = require('express')
const app = express();
app.listen(5002,() => {
    console.log("Server is listening port 5002")
});

app.get("/",(req,res) => {
    console.log('login')
    res.sendFile(__dirname+"/public/login.html")
})

app.get('/register',(req,res) => {
    console.log('register')
    res.sendFile(__dirname+'/public/register.html')
})