import MovieCard from "./MovieCard"
import { useState, useEffect } from "react"
import { useSelector } from "react-redux"

const MovieContainer =(props) => {
const [movies, setMovies] = useState([])
const allMovies = useSelector(state => state.allMovies)
console.log(allMovies)
useEffect (() => {
    setMovies(allMovies)
},[allMovies])
return (
    (!movies || movies.length === 0) ? (<h4>No results</h4>) : (
        <div className="movies_container">
            {
                movies.map(movie => (
                    <MovieCard movie={movie} key={movie.imdbID}/>
                ))
            }
        </div>
    )
)

}

export default MovieContainer