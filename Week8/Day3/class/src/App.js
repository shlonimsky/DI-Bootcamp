import UserClass from './Component/UserClass'
import './App.css';
// import robots from './robots.json'
import React from 'react';
import SearchBox from './Component/SearchBox'

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users_arr :[],
      color :"yellow",
      search : ""
    }
    console.log('constructor')
  }
componentDidMount(){
  
  console.log('setState in ComponentDidMount')
  setTimeout(() => {
    this.setState({color:'pink'})
  },3000)
}  

showUsers =() => {
    // this.setState({users_arr:robots})
    fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res1 => this.setState({users_arr:res1}))
  .catch(err => console.log(err))

}

findRobot =(e) => {
  this.setState({search:e.target.value.toLowerCase()},() => console.log(this.state.search)) 
  //setState is async, so to see the value need to use caalvack function
  // this.state.color.users_arr.find(user => user.name)
}
render(){
  console.log('render')
  const filtered = this.state.users_arr.filter(item => {
    return  item.name.toLowerCase().includes(this.state.search)
  })
  return (
    <div className="App" >
      <header className="App-header" style={{backgroundColor : this.state.color}}>
      <SearchBox handleChange ={this.findRobot} />

        
        <button onClick ={() => this.showUsers(Event)}>Show Users</button>
          {filtered.map((rob,i) => {
            // if (rob.name.toLowerCase().includes(this.state.search))
            return (<UserClass key = {rob.id} name = {rob.name} email ={rob.email} username ={rob.username}/>)
          })}
      </header>
    </div>
  );
}  
}

export default App;
