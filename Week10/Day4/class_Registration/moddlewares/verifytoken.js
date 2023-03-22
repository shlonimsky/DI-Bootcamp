import jwt from 'jsonwebtoken';
import Users from '../models/UsersModel.js';
import dotenv from 'dotenv'
dotenv.config()

export const VerifyToken = (req,res,next) => {
    //or from the cookies or from the headers
    const accessToken = req.cookies.accessToken || req.headers['x-acces-Token']

    if( !accessToken ) return res.status(401).json({msg : 'permission denied!'})
    jwt.verify(accessToken,process.env.ACCESS_TOKEN_SECRET,  async (err,decoded) => {
        
        if ( err) return res.status(403).json({msg : 'verify token failed!'})

        try{
            const user = await Users.findAll({
                where : {
                    username : decoded.username
                }
            })

            next()

        } catch (err){
            res.status(403).json({msg:'werify user failed'})
        }





    })
}