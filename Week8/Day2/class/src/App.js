import logo from './logo.svg';
import './App.css';
import Car from './components/Car'
import Actors from './components/Actors'
import Sunrise from './components/Sunrise'

function App() {

  const carColors = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown"
  ]

  return (
    <>
    <Sunrise />
    <Car colors = {carColors}/>
    <Actors />
    </>
  );
}

export default App;
