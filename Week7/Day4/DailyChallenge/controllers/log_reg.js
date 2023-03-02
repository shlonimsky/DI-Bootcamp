const {checkLogin,checkRegister} = require('../modules/log_reg.js')



const sendRequestLogin = (req,res) => {
    res.json(checkLogin(req.body))
}

const sendRequestRegister = (req,res) => {
    // res.json('ok')
    console.log("req",req.body)
    res.json(checkRegister(req.body))
}

module.exports = {
    sendRequestLogin,
    sendRequestRegister
}