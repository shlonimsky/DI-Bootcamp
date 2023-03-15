import {connect} from 'react-redux'
import React from 'react'
import { getRobots } from '../Redux/actions'

const Cards = (props) => {

    // const robotsAPI1 = props.getRob()
    // const robotsAPI2 = props.robs

    // console.log("robotsAPI",robotsAPI1)
    const Rob = props.getRob()
    // console.log(props.robs)
    return (
        <>Hell
        {Rob.map(item => { console.log(item)
        }
        )}
        </>
        
    )
}

const mapStateToProps =(state) => {
    return {
        robs : state.robots
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getRob : () => dispatch(getRobots())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cards)