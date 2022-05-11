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
    {color: 'crimson', size: 30},
    {color: 'orange', size: 14},
    {color: 'yellow', size: 52},
    {color: 'green', size: 27},
    {color: 'skyblue', size: 40},
    {color: 'darkblue', size: 17},
    {color: 'darkmagenta', size: 22}
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
