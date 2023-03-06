// Part I : Phone
// Create a new Class Component named Phone. Use constructor, super(), and a state object with the following properties:
// In the render method of the Phone component, display the values of the state properties. Tip: this.state.propertyname
// Import the Phone component and display it in your App.js.
// Expected output (without the grey border):
// Part II : Change the Phone
// In the Phone component create a function named changeColor that updates the color property to ‘blue’
// In the render() method of the Phone component, add a button with an onClick event that will call the changeColor function to change the color property.
// Expected output (without the grey border):when you click the button
import React,{Component} from 'react';

export default class Phone extends Component{
    constructor(){
        super()
        this.state={
            brand: "Samsung",
            model: "Galaxy S20",
            color: "black",
            year: 2020
        }
    }
    changeColor = () => {
        this.setState({color:"blue"})
    }

    render(){
        return(
            <div>
                <ul>Phone:
                    <li>brand -- {this.state.brand}</li>
                    <li>model -- {this.state.model}</li>
                    <li>color -- {this.state.color}</li>
                    <li>year -- {this.state.year}</li>
                </ul>
                <button onClick={this.changeColor}>Change the color</button>
            </div>
        )
    }

}