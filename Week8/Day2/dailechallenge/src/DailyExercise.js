import React, {Component} from "react";
import './Daily.css'

export default class VotingApp extends Component{
    constructor(){
        super()
        this.state = {
            languages : [
                {name: "Php", votes: 0},
                {name: "Python", votes: 0},
                {name: "JavaSript", votes: 0},
                {name: "Java", votes: 0}
            ]
        }
    }

    incrementScore = (lang) => {
        this.setState({votes:lang.votes++})
        console.log(lang)
    }

    render(){
        const {languages} = this.state
        return(
            <>
            <h1>Vote Your Language!</h1>
            {
                languages.map(lang => (
                <div className="btn" onClick = {() => this.incrementScore(lang)}>
                    <h3>{lang.name}</h3>
                    <h3>{lang.votes}</h3>
                </div>)
            )
            }
            </>
            
        )
            
        
    }
}