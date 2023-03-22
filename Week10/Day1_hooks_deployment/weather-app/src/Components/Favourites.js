import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import {showForecastForFav} from '../Redux/actions'
const apikey = 'N5E41cZSreLev35wgGiXwM8VBAViY0Wm'


const Favourites = (props) => {
    const favCities = useSelector(state => state.favourites)
    // let forecast =[]
    const [forecast,setForecast] = useState([])
    const dispatch = useDispatch()
    const forecastRedux = useSelector(state => state.forecastFav)
    console.log("favCtites: ", favCities)
console.log('forecastRedux',forecastRedux)

    useEffect(() => {
        dispatch(showForecastForFav(favCities))
        console.log("forecastRedux in useEffect", forecastRedux)
        // favCities.map((el,i) => {
            // console.log("i in fetch",i)
            // fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${el.cityKey}?apikey=${apikey}&metric=true`)
            // .then(res => res.json())
            // .then(data =>  {
            //     console.log("response api",data)
            //     data.DailyForecasts[0]["cityName"] = el.name
            //     forecast.push(data.DailyForecasts[0])
            //     // setForecast(forecast)
            //     // setForecast(data.DailyForecasts[0])
            //     console.log('afretfFetch',forecast)
            //     setForecast(forecast)

            // })
            // .catch(err => console.log(err))        
        // })
        // setForecast(forecast)

        // console.log('forecast in useEffect after map',forecast)
setForecast(forecastRedux)

    },[favCities])
// console.log('forecast after useEffect',forecast)
    const dateNow = new Date()
    const hours = dateNow.getHours()
    let iconNumber
  

    return(
        <div className="fc-center">
            Favouritesggggg
            <div className="fr-spc-bw card">
            
            { !forecast[0] ? <></> : (
                forecast.map((el,i) => {
                    console.log("i",i)
                    if (hours>=6 && hours<18) iconNumber =  el.Day.Icon<10 ? `0${el.Day.Icon}` : el.Day.Icon
                    else iconNumber = el.Night.Icon<10 ? `0${el.Night.Icon}` : el.Night.Icon
                    return (
                    <div key={i}>jgjg
                    <h5>{el.cityName}</h5>
                    <img src={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`} />
                    <p>Max: {el.Temperature.Maximum.Value} C</p>
                    <p>Min: {el.Temperature.Minimum.Value} C</p>
                    <p>{el.Day.IconPhrase}</p> 
                    </div>
               )})
            )}
{/* 
                    { !forecastRedux[0] ? <></> : (
                    forecastRedux.map((el,i) => {
                    console.log("i",i)
                    if (hours>=6 && hours<18) iconNumber =  el.Day.Icon<10 ? `0${el.Day.Icon}` : el.Day.Icon
                    else iconNumber = el.Night.Icon<10 ? `0${el.Night.Icon}` : el.Night.Icon
                    return (
                    <div key={i}>
                    <h5>{el.cityName}</h5>
                    <img src={`https://developer.accuweather.com/sites/default/files/${iconNumber}-s.png`} />
                    <p>Max: {el.Temperature.Maximum.Value} C</p>
                    <p>Min: {el.Temperature.Minimum.Value} C</p>
                    <p>{el.Day.IconPhrase}</p> 
                    </div>
               )})
            )} */}
            </div>
        </div>
    )
}

export default Favourites