import './App.css';
import  {connect} from 'react-redux'
import {ageUp,ageDown} from './Redux/actions'
 
function App(props) {
  return (
    <div className="App App-header">
      <p>Age : {props.age}</p>
      <button onClick={props.incr}>Age Up</button>
      <button onClick={props.decr}>Age Down</button>

    </div>
  );
}

const mapStateToProps = (state) => {
  return{
    age : state.age
  }
}

const mapDispachToProps = (dispatch) => {
  return{
    incr : () => dispatch(ageUp()),
    decr : () => dispatch(ageDown())

  }
}

export default connect(mapStateToProps,mapDispachToProps)(App);
