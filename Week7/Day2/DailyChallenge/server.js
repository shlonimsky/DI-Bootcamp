const { json } = require('express');
const express = require('express');
const app = express();
app.listen(3000,() => console.log('listening.......'));

app.use('/',express.static(__dirname+'/public'));

app.get('/aboutMe/:hobby',(req,res) =>{
    const hobby = req.params.hobby;
    // const onlyLetters = /^[a-zA-Z]+$/.test(hobby);
    if (isNaN(+hobby) && hobby.length>=1){
        res.send(`You ar looking for hobby : ${hobby}`)
    } else {
        res.status(404).send({msg:'404 Error'})
    }
});

app.get('/pic', (req,res) => {
    res.sendFile(__dirname+"/public/pic.html")
})

app.get('/form',(req,res) => {
    res.sendFile(__dirname+"/public/form.html")
})

// app.get('/formData', (req,res) => {
//     const newMessage = {
//         email : req.query.email,
//         message : req.query.message
//     }    
//     res.send(`from ${req.query.email} you received a message "${req.query.message}"`)
//     console.log(newMessage)
// })

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.post('/formData', (req,res) => {
        const newMessage = {
            email : req.body.email,
            message : req.body.message
        }    
        res.send(`from ${newMessage.email} you received a message "${newMessage.message}"`)
        console.log(newMessage)
    })