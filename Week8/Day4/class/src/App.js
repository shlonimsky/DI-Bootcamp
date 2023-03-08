// import React from "react";
import Counter from "./Components/Counter"
import ErrorBoundary from "./ErrorBoundary"
import CounterHook from "./Components/CounterHook"
// import Parent from './Parent'
// import Child from './Child'

import './App.css'
const App = () => {
    return(
        <div className="App">
            <div className="App-header">
                {/* <ErrorBoundary>
                    <Counter />
                    <Counter />

                </ErrorBoundary>
                <Counter /> */}

               <CounterHook />
                {/* <Parent auth="admin">
                    <Child />
                </Parent> */}
            </div>
        </div>
    )
}

export default App