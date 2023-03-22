import Search from "./Search"
import Favourites from "./Favourites"
import {useState, useEffect} from 'react'
import TelAvivWeather from "./TelAviv"
import { useSelector } from "react-redux"
import Forecasts5Days from "./Forecast5Days"
// const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
const apikey = 'N5E41cZSreLev35wgGiXwM8VBAViY0Wm' //ashl

const locationKey = 215854


const Main = (props) => {
const [weather,setWeather] = useState({})
useEffect(() => {
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKey}?apikey=${apikey}&metric=true`)
    .then(res => res.json())
    .then(data =>  {
        console.log(data)
        setWeather(data)})
    .catch(err => console.log(err))
    // console.log(weather.DailyForecasts[0])
},[])


            return(
                <div className="main_container fc-center">
                    {<Search />}
                    { !weather.DailyForecasts ?  <p>Loading</p> : <TelAvivWeather weather={weather}/> }
                    <Forecasts5Days />
                    <Favourites />
                </div>
            )
        
    
}

export default Main