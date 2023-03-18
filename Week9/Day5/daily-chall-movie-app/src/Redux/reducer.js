const initState = {
    allMovies : [],
    movie : []
}

export const reducer = (state = initState, action={}) => {
    switch (action.type){
        case 'FETCH_MOVIES' : return {...state, allMovies : action.payload}
        case 'FETCH_MOVIE' : return {...state, movie : action.payload}
        default : return {...state}
    }

}