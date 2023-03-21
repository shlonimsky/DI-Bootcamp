export const addNewCityKey = (key) => {
    return {
        type : 'SAVE_KEY',
        payload : key
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