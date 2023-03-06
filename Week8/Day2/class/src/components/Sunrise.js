import React,{Component} from 'react'

export default class Sunrise extends Component{
    constructor(props){
        super(props)
            this.state = {
                country : 'Israel',
                city : 'Tel Aviv'
            }
        
    }

    componentDidMount(){
        fetch('https://api.sunrise-sunset.org/json?lat=32.0853&lng=34.7818')
        .then(res => res.json())
        .then(res1 => this.setState({hourSunrise : res1.results.sunrise}))
        .catch(err => console.log("Error occured! ",err))
    }

    render(){
        let {country,city,hourSunrise} = this.state
        return(
            <>
<h1>In {country} in {city} the sunrise will be at {hourSunrise} </h1>
            </>
        )
    }
}



// export default Sunrise