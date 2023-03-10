import React,{Component} from "react"

class NavBar extends Component{
    constructor(props){
        super()
        this.state = {
            score : props.score,
            total : props.total
        }
    }
  
    componentDidUpdate(prevProps){
        if (prevProps.score !== this.props.score) this.setState({score : this.props.score})
        if (prevProps.total !== this.props.total) this.setState({total : this.props.total})
    }


    render(){
        return(
            <nav>
                <div>
                    <h1>SUPERHEROES MEMORY GAME</h1>
                    <div className="flex_row">
                        <h3>Score : {this.state.score}</h3>
                        <h3>Total Score : {this.state.total}</h3>
                    </div>
                </div>
                <div>
                    Get points by clicking on an image but don't click on any more than twice
                </div>
            </nav>
        )
    }
    
}

export default NavBar