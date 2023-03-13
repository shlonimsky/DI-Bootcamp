import {connect} from 'react-redux';
// import MovieDetails from './MovieDetails'
// import {moviesReducer} from '../Redux/reducers'
import {selectMovie} from '../Redux/actions'

const  MovieList = (props) => {
    return (
        <div>Movie List
            {props.movies.map((film,i) => (
                <div className='flex' key={i}>
                    <p>{film.title}</p>
                    <button onClick={() => 
                        props.dispatch(selectMovie(film))
                        }>Details</button>
                </div>
                
            ))}
        </div>
    )
}


const mapStateToProps = (state) => {
   return {movies : state.movies} 
}
// const mapDispatchToProps =(dispatch) => {
//     console.log(dispatch)
//     return { selectMovie : (obj) => dispatch(selectMovie(obj))}
// }

export default connect(mapStateToProps)(MovieList)