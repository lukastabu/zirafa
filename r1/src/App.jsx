import './App.scss';
import Button from './Components/008/Button';
import MrGreen from './Components/008/MrGreen';
import {useState} from 'react';

function App() {

    const [mrGreen, setMrGreen] = useState('green');
    const [nr, setNr] = useState(1);

    const clickButton = () => {
        setMrGreen(s => s ==='pink' ? 'green' : 'pink');
    }

    const clickPlus = () => {
        setNr(n => n + 1);
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Uplifting <span style={{color:'green'}}>{nr}</span></h1>
                <Button clickButton={clickButton} clickPlus={clickPlus}></Button>
                <MrGreen mrGreen={mrGreen}></MrGreen>
            </header>
        </div>
    );
}

export default App;
