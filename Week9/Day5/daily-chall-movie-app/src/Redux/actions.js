const apiKey = 'cfa65cc'


export const fetchAllMovies = (text) => (dispatch,getState) => {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&s=${text}`)
    .then(res => res.json())
    .then(data => {
        dispatch({
            type : 'FETCH_MOVIES',
            payload : data.Search
        })
    })
}


export const fetchMovieByID = (id) => (dispatch) => {
    fetch(`https://www.omdbapi.com/?apikey=${apiKey}&i=${id}`)
    .then(res => res.json())
    .then(data => {
        dispatch({
            type : 'FETCH_MOVIE',
            payload : data
        })
    })
}