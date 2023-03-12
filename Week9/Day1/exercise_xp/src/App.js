import { connect } from 'react-redux';
import {Increase,Decrease} from './reducers/actions/action'
import './App.css';


function App(props) {
  
  return (
    <div className="App">
        <button onClick={props.increase_value}>+</button>
        <p>{props.counter}</p>
        <button onClick={props.decrease_value}>-</button>
    </div>
  );
}

const mapStateToPtops = (state) => {
  return{
    counter : state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    increase_value : () => dispatch(Increase()),
    decrease_value : () => dispatch(Decrease())
  }
}

export default connect(mapStateToPtops,mapDispatchToProps)(App);
