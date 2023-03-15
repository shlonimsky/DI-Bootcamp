import './App.css';
import Card from './Components/Card'

function App() {
  return (
    <div className="App">
     <Card iconClass={"material-symbols-outlined"} iconCont={"sports_basketball"} title={"Basketball"} score={151}/>
     <Card iconClass={"material-symbols-outlined"} iconCont={"sports_tennis"} title={"Tennis"} score={1180}/>
     <Card iconClass={"material-symbols-outlined"} iconCont={"downhill_skiing"} title={"Skiing"} score={1123280}/>
     <Card iconClass={"material-symbols-outlined"} iconCont={"scuba_diving"} title={"Diving"} score={1123.280}/>

    </div>
  );
}

export default App;

