const initState = {
    favourites : JSON.parse(localStorage.getItem("favourites")) || [],
    cityKeySearch : '',
    cityName : '',
    forecastFav : []
}

export const reducer = (state=initState,action={}) => {
    console.log(state)
    switch (action.type){

        case 'SAVE_TO_FAV' : 
        state.favourites.push(action.payload)
        console.log("add",state.favourites)
        localStorage.setItem('favourites',JSON.stringify(state.favourites))
        return{...state, favourites : state.favourites};

        case 'REMOVE_FROM_FAV' :
            state.favourites.splice(state.favourites.indexOf(action.payload),1)
            localStorage.setItem('favourites',JSON.stringify(state.favourites))
            console.log("remove:",state.favourites)
            return{...state, favourites : state.favourites};

        case 'FETCH_FORECAST' : return {...state, forecastFav : action.payload}
        
        case 'SHOW_FORECAST_BY_KEY' : return{...state, cityKeySearch : action.payload}

        case 'SHOW_CITY_NAME' : return{...state, cityName : action.payload}

        default : return {...state}
    }
}