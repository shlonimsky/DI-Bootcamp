import { BrowserRouter, Route,Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Landing from "./Components/Landing";
import Footer from './Components/Footer'
import Movie from './Components/Movie'
import './style.css'

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
        <Route path="/" element={ <Landing />}></Route>
        <Route path="/movie/:id" element = { <Movie />} ></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
   
  );
}

export default App;
