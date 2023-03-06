
// In App.js create an object const carinfo = {name: "Ford", model: "Mustang"};
// In your React app create a new folder in the src path, name it Components. It should contain a Class Component named Car.js.
// In the Car.js component render a header with the carInfo model, for example This car is <model>.
// Import the Car.js component to the App.js.

// Part II : A constructor function
// Create a constructor function in the Car component, and add a color property in the state.
// Display the color property in the render() method, for example This car is <color> <model>.import React,{Component} from "react";
import React,{Component} from 'react'
import Garage from "./Garage";

export default class Car extends Component{
    constructor(props){
        super(props)
        this.state ={
            name : props.car.name,
            model : props.car.model,
            color : props.car.color
        }
    }
    render(){
        return(
            <>
                <header>
                    <Garage size = {"small"}/>
                    <p>Part 1: This is a {this.state.name} {this.state.model} car!</p>
                    <p>Part 2: This car is {this.state.color}</p>
                </header>
            </>
        )
    }
}