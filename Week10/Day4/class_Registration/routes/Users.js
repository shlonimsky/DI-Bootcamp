import express from 'express'
import { register, login, getUsers } from '../controllers/Users.js';
import { VerifyToken } from '../moddlewares/verifytoken.js';
const router = express.Router();
import jwt from 'jsonwebtoken';

router.post('/register', register);
router.post('/login', login);
router.get('/users',VerifyToken, getUsers);
router.get('/token',VerifyToken, (req,res) => {
//to verify token and refresh the token
        const userid = req.id;
        const username = req.username;
        const accessToken = jwt.sign({userid,username},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn : '60s' //this we will put in http session
        })

        res.cookie('accessToken',accessToken,{
            httpOnly : true,
            maxAge : 60*1000
        })
    
    res.status(200).json({msg:'ok'})
});


export default router