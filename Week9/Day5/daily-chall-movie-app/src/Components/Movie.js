import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import {fetchMovieByID} from '../Redux/actions'

const Movie = (props) => {

const dispatch = useDispatch()
const id = useParams().id
const movie = useSelector(state => state.movie)

useEffect(() => {
    const getMovie = () => dispatch(fetchMovieByID(id))
    getMovie()
},[])

return (
        (!movie || movie.length === 0) ? (<p>Loading</p>) : (
            <>
            <div className="movie_container">
                <img src={movie.Poster} alt="poster" />
                <div className="description">
                    <h2>{movie.Title}</h2>
                    <p> <span>Genre: </span>{movie.Genre}</p>
                    <p> <span>Released: </span>{movie.Released}</p>
                    <p> <span>Rated: </span>{movie.Rated}</p>
                    <p> <span>IMDB Rating: </span>{ movie.Ratings[0].Value}</p>
                    <p> <span>Director : </span>{movie.Director}</p>
                    <p> <span>Writer : </span>{movie.Writer}</p>
                    <p> <span>Actors : </span>{movie.Actors}</p>
                </div>
            </div>
            <Link to={'/'}><h4>Go back to search</h4></Link>
            </>
        )
)

}

export default Movie