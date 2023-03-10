// In this challenge you will process Form data as the user enters or selects any option of the given form.

// In the App.js You will create a stateful component with props.

// Create a function named handleChange:
// that retrieves the event.target of the inputs.
// and checks the status of the checkboxes (ie. “checked” or not). Use a ternary operator.
// Render a FormComponent that displays the form, and the value of the inputs.
// 4. On submit you will pass the entered data in the URL. This should be the output in the url:
import React from 'react';
import './App.css';
import Form from './Components/Form'
import Data from './Components/Data'

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      firstName : "",
      lastName : "",
      age : "",
      gender : "",
      destination : "",
      nutsFree : false,
      lactoseFree : false,
      vegan : false
    }
  }

  handleChange =(e) => {
    const key = e.target.name
    const value = e.target.type === "checkbox"? e.target.checked : e.target.value
    this.setState({[key]: value})
  }


  render(){

    return (
      <div className="container" onChange={(e) => this.handleChange(e)}>
        <Form />
        <Data data={this.state}/>
      </div>
    );
  }
  
}

export default App;
