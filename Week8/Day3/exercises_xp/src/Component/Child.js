import React from "react";

class Child extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show : props.show
        }
    }
    componentWillUnmount(){
        alert("Hello World component is about to be unmounted")
    }
    render(){
        return <header>Hello World!</header>
    }
}
export default Child