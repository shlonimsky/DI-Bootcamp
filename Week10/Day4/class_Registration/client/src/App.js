import './App.css';
import {Routes, Route} from 'react-router-dom';
import { useState, createContext } from 'react';

import Home from './Components/Home';
import About from './Components/About';
import LoginRegister from './Components/LoginRegister'
import Nav from './Components/Nav';

export const AppContext = createContext(null);


function App() {

const [accessToken, setAccessToken] = useState()

  return (

    <AppContext.Provider value={{accessToken,setAccessToken}}>
    <div className="App">
     <Nav />
     <Routes>
        <Route path='/login' element={ <LoginRegister title='Login'/> } />
        <Route path='/register' element={ <LoginRegister title='Register' /> } />
        <Route path='/' element={ <Home /> } />
        <Route path='/about' element={ <About /> } />
     </Routes>
    </div>

    </AppContext.Provider>

  );
}

export default App;
