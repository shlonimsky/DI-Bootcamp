// Create a new Class component named Events.
// Create an arrow function called clickMe. It should alert the string ‘I was clicked’.
// In the render() method, create a button that when clicked on, calls the clickMe function.
// Tip: Use event handler.
// Where should you create the clickMe function ?
// Expected output (without the grey border):

// Part II:
// In the render() method of the Events Class component, create an input tag that has an 
// onKeyPress event handler, that listens to a function called handleKeyPress.
// When you type something in the input field and press the ‘Enter key’, the handleKeyPress 
// function will check if the ‘Enter key’ was pressed and will alert a message with the input text value
// Part III:
// In the Events Class component, declare a property in the state object named isToggleOn and set it to true.
// In the render() method, create a button that has an onClick event that will switch the state property between ‘ON’ and ‘OFF’
// Create a function that will be called by the onClick event handler. In the function you should toggle the value of the isToggleOn property.

import React,{Component} from "react";

export default class Events extends Component{
    constructor(){
        super()
        this.state = {
            isToggleOn : true
        }
    }

     clickMe =() => {
        alert('I was clicked')
    }
    handleKeyPress =(e) => {
        if (e.keyCode===13) alert(e.target.value)
    }
    switchProperty = () => {
        this.setState({isToggleOn:!this.state.isToggleOn})
    }
    render(){
        return (
        <div>
            <input placeholder="press enter" onKeyDown={this.handleKeyPress}></input>
            <button onClick={this.clickMe}>Click Me</button>
            <button onClick={this.switchProperty}>{this.state.isToggleOn? "ON" : "OFF"}</button>
        </div>
        )
    }
}




