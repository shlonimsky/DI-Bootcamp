import React from 'react' //this needs for classes
// State is similar to props, it send data from component to component

class Car extends React.Component{
constructor(props){
    super(props)
    this.state={
        color : 'red',
        brand : 'Ford',
        model : 'Mustang',
        year : 1964
    }
}
// changeColor =() => {
//     this.setState({color: 'blue'})
// }
changeRandomColor =() =>{
    let {colors} = this.props
    let randomColor = colors[Math.floor(Math.random()*colors.length)]
    this.setState({color:randomColor})
}
render(){
    return (
    <>
    <h1>My {this.state.brand} {this.state.model}</h1>
    <h2>is a {this.state.color} car </h2>
    <p>From {this.state.year}</p>
    <button type="button" onClick={this.changeRandomColor}>Change color</button>
    <h2 style={{backgroundColor: this.state.color}} >is a  {this.state.color} car </h2>

    </>
    )
}
}

export default Car