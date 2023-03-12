export const selectMovie = (movie) => {
    return {
        type : 'FIND',
        payload : movie
    }
}