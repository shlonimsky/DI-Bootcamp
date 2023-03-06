import Car from './Component/Car'
import Events from './Component/Events';
import Phone from './Component/Phone'
import Colour from './Component/Color'

function App() {
  const carinfo = {name: "Ford", model: "Mustang", color : "pink"};
  return (
   <>
   <Car car = {carinfo}/>
   <Events />
   <Phone />
   <Colour />
   </>
  );
}

export default App;
