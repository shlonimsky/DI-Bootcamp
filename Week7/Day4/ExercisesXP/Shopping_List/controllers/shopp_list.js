const {getItems,addItem} = require('../modules/shopp_list.js');

const _getItems = (req,res) => {
  getItems()
    .then(item => {
       return res.json(item)
    })
    .catch(err => console.log(err));
}


const _addItem = (req,res) => {
    addItem(req.body)
    .then(item => res.json(item))
    .catch(err => console.log(err))
}

module.exports = {
    _getItems,
    _addItem
}