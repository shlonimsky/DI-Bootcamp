import {connect} from 'react-redux'
import { GetResult } from '../Redux/action'
import React from 'react'

class Button extends React.Component {
    constructor(props){
        super(props)
    }

    getFetchRes = (props) => {
        console.log(this.props)
        fetch(`https://love-calculator.p.rapidapi.com/getPercentage?sname=${this.props.she}&fname=${this.props.he}`,{
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '2bd7035880msh60d3b92b20b1861p19998cjsncc86319eaf66',
                'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
            }
        })
        .then(res => res.json())
        .then(res => { 
            const {percentage,result} = res
            this.props.res({percentage,result})
        })
    }

    render ( ){
        return (
            <button onClick={this.getFetchRes}>Show results</button>
        )
    }
}

const mapStateToPtops = (state) => {
    return {
        he : state.his_name,
        she : state.her_name
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        res : (obj) => dispatch(GetResult(obj)) 
    }
}

export default connect(mapStateToPtops,mapDispatchToProps)(Button)