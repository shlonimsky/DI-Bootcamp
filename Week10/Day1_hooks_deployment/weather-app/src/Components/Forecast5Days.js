import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { addToFavourite, removeFromFavourite } from "../Redux/actions"
// const apikey = 'wDxhLTEMv37UHBwB7kBcxivNtqRaw5gT'
// const apikey = 'OzUJnnupHtHKQo9VDkzgoMLavh8JdvwN'
const apikey = 'N5E41cZSreLev35wgGiXwM8VBAViY0Wm' //ashl

const week=['Sun','Mon','Tue','Wed','Thu','Fri','Sat']


const Forecasts5Days = (props) => {
    const dispatch = useDispatch()
    const [forecast,setForecast] = useState([])
    const key = useSelector(state => state.cityKeySearch)
    const city = useSelector(state => state.cityName)
    const favourites = useSelector(state => state.favourites)
    let [isFavourite,setFavourite] = useState(false)
    console.log(favourites)
    // let isFavourite = false
    console.log("5dayforecast",key)


    useEffect(() => {
        if (!key) return

        if( favourites.length !== 0 ) isFavourite = favourites.some(el => el.cityKey === key)

        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/5day/${key}?apikey=${apikey}&metric=true`)
        .then(res => res.json())
        .then(data => setForecast(data.DailyForecasts))
    },[key])

const nandleClick = (e) => {
    console.log(isFavourite)
    isFavourite ? dispatch(removeFromFavourite({cityKey : key, name : city})) : dispatch(addToFavourite({cityKey : key, name : city}))
    setFavourite(!isFavourite)
}


    return (
        <div>
            
            { !key ? <></> : (
                <div >
                <h2>{city}</h2>
                <div className="fr-spc-bw">
                    {forecast.map(( day, i) => { 
                        const date1 = new Date(day.Date);
                        const dayNum = date1.getDay() 
                        return (
                        <div key={i} className="fc-center card">
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
                    <button onClick={(e) => nandleClick(e)} >{isFavourite? 'Remove from favourite' : 'Add to Favourite'}</button>
                </div>
                </div>
            )}
        </div>
    )
}

export default Forecasts5Days