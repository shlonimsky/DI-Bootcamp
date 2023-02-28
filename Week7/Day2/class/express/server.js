const express = require("express")
const {products} = require("./database/products.js");




const cors = require('cors')
const app =express();
app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

// console.log(__dirname)
app.use('/',express.static(__dirname + '/fetching'))

//static page is a pegu
app.listen(process.env.PORT, () =>{
    console.log(`listening port ${process.env.PORT}`)
})
// app.get("/api",(req,res) => {
//     res.send(`<h2> Hello </h2>`);
// })

app.get("/api/products", (req,res) => {
    // res.send(products)
    res.json(products)
})

app.get('/api/products/:id', (req,res)=>{
    const product_id = req.params.id;
    const product = products.find(item => {
      return item.id == product_id
    })
    if(!product){
      return res.status(404).json({msg:'not found'})
    }
    res.json(product)
  })

app.get("/api/search", (req,res) => {
    const name = req.query.q
    console.log(name)
    const filtered_prod = products.filter(obj => {
        return obj.name.toLowerCase().includes(name.toLowerCase())
    })
    if (filtered_prod.length ===0){
        return res.status(200).json({msg:`not found`})
    }
 
    res.json(filtered_prod)
})

app.post("/api/products", (req,res) => {
    const new_product = {
        id : products.length+1,
        name: req.body.name,
        price : req.body.price
    }
    products.push(new_product)
    // res.status(200).json(products)
    res.sendStatus(200);
})

//PUT METHOD
app.put('/api/products/:id', (req,res) => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if (index === -1){
        return res.status(400).json({msg:`Product not found`})
    }
    const updateProduct = {
        id : products[index].id,
        name : req.body.name,
        price : req.body.price
    }
    products[index] = updateProduct;
    res.status(200).json(products)
})

//DELETE
app.delete('/api/products/:id',(req,res) => {
    const id = req.params.id;
    const index = products.findIndex(item => item.id == id);
    if (index === -1){
        return res.status(400).json({msg:`Product not found`})
    }
   products.splice(index,1)
    res.status(200).json(products)
})



// API - Application programming interface (interface that  make the cominucation more easier)
// Not every site have the application.
// MOTHODS: 
//  - GET to get data(send in url), 
//  - POST to send new data or to insert data,
//  - PUT to modify or update data,
//  - DELETE - to delete data.
// CRUD = CREATE (POST) + READ (GET) + UPDATE(PUT) + DELETE (DELETE)