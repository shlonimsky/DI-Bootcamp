import './App.css';

// import TransactionForm from './Components/TransactionForm';
// import TransactionList from './Components/TransactionList'
import {useState,useEffect} from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {getUsers} from './Redux/action'
function App() {
  // const [users,setUsers] = useState([])
  const users = useSelector(state => state.users)
  const dispatch = useDispatch()
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => {
      // setUsers(data)
dispatch(getUsers(data))
    })
  },[])
  return (
    <div className="App">
      {
        users.map((item,i) => {
          return (
            <div key={i}>
              {item.name}
            </div>
          )
        })
      }
    </div>
  );
}

export default App;
