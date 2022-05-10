import './App.css';
import Car from './Components/002/Car';

function App() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>PROPS</h1>
          <Car maker="Opel" color="blue" size="25"></Car>
          <Car maker="Volvo" color="dark red" size="10"></Car>
          <Car maker="MB" color="silver" size="14"></Car>
        </header>
      </div>
    );
  }
  
  export default App;