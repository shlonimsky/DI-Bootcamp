import {useState,useEffect} from 'react'
//useState return a sate as a setstate func
const CounterHook = (props) => {


    const [count,setState] = useState(0)
    const [email,setEmail] = useState('')
    

//     useEffect(() => {
// setState(count+1)
//     },[email]) //without [] - call this function like Did.Mount
     //[]-it is like Did.Update

     const[users,setUsers] = useState([])
     useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
        .catch(err => console.log(err))

     },[])


    return(


        <>
        count: {count}
        <input type="text" onChange={(e)=> setEmail(e.target.value) } />{email}
        <button onClick={() => setState(count+1)}>Add</button>
        {users.map( item => {return(
            item
        )})}
        </>
    )
}

export default CounterHook