import Search from "./Search"
import {useState, useEffect} from 'react'
import TelAvivWeather from "./TelAviv"
import { useSelector } from "react-redux"
const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
const locationKey = 215854


const Main = (props) => {
// const [weather,setWeather] = useState({})
// useEffect(() => {
//     fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apikey}&metric=true`)
//     .then(res => res.json())
//     .then(data =>  {
//         console.log(data)
//         setWeather(data)})
//     .catch(err => console.log(err))
//     // console.log(weather.DailyForecasts[0])
// },[])

const arr = useSelector(state => state.cityKeys)
console.log("arr of redux",arr)
            return(
                <div style={{padding:'100px'}}>
                    {<Search />}
                    {/* { !weather.DailyForecasts ?  <p>Loading</p> : <TelAvivWeather weather={weather}/> } */}

                </div>
            )
        
    
}

export default Main