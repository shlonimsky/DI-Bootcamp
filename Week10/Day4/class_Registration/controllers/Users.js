import Users from '../models/UsersModel.js';
import bcrypt from 'bcrypt'; //to crypt data
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()


export const getUsers = async (req,res) => {
    try{
        const users = await Users.findAll({
            //get all users from db
            attributes : ['id','username']
        });

        res.json(users)

    } catch (err){

        res.status(404).json({msg : 'not found'})
    }
}

export const login = async (req,res) => {
    try{
        const user = await Users.findAll({
            where:{
                //this username is the same as in db
                username : req.body.username
            }
        })
        const match = await bcrypt.compare(req.body.password,user[0].password)
        if(!match) return res.status(400).json({msg : 'Wrong password'})

        const userid = user[0].id;
        const username = user[0].username;
        const accessToken = jwt.sign({userid,username},process.env.ACCESS_TOKEN_SECRET,{
            expiresIn : '60s' //this we will put in http session
        })

        res.cookie('accessToken',accessToken,{
            httpOnly : true,
            maxAge : 60*1000
        })

        // req.coookis.accessToken... the name is string from line 23 (res.cookie)
        res.json({accessToken})

    } catch (err){
        console.log(err)
        res.status(404).json({msg : "username not found"})
    }
}

export const register = async (req,res) => {
    const {username,password} = req.body;
    const salt = await bcrypt.genSalt();
    const hashPasword = await bcrypt.hash(password,salt);

    try{
        await Users.create({
            //columns from DB
            username : username,
            password : hashPasword
        })
        res.json({msg : 'Register went Succesful!'})
    } catch (err){
        console.log(err)
        res.status(403).json({msq : 'username allready exist!'})
    }
}

