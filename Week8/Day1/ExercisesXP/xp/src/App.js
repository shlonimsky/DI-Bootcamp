// import logo from './logo.svg';
import './App.css';
import WithoutJSX from './ex1'
import WithJSX from './ex2';
import UserFavoriteColors from './ex3'
import Exercise4 from './ex4'

const user = {
  firstName: 'Bob',
  lastName: 'Dylan',
  favAnimals : ['Horse','Turtle','Elephant','Monkey']
};

function App() {
  return (
    <>
      <WithoutJSX />
      <WithJSX />  
      <UserFavoriteColors fav_animals = {user.favAnimals}/>
      <Exercise4 />
    </>

  );
}

export default App;
