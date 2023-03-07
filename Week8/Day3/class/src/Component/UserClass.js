import React from "react";

class UserClass extends React.Component {
    constructor(){
        super()
        this.state ={
            
        }

    }

    render(){
        const style_rob = {
            display:'inlineblock', padding:'10px', margin: '10px', border:"solid white"
        }
        return( //ALWAYS NEED TO RETURN
             <div style = {style_rob}>
                <h1>{this.props.name}</h1>
                <p>{this.props.email}</p>
                <h5>{this.props.username}</h5>
            </div>
    )
    }
}

export default UserClass