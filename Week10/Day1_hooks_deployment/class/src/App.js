import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

//useNavigate HOOK from react-router-dom
// const func =( ) => {
//   const nav=useNavigate()
//   nav('/')
// }

// new: createContext, useContext hooks - basics of react to share state to children
import ChaangeName from './Components/ChangeName';
import { createContext } from 'react';

export const AppContext = createContext(null) //null to prevent undefine error

function App() {
const [name,setName] = useState('Claire')

  return (
         <div className="App">
          <header className="App-header">
          {name}
          {/* <ChaangeName setName={setName} /> */}

          <AppContext.Provider value={{setName,name}}>
              <ChaangeName />
          </AppContext.Provider>

          </header>
        </div>
   
  );
}

export default App;
