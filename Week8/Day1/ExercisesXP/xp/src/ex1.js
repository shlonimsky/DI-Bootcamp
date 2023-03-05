
// Exercise 1 : No JSX
// Create an element without JSX and render it. The element should be an <h1> with 
// the content “I do not use JSX”

import React from "react";

const WithoutJSX = () =>{
    return React.createElement('h1',null, "I do not use JSX")
} 

export default WithoutJSX
