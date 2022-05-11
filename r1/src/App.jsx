import './App.css';
// import CarsList from './Components/003/CarsList';
import Rainbow from './Components/003/Rainbow';

// const cars = [
//     'Opel',
//     'MB',
//     'FIAT',
//     'Ford',
//     'Kamaz'
// ];

const rainbow = [
    'crimson',
    'orange',
    'yellow',
    'green',
    'skyblue',
    'darkblue',
    'darkmagent'
];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>LISTS</h1>
            <Rainbow colors={rainbow}></Rainbow>
      </header>
    </div>
  );
}

export default App;
