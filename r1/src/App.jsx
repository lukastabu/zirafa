import './App.css';
import FatCat from './Components/004/FatCat';
import FatDog from './Components/004/FatDog';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>State</h1>
        <FatCat color="Brown"></FatCat>
        <FatDog color="crimson"></FatDog>
      </header>
    </div>
  );
}


export default App;
