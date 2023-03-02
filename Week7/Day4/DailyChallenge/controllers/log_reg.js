const {checkLogin,checkRegister} = require('../modules/log_reg.js')



const sendRequestLogin = (req,res) => {
    res.json(checkLogin(req.body))
}

const sendRequestRegister = (req,res) => {
    res.status(200).json(checkRegister(eq.body))
}

module.exports = {
    sendRequestLogin,
    sendRequestRegister
}