import React from "react";

class Counter extends React.Component{
    constructor(){
        super()
        this.state={
            count : 0
        }
    }


    add = () =>{
        this.setState({count : ++this.state.count})
    } 

    render(){
        if (this.state.count>5) throw  Error('CAUNTER CRASHED')
        return(
            <>
            {this.state.count}
            <button onClick={this.add}>Add</button>
            </>
        )
    }
}

export default Counter