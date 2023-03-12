import './App.css';
import React from 'react';
import { connect } from 'react-redux';
import Child from './Components/Child'
import {changePropOne} from './Redux/actions'

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      property_one : "text one",
      input : ""
    }
  }

  handleChangee = (e) => {
    this.setState({property_one : e.target.value})
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <h1>Simple Redux Example</h1>
          <h1>{this.state.property_one}</h1>
          <div>{this.props.a}</div>
          <input type="text" onChange={(e) => this.handleChangee(e)} />
          <input type="text" onChange={this.props.changeProp1} placeholder="changee thee store"/>
          <Child prop_one = {this.state.property_one} />

        </header>
      </div>
    );
  }
 
}

const mapStateToProps = (state) => {
  return {
    a : state.property_one //from reducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeProp1 : (e) => dispatch(changePropOne(e.target.value))
  }
}
// we are maping props mapStateToProps to a props in our component
export default connect(mapStateToProps,mapDispatchToProps)(App);
