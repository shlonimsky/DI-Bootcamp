const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')

dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())
app.listen(process.env.PORT, () => console.log(`Listening ${process.env.PORT}`))

app.get('/api/hello', (req,res) => {
    res.json('Hello From Express')
})

app.post('/api/word',(req,res) => {
    console.log(req.body)
    res.json({message:`I received your POST request. This is what you sent me: ${req.body.message}`})
})