import './App.css';
import React,{Component} from 'react'

class App extends Component{
  constructor(){
    super()
    this.state = {
      dataGet : "",
      dataPost : ""
    }
  }

  sendRequest = async (e) => {
    e.preventDefault()
    console.log(e.target.word.value)
    const req = await fetch("http://localhost:5000/api/word",{
      method: "POST",
      mode: "cors",
      headers : {"Content-Type": "application/json"},
      body : JSON.stringify({message:e.target.word.value})
})
    const res = await req.json()
    this.setState({dataPost : res.message})  
  }

componentDidMount(){
  fetch("http://localhost:5000/api/hello")
  .then(res => res.json())
  .then(data => this.setState({data : data}))
  .catch(err => console.log(err))
}

  render(){
    return (
      <div className="App-header">
        <header className='App'>
        {this.state.data}
        </header>
        <form onSubmit={(e) => this.sendRequest(e)}>
          <input type="text" name='word' placeholder='enter something'/>
          <button type='submit'>Send request to server</button>
        </form>
        <p>{this.state.dataPost}</p>
      </div>
    );
  }
}

export default App;
