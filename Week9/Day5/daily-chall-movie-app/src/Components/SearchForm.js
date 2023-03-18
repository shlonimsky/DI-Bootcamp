import { useState } from "react"
import { useDispatch } from "react-redux"
import {fetchAllMovies} from '../Redux/actions'

const SearchForm = (props) => {
    const dispatch = useDispatch()
    const [text,setText] = useState('')
    console.log(text)
    return (
        <div className="movie_container">
        <input onChange={(e) => setText(e.target.value)} type="text" placeholder="search"/>
            <button onClick={() => dispatch(fetchAllMovies(text))}>Search</button>
        </div>
    )
}

export default SearchForm