import { Link } from "react-router-dom"
import logo from '../logo.png'

const Navbar = (props) => {
    return (
        <nav>
            <Link to={'/'} >
            <h4>MovieSeriesInfo</h4>
            </Link>
            <div>
                <img src={logo} alt="logo"/>
            </div>
        </nav>
    )
}

export default Navbar