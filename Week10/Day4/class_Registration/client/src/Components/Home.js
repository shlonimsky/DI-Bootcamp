import {useState, useEffect, useContext} from 'react'
import { AppContext } from '../App'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import jwt_decode from 'jwt-decode';


const Home = (props) => {
    const [users,setUsers] = useState([]);
    const [msg, setMsg] = useState('')

    useEffect(()=>{
        const getUsers = async () => {
            try{
                const response = await axios.get('/users')
                setUsers(response.data)
                setMsg('')
            }catch (err){
                console.log(err.response.data)
                setMsg(err.response.data.msg)
            }
        }
        getUsers()
    },[])


    return(
        <div>
            <h1>Home</h1>
            <p>{msg}</p>
            {
                users.map(user => {
                    return(
                        <div key={user.id}>
                            {user.id} {user.username}
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Home