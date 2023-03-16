import './App.css';
import Page from './Components/Page';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {


  return (
    <BrowserRouter>
       <div className="App">
       <h1>Snap Shot</h1>

          <Routes>
            <Route path='/mountain' element = {<Page theme = "mountain" />}/>
            <Route path='/beach' element = {<Page theme = "beach" />}/>
            <Route path='/bird' element = {<Page theme = "bird" />}/>
            <Route path='/food' element = {<Page theme = "food" />}/>
            <Route path='/search/:q' element = {<Page />}/>

          </Routes>
      </div>
    </BrowserRouter>
   
  );
}

export default App;
