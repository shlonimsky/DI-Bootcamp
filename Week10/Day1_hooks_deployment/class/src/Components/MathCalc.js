import { useReducer } from "react"


const initialState = {
    calc : 0
  }
  
  const reducer = (state,action) => {
    switch (action.type) {
      case  'add' : return {...state, calc : state.calc + action.payload}
      case  'substr' : return {...state,calc : state.calc - 1}
      case  'divide' : return {...state, calc : state.calc / 2}
      case 'multiply' : return {...state, calc : state.calc * 2}
      default : return {...state}
    }
  }


const MathCalc = (props) => {


        const [state,dispatch] = useReducer(reducer,initialState)

        return(
            <div>

                    <h2>Simple Calculator</h2>
                    <p>Result: {state.calc} </p>
                    <button onClick={() => dispatch({type : 'add',payload : 10})}>Plus 1</button>
                    <button onClick={() => dispatch({type : 'substr'})}>Minus 1</button>
                    <button onClick={() => dispatch({type : 'divide'})}>Divide by 2</button>
                    <button onClick={() => dispatch({type : 'multiply'})}>Multiply by 2</button>

            </div>
        )

}

export default MathCalc