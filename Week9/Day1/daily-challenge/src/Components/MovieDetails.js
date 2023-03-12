import { connect } from "react-redux";

const MovieDetails = (props) => {
    console.log(props)
    return (
        <div>
            <p>Movie's Detailes : </p>
            {!props.selectedMovie ? (<p>Choose a movie</p>) :(
                <>
                <p>Title: {props.selectedMovie.title}</p>
                <p>Release Date: {props.selectedMovie.releaseDate}</p>
                <p>Rating : {props.selectedMovie.rating}</p>
                </>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return{ selectedMovie : state.selectedMovie}
}

export default connect(mapStateToProps)(MovieDetails)