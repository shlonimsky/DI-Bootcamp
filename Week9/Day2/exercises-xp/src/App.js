import './App.css';
import TransactionForm from './Components/TransactionForm';
import TransactionList from './Components/TransactionList'

function App() {
  return (
    <div className="App">
      <h2>Financial Transactions:</h2> 
      <TransactionForm />
      <hr/>
      <TransactionList />
    </div>
  );
}

export default App;
