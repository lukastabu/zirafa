import './App.scss';
import Antras from './Components/006/Antras';
import Vienas from './Components/006/Vienas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Labas</h1>
        <Vienas skaicius={1} spalva="black" klase="small"></Vienas>
        <Antras skaicius={5} spalva="pink" klase="big"></Antras>
      </header>
    </div>
  );
}

export default App;
