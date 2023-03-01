const express = require('express');
const {_getAllProducts, _getProductById, _insertProduct,_updateProduct,_deleteProduct} = require('../controllers/products.js')

const router = express.Router()
// it will work in urtl/api/products/
//because we putted this path in the server
router.get('/',_getAllProducts)
router.get('/:id',_getProductById)
router.post('/',_insertProduct)
router.put('/:id', _updateProduct)
router.delete('/:id', _deleteProduct)

//we can don't use the {} because for each query it will be each other router
module.exports = router