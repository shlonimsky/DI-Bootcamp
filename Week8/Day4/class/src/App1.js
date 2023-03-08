

  import './App.css';
import React  from 'react'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      email : ""
      // username : "",
      // color : "",
      // onoff : ""
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()

    console.log(this.state.email)
  }

  handleChange = (e) => {
    // const value = e.target.type == "checkbox" ? e.target.checked : e.target.value;
    this.setState({[e.target.name]:e.target.value})
  }

    render(){
        return(
            <div>
              <h1>FORM</h1>
              <form onSubmit={this.handleSubmit}>
                  <input type="text" placeholder='email' name="email" onChange={this.handleChange}/>
                  {/* <input type="text" placeholder='username' name='username' onChange={this.handleChange}/>
                  <input type="textarea" onChange={this.handleChange} name="message"/>
                  <select onChange={this.handleChange} name="color">
                    <option value="">Choose a color</option>
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                  </select>
                  On/Off<input type="checkbox" name='onoff' onChange={this.handleChange}/> */}
                  <input type="submit" value="Submit"/>
              </form>
            </div>
        )
    }
}


export default App;
