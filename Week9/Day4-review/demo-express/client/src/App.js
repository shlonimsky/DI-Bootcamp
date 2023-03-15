import './App.css';
import Products from './Components/Products';
import{BrowserRouter,Routes,Router, Route} from 'react-router-dom'
import ProductPage from './Components/ProductPage';

function App() {
  return (
    <BrowserRouter>
     <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Products />} />
          <Route path='/:id' element={<ProductPage />} />

        </Routes>
      </header>
    </div>
    </BrowserRouter>
   
  );
}

export default App;
