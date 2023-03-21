import { Link } from "react-router-dom"

const NavBar = (props) => {
    return(
        <nav className="fr-spc-bw">
            <h2>Weather App</h2>
            <ul>
                <li> <Link to={'/'} >Main</Link> </li>
                <li> <Link to={'/favourites'}>Favourite</Link> </li>
            </ul>
        </nav>
    )
}

export default NavBar