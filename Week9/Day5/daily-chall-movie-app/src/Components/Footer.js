import { Link } from "react-router-dom"


const Footer = (props) => {
    return (
        <footer>
            <h4> Using  React JS & Redux JS integrated with external movies data API 
                <Link to={'https://www.omdbapi.com/'}> OMDB</Link>
            </h4>
        </footer>
    )
}

export default Footer