import React from "react";
//we create this file in src

class ErrorBoundary extends React.Component{
    constructor(props){
        super()
        this.state={
            error : null
,
errorInfo:null        }
    }

    componentDidCatch(error,errorInfo){
        console.log("error => ",error)
        console.log("errorInfo => ",errorInfo)
    this.setState({error:error, errorInfo:errorInfo})
    }
    

    render(){
        if (this.state.error) {
            return(
                <div>
                    Something went wrong... we are working tp fix this problem
                </div>
            )
        }
        return(
            this.props.children
        )
    }
}

export default ErrorBoundary