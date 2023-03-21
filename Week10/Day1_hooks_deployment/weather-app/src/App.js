import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar';
import Main from './Components/Main';
import Favourites from './Components/Favourites';
function App() {
  return (
    <BrowserRouter>
      <NavBar />
    <Routes>
      <Route path='/' element={ <Main /> }></Route>
      <Route path = '/favourites' element={ <Favourites />}></Route>
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
