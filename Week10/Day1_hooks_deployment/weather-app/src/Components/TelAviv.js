import { useState, useEffect } from "react"
// const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
const apikey = 'OzUJnnupHtHKQo9VDkzgoMLavh8JdvwN'



const TelAvivWeather = (props) => {
    let iconNumber=''
    const [icon,setIcon] = useState('')
    const {Day, Night,  Temperature} = props.weather.DailyForecasts[0]
    const dateNow = new Date()
    const hours = dateNow.getHours()
    console.log(hours, typeof hours)
    if (hours>=6 && hours<18) iconNumber =  Day.Icon<10 ? `0${Day.Icon}` : Day.Icon
    else iconNumber = Night.Icon<10 ? `0${Night.Icon}` : Night.Icon
    console.log(iconNumber)
    useEffect(() => setIcon(iconNumber))

   return (
        <div>
            <h5>Tel-Aviv</h5>
            <img src={`https://developer.accuweather.com/sites/default/files/${icon}-s.png`} />
            <p>Max: {Temperature.Maximum.Value} C</p>
            <p>Min: {Temperature.Minimum.Value} C</p>
            <p>{Day.IconPhrase}</p>
        </div>
    )

}

export default TelAvivWeather