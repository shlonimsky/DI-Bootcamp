import React,{Component} from "react";

export default class ErrorBoundary extends Component{
    constructor(props){
        super()
        this.state = {
            hasError : false
        }

    }

    componentDidCatch(error,errorInfo){
        this.setState({hasError: true})
    }

    render(){
        if (this.state.hasError){
        return(
            <div>Oooops, something went wrong. We are working on this problem</div>
        )}
        return this.props.children
    }
}