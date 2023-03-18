import { Link } from "react-router-dom"

const MovieCard = (props) => {
    const {Title,Poster,Year,imdbID} = props.movie
return (
    <div>
        <img src={Poster} alt="poster" />
        <p>{Title} - {Year}</p>
        <button>
        <Link to={`/movie/${imdbID}`}>More Details</Link>

        </button>
    </div>
)
}

export default MovieCard