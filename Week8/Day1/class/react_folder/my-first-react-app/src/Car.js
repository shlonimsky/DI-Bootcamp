import React from "react"
import './Car.css'

const Car =(props) => {

        return(
        //  <h1> Hi, I am a {props.carBrand} Car! My name is {props.name}</h1>
        props.cars.map(car=>(
            <ul className="box">
                <li>{car.name}</li>
                <li>{car.year}</li>
                <li>{car.origin}</li>
            </ul>
        ))
        )

    }

export default Car
