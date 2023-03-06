import React,{Component} from 'react'

let actors = [{
        name: "Tom Cruise",
        age: 56,
      },
      {
        name: "Robert Downey Jr.",
        age: 53
    }
    ]
    
  

class Actors extends Component{
    constructor(){
        super()
        this.state = {
            fullname1 : actors[0].name,
            age1 : actors[0].age,
            fullname2 : actors[1].name,
            age2 : actors[1].age
        }
 
    }
    render(){
        return(

                <div>
        <h1>{this.state.fullname1} is {this.state.age1}</h1>
        <h1>{this.state.fullname2} is {this.state.age2}</h1>

        </div>

        )
    }
}
export default Actors