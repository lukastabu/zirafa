import './App.css';
import Car from './Components/002/Car';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROPS</h1>
          <Car maker="Opel" color="blue"></Car>
          <Car maker="Volvo" color="dark red"></Car>
          <Car maker="MB" color="silver"></Car>
        </header>
      </div>
    );
  }
  
  export default App;