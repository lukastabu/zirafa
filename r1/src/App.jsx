import './App.scss';
import Button from './Components/008/Button';
import MrGreen from './Components/008/MrGreen';
import {useState} from 'react';

function App() {

    const [mrGreen, setMrGreen] = useState('green');

    const clickButton = () => {
        setMrGreen('pink')
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Uplifting</h1>
                <Button clickButton={clickButton}></Button>
                <MrGreen mrGreen={mrGreen}></MrGreen>
            </header>
        </div>
    );
}

export default App;
