const initState = {
    robots : [],
    isLoading : false
}

export  const reducer = (state=initState, action = {}) => {
    console.log("in redicer",state)
    switch (action.type) {
        case 'LOADING' : return{...state,isLoading : true}
        case 'FETCH' : return {...state, robots : action.payload,isLoading : false}
        case 'SEARCH' : return{...state}
        default: return{...state}
    }
}