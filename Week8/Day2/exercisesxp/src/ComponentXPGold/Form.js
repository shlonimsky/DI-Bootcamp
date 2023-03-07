// Create a new Class Component named Forms and import if in the App component.
// In the render() method of the Forms component, create a form that allows the user to enter their name. 
// Remember to add the name attribute to the input field.

import React,{Component} from "react";

export default class Form extends Component{
    constructor(){
        super()
        this.state = {
            username : ""
        }
    }
    getUsername =(e) => {
        if (e.keyCode === 13) {
            e.preventDefault()
            this.setState({username:e.target.username.value})
        }
    }

    render(){
        let header =this.state.username
        return(
            <form>
                <h1>Exercises XP GOLD</h1>
                <h1>Hello {this.state.username}</h1>
                <input name="username" onKeyDown={()=>this.getUsername(Event)}></input>
                <p>{header}</p>
            </form>
        )
    }
}