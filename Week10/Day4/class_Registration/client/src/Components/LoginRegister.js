import { useState, useContext, useEffect } from "react"
import {Link, useNavigate} from 'react-router-dom';
import  Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from 'axios';
import { AppContext } from "../App";



const LoginRegister = ({title}) => {
    const [username,setUsername] = useState('');
    const  [password, setPassword] = useState('');
    const [msg, setMsg] = useState('');
    const navigate=useNavigate();
    const{setAccessToken} = useContext(AppContext)

    useEffect(() => {
        setMsg('')
    },[title])

const handleAction = async (id) => {
    if (id === 'Register'){
        try{
            let response = await axios.post('/register',{
                username,password
            })
            console.log(response.data)
            setMsg(response.data.msg)
            navigate('/login')
        } catch (err){
            console.log(err.response.data)
            setMsg(err.response.data.msg)
        }
    }
    else if (id === "Login"){
        try{
            let response = await axios.post('/login',{
                username,password
            })
            console.log(response.data)
            setAccessToken(response.data)
            setMsg(response.data.msg)
            navigate('/')
        } catch (err){
            console.log(err.response.data)
            setMsg(err.response.data.msg)
        }
    }
}

    return(
        <div>
            <h1>{title}</h1>
            <Box component="form" sx={{m:1}} noValidate='off'>
                <TextField sx={{m:1}} id='username' label='Enter username' variant="outlined"
                onChange={(e) => setUsername(e.target.value)} />
                <TextField sx={{m:1}} id='password' label='Enter password' variant="outlined"
                onChange={(e) => setPassword(e.target.value)} />
                
            </Box>
            <Button variant="contained" onClick={() => handleAction(title)}>{title}</Button>
            <div>
                <p>{msg}</p>
            </div>
            <div>
                {
                title == 'Register' 
                ? <Link to='/login'>Login</Link> 
                : <Link to='/register'>Register</Link>
                }
            </div>
        </div>

    )
}

export default LoginRegister