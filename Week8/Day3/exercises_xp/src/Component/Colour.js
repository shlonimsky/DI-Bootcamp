// Exercise 2 : Lifecycle
// For this exercise, you need to reuse the Exercise XP 4 of yesterday
// Part I : shouldComponentUpdate
// Use the shouldComponentUpdate() method and set it to return true.
// If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor 
// property to “blue”, (even after clicking on the button)
// Part II: componentDidUpdate
// When the component is mounting, it will be rendered with the favorite color “red”.

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
        console.log("in mount")

        setTimeout(() => this.setState({favoriteColour : "yellow"}),5000)
    }
    
    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(prevProps,prevState,snapShot){
        console.log("in update")
        return(
            <div>My Favorite color is {this.state.favoriteColour} (didUpdate func)</div>
        )
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        console.log("in snapshot")
        console.log(prevState)

        if (prevState.favoriteColour !== this.state.favoriteColour)
        return prevState
        else return null
    }

    render (){
        console.log("in render")

        return (
            <div>
                <h1> My favourite colour is {this.state.favoriteColour}</h1>
                <button onClick = {this.changeToBlue}>Change to blue</button>
            </div>
        )
    }
}