import './App.css';
import React from 'react';
import ErrorBoundary from './ErrorBoundary'
import Colour from './Component/Colour'

class BuggyCounter extends React.Component{
  constructor(){
    super()
    this.state = {
      counter : 0
    }
  }

  handleClick = () => {
    console.log("click")
    this.setState({counter : ++this.state.counter})
  }

  render(){
    if(this.state.counter === 5) throw Error ("OOOOPS, I crashed!")
    return(
      <div>
        <h1>{this.state.counter}</h1>
      <button onClick = {this.handleClick}>add</button>
      </div>
    )
    }
}






function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Exercise 1</p>
        <ErrorBoundary >
          <BuggyCounter />
          <BuggyCounter />
        </ErrorBoundary>

        <ErrorBoundary >
          <BuggyCounter />
        </ErrorBoundary>  

        <ErrorBoundary >
          <BuggyCounter />
        </ErrorBoundary>
        <BuggyCounter />
        <p>Exercise 2</p>
        <Colour />



      </header>
    </div>
  );
}

export default App;
