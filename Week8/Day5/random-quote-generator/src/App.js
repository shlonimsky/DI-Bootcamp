// You will display in a box :
// a random quote as a header,
// below the author of the quote,
// and a button that when clicked on, calls a function that:
// generates a new quote from the array of objects and replaces the current one. Make sure to not display the same quote twice.
// changes randomly the color of the background, the color of the header quote and the color of the button.

import quotesDB from './Components/QuotesDatabase'
// import './App.css';
import React from 'react';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      quote : quotesDB[0].quote,
      author : quotesDB[0].author,
      r : 100,
      g : 100,
      b : 100

    }
    this.arr = []
  }
  

  GetRandomQuotes=()=>{
    if (quotesDB.length === this.arr.length) this.arr = []

    const random = Math.floor(Math.random()*quotesDB.length)

    if (this.arr.includes(random)) return this.GetRandomQuotes()
    
    else this.arr.push(random)
    this.setState({quote: quotesDB[random].quote})
    this.setState({author : quotesDB[random].author})
    this.GetRandomColor()
  }

  GetRandomColor = () => {
    const random =  
    this.setState({
      r: Math.floor(Math.random() * 255),
      g : Math.floor(Math.random() * 255),
      b : Math.floor(Math.random() * 255)
    })
  }

  render(){
   const {quote,author,r,g,b} = this.state
    return (
      <div >
        <header className='App'>
          <div style={{backgroundColor :`rgb(${r},${g},${b})`}}>
            <h1 style={{color : 'black'}}>{quote}</h1>
            <p style={{color : 'black'}}>{author}</p>
            <button onClick ={this.GetRandomQuotes}>new quote</button>
          </div>
        </header>
      </div>
    )
  }
 
}

export default App;
