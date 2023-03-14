import React from "react";
import {connect} from 'react-redux'
import {FindRobot} from '../Redux/action'

class Search extends React.Component {
    constructor (props){
        super(props)
    }



    render(){
        return(
            <div>
                <input type="text" placeholder="search" onChange={(e) => this.props.search(e.target.value)}/>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        search : (e) => dispatch(FindRobot(e))
    }
}

export default connect(null,mapDispatchToProps)(Search)