const express = require('express');
const app = express();
app.listen(3003, () =>{
    console.log(`listening`)
})

app.get('/',(req,res) => {
    res.send('<h1> Hello, this is a request from server EXPRESS </h1>')
})