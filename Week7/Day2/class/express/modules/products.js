const {db} = require('../config/db.js')
// functions to query from db
const getAllProducts =() => {
    // this will return the promise 
    return db('products')
    .select('id','name','price')
    .orderBy('name');
}

const getProductById = (pid) => {
    return db('products')
    .select('id','name','price')
    .where({id:pid});
}

const insertProduct = (product) => {
    return db('products')
    .insert(product)
    .returning('*');
}

const updateProduct = (id,product) => {
    return db('products')
    .update(product)
    .where({id:id})
    .returning('*');
}

const deleteProduct = (id) => {
    return db('products')
    .delete()
    .where({id})
    .returning('*');
}

module.exports={
    getAllProducts,
    getProductById,
    insertProduct,
    updateProduct,
    deleteProduct
}