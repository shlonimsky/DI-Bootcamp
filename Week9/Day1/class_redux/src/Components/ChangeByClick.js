import { connect, Connect } from "react-redux"
import {swithchProps} from '../Redux/actions';

const ChangeByClick =(props) => {
    return(
        <div>
            <button onClick={() => props.dispatch(swithchProps())}>Chanhge Prop One too Prop Two</button>
        </div>
    )
}



// const mapDispatchToProps = (dispatch) => {
//     return {
//         switchProp : () => dispatch(swithchProps())
//     }
// }
export default connect()(ChangeByClick)

// dispatch({type:'SWITCH_PROPS'})