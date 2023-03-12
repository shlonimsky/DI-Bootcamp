import {connect} from 'react-redux'
import {changePropTwo} from '../Redux/actions';
import ChangeByClick from './ChangeByClick'

const Child = (props) => {


    return (
        <>Child
        <div>Prop parent : {props.prop_one}</div>
        <div>Prop1: {props.b}</div>
        <div>Prop2: {props.c}</div>
        <input type="text" onChange = {props.changeProp2}/>

        <p>Another Example</p>
        <ChangeByClick/>
        </>
    )
}

//to take this valuee from the storee and not from parent
const mapStateToProps = (state) => {
    return {
        b : state.property_one,
        c : state.property_two
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        changeProp2 : (e) => dispatch(changePropTwo(e.target.value)),
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Child)