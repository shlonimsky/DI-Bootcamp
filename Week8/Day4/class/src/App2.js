import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import {Routes,Route, Link} from 'react-router-dom'

//<Link> - is like <a>, and in style we will use <a>
const App = () => {
  return (
    <>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/c'>Contact</Link>
      </nav>


      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={
        <>
          <About />
          <Contact />
        </>
        } />
        <Route path ='/c' element={<Contact />} />
      </Routes>
    </>
    )
}
export default App;