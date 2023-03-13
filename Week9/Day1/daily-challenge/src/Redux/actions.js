export const FIND_MOVIE = 'FIND'
export const selectMovie = (movie) => {
    return {
        type : FIND_MOVIE,
        payload : movie
    }
}