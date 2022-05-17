import { useState } from 'react';
import './App.scss';
import BlueSquare from './Components/james_bond/BlueSquare';

function App() {

    const [sc, setSc] = useState(false);

    const clickLabas = () => {
        setSc(true);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1 onClick={clickLabas}>Labas</h1>
                <BlueSquare sc={sc}></BlueSquare>
            </header>
        </div>
    );
}

export default App;
