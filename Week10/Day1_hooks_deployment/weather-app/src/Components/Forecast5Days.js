import { useSelector } from "react-redux"
import { useState, useEffect } from "react"
// const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
const apikey = 'OzUJnnupHtHKQo9VDkzgoMLavh8JdvwN'
const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']


const Forecasts5Days = (props) => {
const [forecast,setForecast] = useState([])
const keys = useSelector(state => state.cityKeySearch)
const city = useSelector(state => state.cityName)
console.log("5dayforecast",keys)


useEffect(() => {
    if (!keys) return
    fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${keys}?apikey=${apikey}&metric=true`)
    .then(res => res.json())
    .then(data => setForecast(data.DailyForecasts))
    console.log(forecast)

},[keys])


    return (
        <div>
            Forecasts5Days
            { !keys ? <></> : (
                <div>{city}
                    {forecast.map(( day, i) => { 
                        const date1 = new Date(day.Date);
                        const dayNum = date1.getDay() 
                        return (
                        <div key={i}>
                            <h4>{week[dayNum]}</h4>
                            <div> 
                                <p>Max: {day.Temperature.Maximum.Value} C</p>
                                <img alt="img" src={`https://developer.accuweather.com/sites/default/files/${
                                    day.Day.Icon>10 ? day.Day.Icon : "0"+day.Day.Icon 
                                }-s.png`} />
                            </div>
                            <div>
                                <p>Min: {day.Temperature.Minimum.Value} C</p>
                                <img alt="img" src={`https://developer.accuweather.com/sites/default/files/${
                                    day.Night.Icon>10 ? day.Night.Icon : "0"+day.Night.Icon 
                                }-s.png`} />
                            </div>
                        </div>
                    )})}
                </div>
            )}
        </div>
    )
}

export default Forecasts5Days