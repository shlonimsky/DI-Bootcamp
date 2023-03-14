import {connect} from 'react-redux'
import {increase,decrease} from '../Redux/actions'

const Counter = (props) => {

    const incrementIfOdd = () => {
        if (props.c % 2 !== 0 && props.add()) return
    }


    return (
        <div>
            <button onClick={props.minus}>-</button>
            <div>{props.c}</div>
            <button onClick={props.add}>+</button>
            <button onClick={incrementIfOdd}>add if odd</button>
            <button onClick={() => setTimeout(()=>props.add(),1000)}>set Timer</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return{
        c : state.counter
    }
}
const mapDispatchToProps = (dispatch) => {
    return{
        minus : () => dispatch(decrease()),
        add : () => dispatch(increase())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter)