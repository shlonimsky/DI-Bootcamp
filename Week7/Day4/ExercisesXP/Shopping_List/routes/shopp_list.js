const express = require('express')
const {_getItems,_addItem} = require('../controllers/shopp_list.js')

const router = express.Router()
router.get('/', _getItems)
router.post('/', _addItem)

module.exports = router;
