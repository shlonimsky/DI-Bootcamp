import './App.css';
import ErrorBoundary from "./ErrorBoundary"
import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import PostList from './Component/PostList';
import SocialMedias from './Component/Example1';
import Skills from './Component/Example2'
import Experiences from './Component/Example3'

const  HomeScreen =() => {
  return(
    <header>
      <h1>Home</h1>
    </header>
  )
}

const ProfileScreen =() => {
  return(
    <header>
      <h1>Profile</h1>
    </header>
  )
}

const  ShopScreen = () => {
  throw  Error ("An error has occured")

  return(
    <header >
      An error has occured
    </header>
  )
}

async function getData (){
  const req = await fetch("https://webhook.site/1252bef0-9c8c-4317-b6a6-567e2ef0d104",{
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      key1: 'myusername',
      email: 'mymail@gmail.com',
      name: 'Isaac',
      lastname: 'Doe',
      age: 27
    })
  })
  console.log(req)
  const resp = await req.json()
  console.log(resp)
}

function App() {
  return (
    <div className="App">
      <nav className='nav nav-pills'>
        <NavLink className="nav-link" to = '/'>Home</NavLink>
        <NavLink className="nav-link" to = '/profile'>Profile</NavLink>
        <NavLink className="nav-link" to = '/shop'>Shop</NavLink>
      </nav>

      <Routes>
        <Route path="/" element = {
          <ErrorBoundary>
            <HomeScreen />
            <PostList />
            <SocialMedias />
            <Skills />
            <Experiences />
            <p>Exercise 4</p>
            <button onClick={getData}>send fetch</button>
          </ErrorBoundary>
        } />
        <Route path='profile' element = {
          <ErrorBoundary>
            <ProfileScreen />
          </ErrorBoundary>
        } />
        <Route path = "/shop" element={
          <ErrorBoundary>
            <ShopScreen />
          </ErrorBoundary>
        } />
      </Routes>
    </div>
  );
}

export default App;
