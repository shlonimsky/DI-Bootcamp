// import logo from './logo.svg';
import './App.css';
import Hello from "./Hello";
import Car from './Car';
import Actor from './Actor'

const charactersJson = {
  "people": [
    {
      "id" : "1",
      "name": "Luke Skywalker",
      "height": "172",
      "mass": "77",
      "hair_color": "blond",
    },
    {
      "id" : "2",
      "name": "C-3PO",
      "height": "167",
      "mass": "75",
      "hair_color": "n/a",
    },
    {
      "id" : "3",
      "name": "R2-D2",
      "height": "96",
      "mass": "32",
      "hair_color": "n/a",
    }
  ]
}



const characters = JSON.parse(JSON.stringify(charactersJson)) //making a copy

const actors = [
  {fname: "Djerard",
  lname : "Batler",
  img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg/1200px-Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg"},
  {fname: "Jhony",
  lname : "Depp",
  img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg/1200px-Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg"},
  {fname: "Monica",
  lname : "Bellucci",
  img : "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg/1200px-Monica_Belluci_at_Miami_Film_Festival_2016_%28cropped%29.jpg"},
]

function App() {
  // const carName = "Lexus"
  // const brand = "Ford"
  
  const listCars = [
    {
      id : 1,
      name: "dodge d200",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 2,
      name: "hi 1200d",
      year: "1970-01-01",
      origin: "USA"
    },
    {
      id : 3,
      name: "datsun pl510",
      year: "1971-01-01",
      origin: "Japan"
    },
    {
      id : 4,
      name: "chevrolet vega 2300",
      year: "1971-01-01",
      origin: "USA"
    }
  ]




  return (
    <>
    <Hello/>
    <Car cars = {listCars}/>
    <Actor actorList = {actors}/>
    </>
  );
}

export default App;
//pop - reserved for react, sets for properties