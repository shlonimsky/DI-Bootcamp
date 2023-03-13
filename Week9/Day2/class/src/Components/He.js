import {HisName} from '../Redux/action'
import {connect} from 'react-redux'

const He = (props) => {
    return (
        <>
        <input type="text" placeholder="his name" onChange={props.hisName}/>
        <p>{props.fname}</p>
        </>
    )
}

const mapToProps = (state) => {
    return{
        fname: state.his_name
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        hisName : (e) => dispatch(HisName(e.target.value))
    }
}

export default connect(mapToProps,mapDispatchToProps)(He)

