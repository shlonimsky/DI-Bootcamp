import './App.css';
import React from 'react';
// import List from './Components/List'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      currentTask : "",
      tasks : [],
      counter : 0
    }
  }

  getData =(e) => {
    const data =e.target.value
    if (e.keyCode === 13) {
      this.setState({currentTask : data})
      this.state.tasks.push({
        task : data, 
        id : this.state.counter,
        counter : this.state.counter++
      })
      console.log(this.state.tasks)
      e.target.value=""
    }  
  }
  deleteTask =(el) => {
    const {tasks} = this.state
    console.log(el)
    const search = tasks.find(obj => obj === el)
    console.log("obj need to remove",search)
    const ind = tasks.indexOf(search)
    console.log("index ",ind)
    tasks.splice(ind,1)
    this.setState({tasks:tasks})
  }

  render(){
    return (
      <div className="App">
        <h1>TO DO LIST</h1>
        <div>
          <input onKeyUp={(e) => this.getData(e)}/>
          <div className='container'>
            {this.state.tasks.length>0 ? (
            this.state.tasks.map(el => (
                    <p onClick={() => this.deleteTask(el)} key={el.id}>{el.task}</p>
                ))) : (<p>You don't have any tasks</p>)
              }
            </div>
        </div>
      </div>
    );
  }
  
}

export default App;
