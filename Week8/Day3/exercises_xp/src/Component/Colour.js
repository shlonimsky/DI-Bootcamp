// Exercise 2 : Lifecycle
// For this exercise, you need to reuse the Exercise XP 4 of yesterday
// Part I : shouldComponentUpdate
// Use the shouldComponentUpdate() method and set it to return true.
// If you set the return value of the shouldComponentUpdate() method to false, you won’t be able to change the value of the favoriteColor 
// property to “blue”, (even after clicking on the button)
// Part II: componentDidUpdate
// When the component is mounting, it will be rendered with the favorite color “red”.

import React,{Component} from 'react'
import Child from './Child'

export default class Colour extends Component{
    constructor(){
        super()
        this.state ={
            favoriteColour : "red",
            message : "",
            show : true
        }
    }
    changeToBlue =() => {
        this.setState({favoriteColour: "blue"})
    }

    componentDidMount = () => {
        setTimeout(() => this.setState({favoriteColour : "yellow"}),5000)
    }
    
    shouldComponentUpdate(){
        return true
    }

    componentDidUpdate(prevProps,prevState,snapShot){
       if (snapShot){
        this.setState({message: `Before the update the favoutite coloure was ${prevState.favoriteColour}. After update it is ${this.state.favoriteColour}`})
       }
        
    }
    getSnapshotBeforeUpdate(prevProps,prevState){
        if (prevState.favoriteColour !== this.state.favoriteColour) return true
        else return null
    }
    delete =() => {
        console.log('in delete')
        this.setState({show : !this.state.show})
    }
   

    render (){
        return (
            <div>
                <p>Exercise 2 : Lifecycle #1</p>
                <h1> My favourite colour is {this.state.favoriteColour}</h1>
                <button onClick = {this.changeToBlue}>Change to blue</button>
                <p>{this.state.message}</p>
                <p>Exercise 3 : Lifecycle #2</p>
                 <div>{this.state.show? (<Child />) : ""}</div>
                 <button onClick={this.delete}>delete header</button>
            </div>
        )
    }
}