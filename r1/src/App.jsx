import './App.css';
import CarsList from './Components/003/CarsList';

const cars = [
    'Opel',
    'MB',
    'FIAT',
    'Ford',
    'Kamaz'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LISTS</h1>
            <CarsList cars={cars}></CarsList>
      </header>
    </div>
  );
}

export default App;
