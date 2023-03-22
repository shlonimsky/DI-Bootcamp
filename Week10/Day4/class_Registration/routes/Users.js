import express from 'express'
import { register, login, getUsers } from '../controllers/Users.js';
import { VerifyToken } from '../moddlewares/verifytoken.js';
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.get('/users',VerifyToken, getUsers);
router.get('/token',VerifyToken, (req,res) => {
    res.status(200).json({msg:'ok'})
});


export default router