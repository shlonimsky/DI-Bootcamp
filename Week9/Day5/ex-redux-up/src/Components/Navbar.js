import logo from '../blog.png'
import {React, Router, Link} from 'react-router-dom'

const Navbar = (props) => {
    return(
        <nav>
            <Link to={'/'} >My BLOG</Link>
            <ul className='right hide-on-med-and-down'>
                <li> <Link to={'/'}>Home</Link> </li>
                <li> <Link to = {'/about'} >About</Link> </li>
                <li> <Link to = {'/contact'}>Contact</Link> </li>
            </ul>
        </nav>
    )
}

export default Navbar