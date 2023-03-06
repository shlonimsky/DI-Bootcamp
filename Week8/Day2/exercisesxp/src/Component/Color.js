// Create a new Class Component named Color. The state object of this component contains a property favoriteColor which value is “red”.
// Output the value in a header tag.
// Note : The componentDidMount() method is called after the component is rendered.
// Use the componentDidMount() method to call a timeout function, that changes the state of the favoriteColor property to “yellow” after 5 seconds.
// Note: The render() method is called when a component gets updated. It re-renders the DOM, with the new changes.
// Create a button that when clicked on, calls a function that changes the value of the favoriteColor property to “blue”.
import React,{Component} from 'react'

export default class Colour extends Component{
    constructor(){
        super()
        this.state ={
            favoriteColour : "red"
        }
    }
    changeToBlue =() => {
        this.setState({favoriteColour: "blue"})
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({favoriteColour : "yellow"}),5000)
    }
    render (){

        return (
            <header>
                <h1>Exercise 3. My favourite colour is {this.state.favoriteColour}</h1>
                <button onClick = {this.changeToBlue}>Change to blue</button>
            </header>
        )
    }
}