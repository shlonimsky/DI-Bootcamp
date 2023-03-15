const express = require('express');
const {_getAllProducts,
      _getProductById,
      _insertProduct,
      _updateProduct,
      _deleteProduct,
      _searchProduct
      } = require('../controllers/products.js');

const router = express.Router();
//search product according to the name
router.get('/search', _searchProduct)
router.get('/', _getAllProducts);
router.get('/:id', _getProductById)


router.post('/', _insertProduct);
router.put('/:id', _updateProduct)
router.delete('/:id', _deleteProduct)



module.exports = router
