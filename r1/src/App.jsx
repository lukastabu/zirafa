import './App.scss';

import {useState} from 'react';
import MrGreen from './Components/MrGreen';
import Button from './Components/Button';

 function App() {
 
    const [mrGreen, setMrGreen] = useState('green');
    // const [nr, setnNr] = useState(1);
 
    const clickButton = () => (
         setMrGreen(s => s==='pink' ? 'green' : 'pink')
    )
 
    // const clickPlus = () => {
    //     setnNr (n => n+1);
    // }
    
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
