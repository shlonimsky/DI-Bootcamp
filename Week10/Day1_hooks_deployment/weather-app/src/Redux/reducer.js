const initState = {
    cityKeysFav : JSON.parse(localStorage.getItem("cityKeys")) || [],
    cityKeySearch : '',
    cityName : ''
}

export const reducer = (state=initState,action={}) => {
    console.log(state)
    switch (action.type){
        case 'SAVE_KEY_TO_FAV' : 
        state.cityKeys.push(action.payload)
        console.log(state.cityKeys)
        return{...state, cityKeys : state.cityKeys};
        
        case 'SHOW_FORECAST_BY_KEY' : return{...state, cityKeySearch : action.payload}

        case 'SHOW_CITY_NAME' : return{...state, cityName : action.payload}

        default : return {...state}
    }
}