const apikey = 'N5E41cZSreLev35wgGiXwM8VBAViY0Wm'

export const addToFavourite = (obj) => {
    return {
        type : 'SAVE_TO_FAV',
        payload : obj
    }
}
export const removeFromFavourite = (obj) => {
    return {
        type : 'REMOVE_FROM_FAV',
        payload : obj
    }
}

export const showForecastByKey = (key) => {
    return {
        type : 'SHOW_FORECAST_BY_KEY',
        payload : key
    }
}

export const showCityName = (name) => {
    return {
        type : 'SHOW_CITY_NAME',
        payload : name
    }
}

export const showForecastForFav = (arr) => (dispatch) => {
    const forecasts = []
    arr.map(el => {
        fetch(`http://dataservice.accuweather.com/forecasts/v1/daily/1day/${el.cityKey}?apikey=${apikey}&metric=true`)
        .then(res => res.json())
        .then(data => {
            data.DailyForecasts[0]["cityName"] = el.name
            forecasts.push(data.DailyForecasts[0])
        })
    }) 
console.log(forecasts)
    return dispatch({
        type : 'FETCH_FORECAST',
        payload : forecasts
    })
}