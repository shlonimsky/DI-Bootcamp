const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const router_shopping = require('./routes/shopp_list.js')
const app=express()
dotenv.config()

app.listen(process.env.PORT, () => console.log(`LISTENING ${process.env.PORT} PORT`))
app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json())



app.use('/',express.static(__dirname+"/public"))
// app.get('/',(req,res) => {
//     res.sendFile(__dirname+"/public/index.html")
// })

app.use('/api/list', router_shopping)


