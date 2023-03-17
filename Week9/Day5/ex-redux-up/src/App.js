// import logo from './logo.svg';
import './App.css';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Navbar from './Components/Navbar';
import Post from './Components/Post';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <Routes>
        <Route path = '/' element = { <Home /> }> </Route>
        <Route path = '/about' element = {<About />}></Route>
        <Route path = '/contact' element = {<Contact />}></Route>
        <Route path = '/:post_id' element = { <Post />} ></Route>

        {/* <Route path = '/' element = { <Home /> }> </Route> */}

        </Routes>

    </BrowserRouter>
   
  );
}

export default App;
