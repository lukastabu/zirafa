import './App.css';
import Car from './Components/002/Car';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROPS</h1>
          <Car price={5500} markSize="10" mark="red" maker="Opel" color="blue" size="25" ff="'Courier New', Courier, monospace"></Car>
          <Car price={3500} markSize="40" mark="yellow" maker="Volvo" color="dark red" size="24" ff="'Times New Roman', Times, serif"></Car>
          <Car price={500} markSize="33" mark="green" maker="MB" color="silver" size="28" ff="Arial, Helvetica, sans-serif"></Car>
        </header>
      </div>
    );
  }
  
  export default App;