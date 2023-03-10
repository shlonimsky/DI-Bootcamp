import './App.css';
import NavBar from './Components/NavBar';
import React,{Component} from 'react';
import allSuperheroes from './Components/superHeroes.json'
import Card from './Components/Card'
const {superheroes} = allSuperheroes

class  App extends Component{
  constructor(){
    super();
    this.state = {
        score : 0,
        total : 0,
    }
    this.heroes = superheroes
    
  }
  
  handleClick = (person) => {
    this.heroes = []
    let {score,total} = this.state

    if (!person.clicked)  {
      this.setState({
      score : ++score,
      total : score > total? score :total
    })
      person.clicked = !person.clicked
    }

    else {
      superheroes.map( hero => hero.clicked=false)
       this.setState({score : 0})
    }
    this.shufle()
  }

  shufle = () => {
    let arr = superheroes.map((el,i) => i)
    do{
      const random = Math.floor(Math.random()*arr.length)
      this.heroes.push(superheroes[arr[random]])
      arr.splice(random,1)
    } while(arr.length>0)
    console.log(this.heroes)
    
  }

componentDidMount(){
  console.log('mount')
}

  render(){

    const {score,total} = this.state
    return (
      <>
        <NavBar score={score} total={total} />
      <div id='container'>
        {this.heroes.map(hero => (
          <div key={hero.id} onClick={() => this.handleClick(hero)} className="card">
            <Card hero={hero} />
          </div>
        ))}
      </div>
      </>
    )
  }
  
}

export default App;
