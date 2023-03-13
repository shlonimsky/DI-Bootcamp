import {connect} from 'react-redux'
import {HerName} from '../Redux/action'
const She = (props) => {
    return (
        <input type='text' placeholder="her name" onChange={props.herName}/>
    )
}


const mapDispatchToProps = (dispatch) => {
    return {
        herName : (e) => dispatch(HerName(e.target.value))
    }
}

export default connect(null,mapDispatchToProps)(She)
