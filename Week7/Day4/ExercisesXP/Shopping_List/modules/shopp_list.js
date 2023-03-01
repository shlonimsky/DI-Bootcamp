const {db} = require('../config/db.js')

const getItems = () => {
    return db('shopping_list')
    .select('item','amount')
}

const addItem = (obj) => {
    return db('shopping_list')
    .insert(obj)
    .returning('*')
}

module.exports = {
    addItem,
    getItems
}